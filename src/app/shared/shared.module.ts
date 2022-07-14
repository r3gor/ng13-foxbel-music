import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { LogoComponent } from './components/logo/logo.component';
import { CoreModule } from '../core/core.module';
import { ArtistBannerComponent } from './components/artist-banner/artist-banner.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { MusicPlayerComponent } from './components/music-player/music-player.component';



@NgModule({
  declarations: [
    MenuComponent,
    LogoComponent,
    ArtistBannerComponent,
    SongCardComponent,
    SearchComponent,
    MusicPlayerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    CoreModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
    MenuComponent,
    LogoComponent,
    ArtistBannerComponent,
    SongCardComponent,
    SearchComponent,
    MusicPlayerComponent,
  ]
})
export class SharedModule { }
