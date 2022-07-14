import { Injectable } from '@angular/core';
import { ItrackItem } from '../../core/interfaces/track.interface';
import { DeezerSdkService } from '../../core/services/deezer-sdk/deezer-sdk.service';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  private track = new BehaviorSubject<ItrackItem | undefined>(undefined);
  track$ = this.track.asObservable();
  audio?: HTMLAudioElement;
  
  constructor(private deezerSdk: DeezerSdkService) { }
  
  loadTrack(id: string) {
    return this.deezerSdk.api<ItrackItem>(`/track/${id}`).pipe(
      tap(track => track && this.track.next(track)),
      tap(track => this.audio = track? new Audio(track.preview) : undefined),
    )
  }

  play() {
    this.audio && this.audio.play();
  }

  pause() {
    this.audio && this.audio.pause();
  }
}
