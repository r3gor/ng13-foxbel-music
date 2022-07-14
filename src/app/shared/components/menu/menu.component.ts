import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { DeezerService } from '../../../core/services/deezer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  libraryItems = [
    {
      key: 'recent',
      title: 'Recientes',
    },
    {
      key: 'artists',
      title: 'Artistas',
    },
    {
      key: 'albums',
      title: 'Albums',
    },
    {
      key: 'tracks',
      title: 'Canciones',
    },
    {
      key: 'radio',
      title: 'Estaciones',
    }
  ]

  defaultLibrary = 'recent';

  playlist$ = this.deezerService.getPlaylists();

  selected$ = this.route.queryParams.pipe(
    map( params => {
      const { library, playlist } = params;
      if (this.libraryItems.some(e => e.key == library))
        return library;
      return parseInt(playlist) || 'none'
    }),
  );

  constructor(
    public sidenavService: SidenavService,
    private deezerService: DeezerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
