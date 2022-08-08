import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { NavComponent } from './nav-component/nav.component';
import { RxjsModule } from './rxjs/rxjs.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, FormModule, RxjsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
