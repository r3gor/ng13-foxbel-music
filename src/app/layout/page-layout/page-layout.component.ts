import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/shared/services/sidenav.service';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {

  constructor(public sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

}
