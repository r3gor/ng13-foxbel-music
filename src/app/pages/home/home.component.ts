import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { DeezerService } from '../../core/services/deezer.service';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap, Observable } from 'rxjs';
import { MusicPlayerService } from '../../shared/services/music-player.service';
import { ContentObserver } from '@angular/cdk/observers';
import { DeezerSdkService } from '../../core/services/deezer-sdk/deezer-sdk.service';
import { ItrackItem } from 'src/app/core/interfaces/track.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$ = this.userService.user$;

  recent$ = this.deezerService.getHistory();

  libraryMap: Record<string, Observable<any>> = {
    recents: this.deezerService.getHistory(),
    artists: this.deezerService.getArtists(),
    albums: this.deezerService.getAlbums(),
    tracks: this.deezerService.getTracks(),
    radios: of([]),
  }

  recomendations$ = this.deezerService.getRecomendations("track");

  items$ = this.route.queryParams.pipe(
    switchMap(params => {
      const { playlist, search, library } = params;

      console.log( { playlist, search, library } );
      
      if(search) return this.deezerService.search(search);
      if(playlist) return this.deezerService.getHistory();
      if(library) return this.libraryMap[library];
      
      return of(undefined)
    })
  );

  constructor(
    private route: ActivatedRoute,
    private musicPlayerService: MusicPlayerService,
    private deezerService: DeezerService,
    private deezerSdk: DeezerSdkService,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  play(item: any) {
    console.log("play: ", item);

    if(item.type == 'track'){
      if(item.preview) {
        this.musicPlayerService.setTracks([item]);
      } else {
        this.deezerSdk.api<{data: ItrackItem[]}>(`/track/${item.id}`).subscribe(
          res => {
            this.musicPlayerService.setTracks([res])
          }
        )

      }
    }
    else if(item.tracklist){
      const path = item.tracklist.slice("https://www.deezer.com".length);
      console.log(path);
      this.deezerSdk.api<{data: ItrackItem[]}>(path).subscribe(
        res => {
          console.log(res)
          const tracks = res.data;
          if(item.type == 'album') {
            tracks.map(t => t.album = item);
          }
          this.musicPlayerService.setTracks(tracks)
        }
      )
    }
  }
}
