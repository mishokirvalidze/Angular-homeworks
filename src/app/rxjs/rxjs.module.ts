import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RxjsComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
})
export class RxjsModule {}
