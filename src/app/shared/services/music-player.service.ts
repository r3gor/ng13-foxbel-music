import { Injectable } from '@angular/core';
import { ItrackItem } from '../../core/interfaces/track.interface';
import { DeezerSdkService } from '../../core/services/deezer-sdk/deezer-sdk.service';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { AudioService } from './audio.service';
import { StreamState } from '../interfaces/stream-state.interface';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  files: Array<any> = [];
  state!: StreamState;
  currentFile: any = {};

  constructor(private audioService: AudioService) {
    // listen to stream state
    this.audioService.getState()
    .subscribe(state => {
      this.state = state;
    });
  }

  getTrack() {
    return this.files[this.currentFile.index || 0]
  }

  setFiles(files: any[]){
    this.files = files;
  }

  playStream(url: string) {
    this.audioService.playStream(url)
    .subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file: any, index: number) {
    console.log({file, index});
    
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.preview);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    console.log("play");
    
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change: any) {
    this.audioService.seekTo(change.value);
  }
}
