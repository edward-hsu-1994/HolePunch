import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceManageRoutingModule } from './service-manage-routing.module';
import { ServiceManageComponent } from './components/service-manage/service-manage.component';


@NgModule({
  declarations: [ServiceManageComponent],
  imports: [
    CommonModule,
    ServiceManageRoutingModule
  ]
})
export class ServiceManageModule { }
