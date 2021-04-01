import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceManageRoutingModule } from './service-manage-routing.module';
import { ServiceManageComponent } from './components/service-manage/service-manage.component';
import { SdkModule } from 'src/sdk';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptorService } from 'src/app/services/jwt-http-interceptor.service';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
@NgModule({
  declarations: [ServiceManageComponent, EditServiceComponent],
  imports: [
    CommonModule,
    ServiceManageRoutingModule,
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
    NzCheckboxModule,
    NzCardModule,
    NzSwitchModule,
    NzTabsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtHttpInterceptorService,
    multi: true
  }]
})
export class ServiceManageModule { }
