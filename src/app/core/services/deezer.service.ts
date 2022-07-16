import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { IResponse, IGetItems } from '../interfaces/response.interface';
import { IUser } from '../interfaces/user.interface';
import { DeezerSdkService } from './deezer-sdk/deezer-sdk.service';
import { IHistory } from '../interfaces/history.interface';
import { IArtist } from '../interfaces/artist.interface';
import { IAlbum } from '../interfaces/album.interface';
import { ITrack } from '../interfaces/track.interface';
import { IPlaylist } from '../interfaces/playlist.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private deezerSdk: DeezerSdkService) { }

  login(perms = 'basic_access,email,listening_history') {
    return this.deezerSdk.login(perms);
  }

  getUser(id: number) {
    const path = `/user/${id}`;
    return this.deezerSdk.api<IUser>(path);
  }
  
  getMe(){
    return this.deezerSdk.api<IUser>('/user/me').pipe(
      tap(console.log)
    );
  }

  getPlaylists() {
    // https://api.deezer.com/user/5046451522/recommendations/artists
    return this.deezerSdk.api<IGetItems<IPlaylist>>(`/user/me/playlists`).pipe(
      map(res => res.data),
    );
  }

  getPlaylist(id: string){
    // https://api.deezer.com/playlist/10518802922/tracks
    return this.deezerSdk.api<IGetItems<ITrack>>(`/playlist/${id}/tracks`).pipe(
      map(res => res.data),
    );
  }

  getRecomendations(type: 'albums' | 'releases' | 'artists' | 'playlists' | 'track' | 'radios' | 'track' ) {
    // https://api.deezer.com/user/5046451522/recommendations/artists
    return this.deezerSdk.api<IGetItems<IHistory>>(`/user/me/history/${type}`).pipe(
      map(res => res.data),
    );
  }
  
  getHistory() {
    // https://api.deezer.com/user/5046451522/history
    return this.deezerSdk.api<IGetItems<IHistory>>('/user/me/history').pipe(
      map(res => res.data),
    );;
  }
    
  getArtists() {
    return this.deezerSdk.api<IGetItems<IArtist>>(`/user/me/artists`).pipe(
      map(res => res.data),
    );
  }

  getAlbums() {
    return this.deezerSdk.api<IGetItems<IAlbum>>(`/user/me/albums`).pipe(
      map(res => res.data),
    );
  }

  getTracks() {
    return this.deezerSdk.api<IGetItems<ITrack>>(`/user/me/tracks`).pipe(
      map(res => res.data),
    );
  }

  search(query: string) {
    const params = new HttpParams()
    .set('q', query);

    return this.deezerSdk.api<IGetItems<any>>(`/search?${params.toString()}`).pipe(
      map(res => res.data),
    );
  }
}
