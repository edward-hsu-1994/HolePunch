import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Service, ServiceService } from 'src/sdk';

@Component({
  selector: 'app-service-manage',
  templateUrl: './service-manage.component.html',
  styleUrls: ['./service-manage.component.scss']
})
export class ServiceManageComponent implements OnInit {
  loading =false;
  services:any[]=[];
  constructor(
    private _serviceService: ServiceService,
    private _message: NzMessageService,
    private _router: Router,
    private _modal: NzModalService) { }

  ngOnInit(): void {
    this.loadServices();
  }


  loadServices(){
    this.loading = true;
    this._serviceService.listService().subscribe(services=>{
      this.services = services;
      this.loading = false;
    })
  }

  updateService(service: any){
    const id = this._message.loading('Update Service...', { nzDuration: 0 }).messageId;
    service.loading = true;
    this._serviceService.updateService(service).subscribe(service2=>{
      service.loading = false;
      service.realPort = service2.realPort;
      this._message.remove(id);
      this._message.success('Service Updated');
    });
  }

  deleteService(service:Service){
    this._modal.confirm({
      nzTitle: `Do you Want to delete this service (${service.name})?`,
      nzContent: 'When clicked the OK button, this service will be deleted.',
      nzOnOk: () =>{
        const id = this._message.loading('Deleting Service...', { nzDuration: 0 }).messageId;
        this._serviceService.deleteService(<number>service.id).subscribe(()=>{
          this.loadServices();
          this._message.remove(id);
          this._message.success('User Deleted');
        });
      }
    });
  }
}
