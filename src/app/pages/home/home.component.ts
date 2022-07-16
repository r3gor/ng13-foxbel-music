import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { DeezerService } from '../../core/services/deezer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap, Observable, tap, map } from 'rxjs';
import { MusicPlayerService } from '../../shared/services/music-player.service';
import { ContentObserver } from '@angular/cdk/observers';
import { DeezerSdkService } from '../../core/services/deezer-sdk/deezer-sdk.service';
import { ItrackItem } from 'src/app/core/interfaces/track.interface';

/**
 * TODO: Refactor, clean ...
 */
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
    radios: of([]), // TODO: implement
  }

  recomendation$ = this.deezerService.getRecomendations("artists").pipe(
    map(items => items[Math.floor(Math.random()*items.length)])
  );

  title!: string;

  items$ = this.route.queryParams.pipe(
    switchMap(params => {
      const { playlist, search, library } = params;
      
      if(search) return this.deezerService.search(search).pipe(tap(_ => this.title="Results"));
      if(playlist) return this.deezerService.getPlaylist(playlist).pipe(tap(_ => this.title="Playlist"));
      if(library) return this.libraryMap[library].pipe(tap(_ => this.title=library));

      return this.deezerService.getRecomendations("tracks").pipe(tap(_ => this.title="Recomendations"))
    }),
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private musicPlayerService: MusicPlayerService,
    private deezerService: DeezerService,
    private deezerSdk: DeezerSdkService,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  logout() {
    console.log("logout");
    
    this.deezerService.logout().subscribe(_ => {
      console.log({_});
      this.router.navigate(['/', 'auth'])
    })
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
