import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CurrencyComponent, title: 'Currency converter' },
    ]),
  ],
  exports: [RouterModule],
})
export class CurrencyRoutingModule {}
