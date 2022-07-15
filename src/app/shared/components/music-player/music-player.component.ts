import { Component, Input, OnInit } from '@angular/core';
import { StreamState } from '../../interfaces/stream-state.interface';
import { MusicPlayerService } from '../../services/music-player.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  volume = 50;

  constructor(public player: MusicPlayerService) {
    this.updateVolume();
  }

  ngOnInit(): void {
  }

  updateVolume() {
    this.player.audio.setVolume(this.volume/100)
  }
}
