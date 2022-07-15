import { Component, Input, OnInit } from '@angular/core';
import { StreamState } from '../../interfaces/stream-state.interface';
import { AudioService } from '../../services/audio.service';
import { MusicPlayerService } from '../../services/music-player.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  volume = 50;
  state!: StreamState;

  constructor(
    public audioService: AudioService,
    public player: MusicPlayerService) {
      this.audioService.getState()
      .subscribe(state => {
        // console.log({state});
        this.state = state;
      });
    }

  ngOnInit(): void {
  }

}
