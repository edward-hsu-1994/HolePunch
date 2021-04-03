import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { SystemStatusComponent } from './components/system-status/system-status.component';
import { IsAdminGuard } from './guards/is-admin.guard';

const routes: Routes = [
  {
    path:'',
    component: MainframeComponent,
    canActivate:[IsAdminGuard],
    children:[
      {
        path: '',
        component: SystemStatusComponent
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/service-manage/service-manage.module').then(m=>m.ServiceManageModule)
      },
      {
        path: 'system',
        loadChildren: () => import('./pages/system-manage/system-manage.module').then(m=>m.SystemManageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
