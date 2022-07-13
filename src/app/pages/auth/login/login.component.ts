import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/api/login.service';
import { openCenterWindow } from 'src/app/shared/utils/open-center-window';

/** Auth window config */
const TITLE = "Foxbel Music - Deezer Login", W = 600, H = 400;
declare const DZ: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onDeezerLogin() {
    openCenterWindow({
      title: TITLE,
      url: this.loginService.deezerAuthURL,
      w: W, h: H,
    })
  }

  login() {
    DZ.login(function(response: any) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        DZ.api('/user/me', function(response: any) {
          console.log('Response ',  {response});
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

}
