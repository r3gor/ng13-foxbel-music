declare const DZ: any;

import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { bindCallback, Observable } from 'rxjs';
import { IAuth } from 'src/app/core/interfaces/auth.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { DeezerService } from 'src/app/core/services/deezer.service';
import { SessionService } from '../../../core/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login$: Observable<boolean> | undefined = undefined; 

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private ngZone: NgZone
    ) {
  }

  onDeezerLogin() {
    this.login$ = this.sessionService.login();
    this.login$.subscribe(success => { 
      if (success) this.ngZone.run(
        () => this.router.navigate(['/']
      ))
    })
  }

}
