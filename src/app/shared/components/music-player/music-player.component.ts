import { Component, Input, OnInit } from '@angular/core';
import { MusicPlayerService } from '../../services/music-player.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  track$ = this.player.track$;

  constructor(private player: MusicPlayerService) { }

  ngOnInit(): void {
  }

}
