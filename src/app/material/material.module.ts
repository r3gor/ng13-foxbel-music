import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
  ]
})
export class MaterialModule { }
