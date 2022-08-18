import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './component/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavigationComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [NavigationComponent],
  providers: [SharedService],
})
export class CoreModule {}
