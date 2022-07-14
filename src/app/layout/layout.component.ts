declare const DZ: any;

import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/services/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidenavOpened$ = this.sidenavService.opened$;

  constructor(private sidenavService: SidenavService) {
    DZ.ready(function(sdk_options: any){
      console.log('DZ SDK is ready', sdk_options);
    });
  }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.sidenavService.close();
  }

  playAlbum() {
    // DZ.player.playAlbum(302127);
    DZ.player.playTracks([3135556, 1152226]);
  }
  
  play() {
    DZ.player.play();
  }
  
  next() {
    DZ.player.next();
  }
  
  seek() {
    DZ.player.seek(50);
  }
}
