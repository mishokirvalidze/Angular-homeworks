import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: LoginComponent, title: 'Log in' },
    ]),
  ],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
