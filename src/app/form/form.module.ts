import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/users/edit/edit.component';
import { UsersComponent } from './components/users/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormComponent, UsersComponent, AddComponent, EditComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class FormModule {}
