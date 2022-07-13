import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() type: 'logo' | 'icon' = 'logo';
  @Input() size: 1 | 2 | 3 = 1;

  imgDict = {
    logo: {
      1: 'foxbel-music.png',
      2: 'foxbel-music@2x.png',
      3: 'foxbel-music@3x.png',
    },
    icon: {
      1: 'foxbel-music-icon.png',
      2: 'foxbel-music-icon@2x.png',
      3: 'foxbel-music-icon@3x.png',
    },
  }

  get img() {
    return this.imgDict[this.type][this.size];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
