import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { LogoComponent } from './components/logo/logo.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    MenuComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    CoreModule,
  ],
  exports: [
    FontAwesomeModule,
    MenuComponent,
    LogoComponent,
  ]
})
export class SharedModule { }
