import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { ServiceManageComponent } from './components/service-manage/service-manage.component';

const routes: Routes = [
  { path:'',redirectTo:'list' },
  {
    path:'list',
    pathMatch: 'full',
    component:ServiceManageComponent
  },
  {
    path: 'create-service',
    component: EditServiceComponent
  },
  {
    path: 'edit-service/:serviceId',
    component: EditServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceManageRoutingModule { }
