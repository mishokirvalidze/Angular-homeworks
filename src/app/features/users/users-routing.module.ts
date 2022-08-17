import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UsersListComponent, title: 'Users' },
    ]),
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
