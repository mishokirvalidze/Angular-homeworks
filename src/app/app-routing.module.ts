import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { AddComponent } from './form/components/add/add.component';
import { UsersComponent } from './form/components/users/users.component';
import { EditComponent } from './form/components/users/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    title: 'Homeworks',
  },
  {
    path: 'form',
    component: FormComponent,
    title: 'form homework',
    children: [
      { path: 'add', component: AddComponent, title: 'add user' },
      { path: 'user', component: UsersComponent, title: 'users' },
      { path: 'edit', component: EditComponent, title: 'edit user' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
