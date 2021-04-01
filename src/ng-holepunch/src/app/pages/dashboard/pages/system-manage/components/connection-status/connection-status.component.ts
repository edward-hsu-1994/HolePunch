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
  connections: ConnectionInfo[]=[];

  constructor(private _serviceService:ServiceService) { }

  ngOnInit(): void {
    this.loadConnections();
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
