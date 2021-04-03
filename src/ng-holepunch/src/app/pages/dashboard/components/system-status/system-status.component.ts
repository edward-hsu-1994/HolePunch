import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { interval, Observable, Observer, Subscription, timer } from 'rxjs';
import { SystemService } from 'src/sdk/services/system.service';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss']
})
export class SystemStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  network_out = {
    series: [{
        type: 'gauge',
        progress: {
            show: true,
            width: 10
        },
        axisLine: {
          lineStyle: {
          width: 10
        }
        },
        data: [{
            value: 50,
            name: 'NETWORK\r\nOUT(Mbps)',
        }],
        detail: {
          valueAnimation: true,
          fontSize: 20,
          offsetCenter: [0, '70%']
        },
        max: 100
      }]
    };

  network_in = {
      series: [{
          type: 'gauge',
          progress: {
              show: true,
              width: 10
          },
          axisLine: {
            lineStyle: {
              width: 10
            }
          },
          data: [{
              value: 50,
              name: 'NETWORK\r\nIN(Mbps)',
          }],
          detail: {
            valueAnimation: true,
            fontSize: 20,
            offsetCenter: [0, '70%']
          },
          max: 100
        }]
    };

  network_in_chart!:echarts.ECharts;
  network_out_chart!:echarts.ECharts;
  timer!:Subscription;
  constructor(private _systemService: SystemService) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.network_in_chart = echarts.init(<HTMLElement>document.getElementById('network_in'));
    this.network_out_chart = echarts.init(<HTMLElement>document.getElementById('network_out'));

    this.updateGauge();

    this.timer = interval(1000).subscribe(()=>{
      this._systemService.getNetworkSpeed().subscribe((speed)=>{
        this.network_in.series[0].data[0].value = Math.ceil(<number>speed.in / 1000000);
        this.network_out.series[0].data[0].value = Math.ceil(<number>speed.out / 1000000);
        this.network_in.series[0].max = Math.ceil((<number>speed.maxIn / 1000000)/100)*100;
        if(this.network_in.series[0].max == -1){
          this.network_in.series[0].max = 1000
        }

        this.network_out.series[0].max = Math.ceil((<number>speed.maxOut / 1000000)/100)*100;
        if(this.network_out.series[0].max == -1){
          this.network_out.series[0].max = 1000
        }
        this.updateGauge();
      })
    })
  }


  updateGauge(){
    this.network_in_chart.setOption(this.network_in);
    this.network_out_chart.setOption(this.network_out);
  }

  @HostListener('window:resize', ['$event'])
  resize(e:any){
    this.network_in_chart.resize();
    this.network_out_chart.resize();
  }

  ngOnDestroy(): void {
    this.timer?.unsubscribe();
  }
}
