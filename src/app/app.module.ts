import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, FormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
