import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionStatusComponent } from './components/connection-status/connection-status.component';
import { UserGroupManageComponent } from './components/user-group-manage/user-group-manage.component';
import { UserManageComponent } from './components/user-manage/user-manage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'connStatus'
  },
  {
    path:'connStatus',
    component: ConnectionStatusComponent
  },
  {
    path: 'user',
    component: UserManageComponent
  },
  {
    path: 'user-group',
    component: UserGroupManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManageRoutingModule { }
