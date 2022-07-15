import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/shared/services/audio.service';
import { MusicPlayerService } from '../../shared/services/music-player.service';
import { tracks } from './tracks';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  song_url = "https://cdns-preview-2.dzcdn.net/stream/c-2e34971f79c74b5fb78bbc409330d8ee-9.mp3";
  // song$ = this.audioService.playStream(this.song_url);

  constructor(public musicService: MusicPlayerService) {
    // this.song$.subscribe(res => {
      //   console.log({res});
      // })
      
      // this.audioService.getState().subscribe(
        //   state => console.log({state})
        // )
  }
      
  loadTracks() {
    this.musicService.setTracks(tracks);
  }

  play() {
    this.musicService.play()
  }
  
  pause() {
    this.musicService.pause();
  }

  prev() {
    this.musicService.prev();
  }
  
  next() {
    this.musicService.next();
  }


  
  stop() {
    // clean
    // this.audioService.stop();
  }

  ngOnInit(): void {
  }

}
