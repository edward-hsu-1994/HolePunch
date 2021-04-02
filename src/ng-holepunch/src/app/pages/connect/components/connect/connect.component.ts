import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Service, ServiceService, UserService } from 'src/sdk';
import * as signalR from "@microsoft/signalr";
import { debug } from 'node:console';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  isAdmin = false;
  showMyServices = false;
  showChangePassword = false;

  passwordVisible=false;

  newPassword = '';
  services: Service[] = [];
  static hubConnection: signalR.HubConnection;
  static icon = "api";

  static statusTitle = "";
  static statusDesc = "";


  get icon_str(){
    return ConnectComponent.icon;
  }
  get statusTitle_str(){
    return ConnectComponent.statusTitle;
  }
  get statusDesc_str(){
    return ConnectComponent.statusDesc;
  }

  constructor(
    private _modal: NzModalService,
    private _router: Router,
    private _userService: UserService,
    private _serviceService: ServiceService,
    private _message: NzMessageService) {

    if(!ConnectComponent.hubConnection){
      ConnectComponent.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl('/session',{ accessTokenFactory: () => <string>sessionStorage.getItem('token') })
        .withAutomaticReconnect()
        .build();

      ConnectComponent.hubConnection
        .onreconnecting(()=>{
          ConnectComponent.statusTitle = "Reconnecting...";
          ConnectComponent.statusDesc = "Please keeping this window.";
          ConnectComponent.icon = 'exclamation-circle';
        });

      ConnectComponent.hubConnection
        .onreconnected(()=>{
          ConnectComponent.statusTitle = "Successfully Connected To Server!";
          ConnectComponent.statusDesc = "Please keeping this window.";
          ConnectComponent.icon = 'check-circle';
        });

      ConnectComponent.hubConnection
        .onclose(()=>{
          ConnectComponent.statusTitle = "Disconnected!";
          ConnectComponent.statusDesc = "Please relogin or check your network.";
          ConnectComponent.icon = "close-circle";
        });
    }
  }

  ngOnInit(): void {
    this._userService.isAdmin().subscribe(isAdmin=>{
      this.isAdmin = isAdmin;
    });

    this.startSignalR();
  }

  startSignalR(){
    if(ConnectComponent.hubConnection.state !== signalR.HubConnectionState.Disconnected){
      return;
    }

    ConnectComponent.statusTitle = "Connecting To Server...";
    ConnectComponent.statusDesc = "Please keeping this window.";
    ConnectComponent.icon = 'api';

    ConnectComponent.hubConnection
      .start()
      .then(() => {
        ConnectComponent.statusTitle = "Successfully Connected To Server!";
        ConnectComponent.statusDesc = "Please keeping this window.";
        ConnectComponent.icon = 'check-circle';
      })
      .catch(err => {
        ConnectComponent.statusTitle = "Unsuccessfully Connected To Server!";
        ConnectComponent.statusDesc = "Please relogin or check your network.";
        ConnectComponent.icon = "close-circle";
        console.log(err);
      });
  }

  goToDashboard(){
    this._router.navigateByUrl('/dashboard');
  }

  openMyServices(){
    const id = this._message.loading('Loading...', { nzDuration: 0 }).messageId;
    this._serviceService.listMyService().subscribe(services=>{
      this._message.remove(id);
      this.services = services.filter(x=>x.enabled).filter(x=>x.status==='Running');
      this.showMyServices = true;
    })
  }

  openChangePassword(){
    this.showChangePassword=true;
    this.newPassword='';
  }

  changePassword(){
    const id = this._message.loading('Changing Password...', { nzDuration: 0 }).messageId;
    this._userService.changeCurrentUserPassword({password: this.newPassword}).subscribe(()=>{
      this._message.remove(id);
      this._message.create('success', `Changed Password`);
      this.newPassword = '';
      this.showChangePassword = false;
    })
  }

  logout(){
    this._modal.confirm({
      nzTitle: 'Do you Want to logout?',
      nzContent: 'When clicked the OK button, your connection will dispose.',
      nzOnOk: () =>{
        ConnectComponent.hubConnection.stop().then(()=>{
          sessionStorage.clear();
          this._router.navigateByUrl('/');
        });
      }
    });
  }
}
