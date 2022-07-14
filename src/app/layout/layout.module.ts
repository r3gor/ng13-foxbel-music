import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    LayoutComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    CoreModule,
  ],
  exports: [
    PageLayoutComponent,
  ]
})
export class LayoutModule { }
