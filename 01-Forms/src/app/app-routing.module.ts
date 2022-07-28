import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './users/edit/edit.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    title: 'Users',
  },
  {
    path: 'add',
    component: AddComponent,
    title: 'Add User',
  },
  {
    path: 'edit',
    component: EditComponent,
    title: 'Edit User',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
