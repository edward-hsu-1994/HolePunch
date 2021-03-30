import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CanLoginGuard } from './guards/can-login.guard';

const routes: Routes = [{
  path:'',
  component: LoginComponent,
  canActivate: [CanLoginGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
