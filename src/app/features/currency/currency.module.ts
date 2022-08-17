import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { CurrencyRoutingModule } from './currency-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CurrencyService } from './service/currency.service';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [CommonModule, CurrencyRoutingModule, SharedModule],
  providers: [CurrencyService],
})
export class CurrencyModule {}
