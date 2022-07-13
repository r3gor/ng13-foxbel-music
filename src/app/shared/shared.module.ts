import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  exports: [
    FontAwesomeModule,
    MenuComponent,
  ]
})
export class SharedModule { }
