import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SharedService } from '../../shared/shared.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule],
  providers: [SharedService],
})
export class RegisterModule {}
