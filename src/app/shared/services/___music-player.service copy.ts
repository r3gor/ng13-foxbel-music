import { Injectable } from '@angular/core';
import { ItrackItem } from '../../core/interfaces/track.interface';
import { DeezerSdkService } from '../../core/services/deezer-sdk/deezer-sdk.service';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { AudioService } from './audio.service';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  private track = new BehaviorSubject<ItrackItem | undefined>(undefined);
  track$ = this.track.asObservable();
  audio?: HTMLAudioElement;
  isPlay = false;
  
  constructor(
    private audioService: AudioService,
    private deezerSdk: DeezerSdkService) {
    // this.loadTrack("3590186").subscribe();
  }
  
  loadTrack(id: string) {
    this.audioService.stop();
    return this.deezerSdk.api<ItrackItem>(`/track/${id}`).pipe(
      tap(track => track && this.track.next(track)),
      tap(track => track && this.audioService.playStream(track.preview)),
    )
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  // play() {
  //   console.log(this.audio);
  //   this.audio && this.audio.play();
  // }
  
  // pause() {
  //   console.log(this.audio);
  //   this.audio && this.audio.pause();
  // }
}
