import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionStatusComponent } from './components/connection-status/connection-status.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'connStatus'
  },
  {
    path:'connStatus',
    component: ConnectionStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManageRoutingModule { }
