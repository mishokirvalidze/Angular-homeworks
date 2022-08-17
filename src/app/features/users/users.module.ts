import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersService } from './service/users.service';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
  providers: [UsersService],
})
export class UsersModule {}
