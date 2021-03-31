import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './components/connect/connect.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SdkModule } from 'src/sdk';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptorService } from 'src/app/services/jwt-http-interceptor.service';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [ConnectComponent],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    NzIconModule,
    NzButtonModule,
    NzResultModule,
    NzModalModule,
    SdkModule,
    NzMessageModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtHttpInterceptorService,
    multi: true
  },
  { provide: NZ_ICONS, useValue: icons }]
})
export class ConnectModule { }
