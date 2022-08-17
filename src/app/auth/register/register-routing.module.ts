import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: RegisterComponent, title: 'Register' },
      { path: 'edit', component: RegisterComponent, title: 'Edit User' },
    ]),
  ],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
