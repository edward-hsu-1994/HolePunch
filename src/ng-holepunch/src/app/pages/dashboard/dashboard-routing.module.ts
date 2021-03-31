import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { IsAdminGuard } from './guards/is-admin.guard';

const routes: Routes = [
  {
    path:'',
    component: MainframeComponent,
    canActivate:[IsAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
