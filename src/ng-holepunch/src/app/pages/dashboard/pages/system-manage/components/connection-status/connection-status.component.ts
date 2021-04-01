import { ConnectionInfo } from './../../../../../../../sdk/models/ConnectionInfo';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/sdk';

@Component({
  selector: 'app-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss']
})
export class ConnectionStatusComponent implements OnInit {

  connections: ConnectionInfo[]=[];
  constructor(private _serviceService:ServiceService) { }

  ngOnInit(): void {
    this._serviceService.listConnections().subscribe(conns=>{
      this.connections=conns;
    })
  }

}
