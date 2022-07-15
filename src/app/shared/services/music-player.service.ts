import { Injectable } from '@angular/core';
import { ItrackItem } from '../../core/interfaces/track.interface';
import { DeezerSdkService } from '../../core/services/deezer-sdk/deezer-sdk.service';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { AudioService } from './audio.service';
import { StreamState } from '../interfaces/stream-state.interface';
import { ThisReceiver } from '@angular/compiler';
import { NgAudio } from '../../core/utils/audio.utils';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  audio = new NgAudio();  
  index: number = 0
  tracks: any[] = []

  constructor() {
  }

  /**
   * 
   * @param tracks cada objeto debe tener la url en la key 'preview'
   */
  setTracks(tracks: any[]) {
    this.tracks = tracks;
    this.index = 0;
    this.audio.load(tracks[0].preview);
    this.audio.ended$.subscribe(end => end && this.next());
  } 

  get currTrack() {
    return this.tracks[this.index];
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  prev() {
    if(this.index==0) return
    this.index--;
    this.audio.load(this.currTrack.preview)
  }

  next() {
    if(this.index==this.tracks.length-1) return
    this.index++;
    this.audio.load(this.currTrack.preview)
  }

}
