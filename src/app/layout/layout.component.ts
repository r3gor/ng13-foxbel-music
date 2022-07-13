import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/services/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sidenavOpened$ = this.sidenavService.opened$;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.sidenavService.close();
  }
}
