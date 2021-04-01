import { ConnectionInfo } from './../../../../../../../sdk/models/ConnectionInfo';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/sdk';

@Component({
  selector: 'app-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss']
})
export class ConnectionStatusComponent implements OnInit {
  loading=false;
  connections: ConnectionInfo[]=[{"sessionId":"e23677d1-3d0e-4ef5-9d84-f0833460eb5b","serviceName":"Portainer","sourceEndPoint":"127.0.0.1:35478","targetEndPoint":"139.162.99.205:9000","serviceId":1},{"sessionId":"7a2ebd7a-572c-48f1-9c7c-e117bcfa7ffa","serviceName":"Portainer","sourceEndPoint":"127.0.0.1:35480","targetEndPoint":"139.162.99.205:9000","serviceId":1}];

  constructor(private _serviceService:ServiceService) { }

  ngOnInit(): void {
    //this.loadConnections();
  }

  loadConnections(){
    this.loading = true;
    this._serviceService.listConnections().subscribe(conns=>{
      this.connections=conns;
      this.loading = false;
    })
  }

  disconnect(sessionId:string | undefined){

  }

  getDiscription(conn: ConnectionInfo){
    return `From: ${conn.sourceEndPoint}; To: ${conn.targetEndPoint}`;
  }
}
