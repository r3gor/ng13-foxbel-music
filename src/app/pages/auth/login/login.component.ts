declare const DZ: any;

import { Component, OnInit } from '@angular/core';
import { bindCallback, Observable } from 'rxjs';
import { IAuth } from 'src/app/shared/interfaces/auth.interface';
import { LoginService } from 'src/app/shared/services/api/login.service';
import { DeezerSdkService } from 'src/app/shared/services/deezer-sdk/deezer-sdk.service';
import { DeezerService } from 'src/app/shared/services/deezer.service';
import { IUser } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user$?: Observable<IUser>;
  
  reload() {
    this.user$ = this.deezerService.getMe();
  }

  constructor(
    private loginService: LoginService,
    private deezerService: DeezerService) {
  }

  onDeezerLogin() {
    this.deezerService.login().subscribe(res => {    
      this.user$ = this.deezerService.getMe();
    })
  }

}
