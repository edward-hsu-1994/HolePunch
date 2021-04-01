import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceManageComponent } from './components/service-manage/service-manage.component';

const routes: Routes = [
  {
    path:'',
    component:ServiceManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceManageRoutingModule { }
