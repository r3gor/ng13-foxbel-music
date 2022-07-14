import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { LogoComponent } from './components/logo/logo.component';
import { CoreModule } from '../core/core.module';
import { ArtistBannerComponent } from './components/artist-banner/artist-banner.component';
import { SongCardComponent } from './components/song-card/song-card.component';



@NgModule({
  declarations: [
    MenuComponent,
    LogoComponent,
    ArtistBannerComponent,
    SongCardComponent
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
    ArtistBannerComponent,
    SongCardComponent,
  ]
})
export class SharedModule { }
