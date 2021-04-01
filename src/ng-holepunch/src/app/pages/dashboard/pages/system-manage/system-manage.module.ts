import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemManageRoutingModule } from './system-manage-routing.module';
import { ConnectionStatusComponent } from './components/connection-status/connection-status.component';
import { SdkModule } from 'src/sdk';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptorService } from 'src/app/services/jwt-http-interceptor.service';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserManageComponent } from './components/user-manage/user-manage.component';
import { UserGroupManageComponent } from './components/user-group-manage/user-group-manage.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
@NgModule({
  declarations: [ConnectionStatusComponent, UserManageComponent, UserGroupManageComponent],
  imports: [
    CommonModule,
    SystemManageRoutingModule,
    SdkModule,
    NzListModule,
    NzButtonModule,
    NzModalModule,
    NzMessageModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzCheckboxModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtHttpInterceptorService,
    multi: true
  }]
})
export class SystemManageModule { }
