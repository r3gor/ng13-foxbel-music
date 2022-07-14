import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { DeezerService } from '../../core/services/deezer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  search: string = '';

  user$ = this.userService.user$;

  recent$ = this.deezerService.getHistory();

  constructor(
    private deezerService: DeezerService,
    private userService: UserService) { }

  ngOnInit(): void {
  }

}
