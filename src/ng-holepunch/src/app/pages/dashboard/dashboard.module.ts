import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SystemStatusComponent } from './components/system-status/system-status.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
@NgModule({
  declarations: [MainframeComponent, SystemStatusComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule
  ]
})
export class DashboardModule { }
