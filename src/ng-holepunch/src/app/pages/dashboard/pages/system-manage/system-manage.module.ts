import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemManageRoutingModule } from './system-manage-routing.module';
import { ConnectionStatusComponent } from './components/connection-status/connection-status.component';
import { SdkModule } from 'src/sdk';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptorService } from 'src/app/services/jwt-http-interceptor.service';


@NgModule({
  declarations: [ConnectionStatusComponent],
  imports: [
    CommonModule,
    SystemManageRoutingModule,
    SdkModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtHttpInterceptorService,
    multi: true
  }]
})
export class SystemManageModule { }
