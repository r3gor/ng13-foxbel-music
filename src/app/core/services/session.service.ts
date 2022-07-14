import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { LS } from '../utils/local-storage.utils';
import { DeezerService } from './deezer.service';
import { UserService } from './user.service';
import { DeezerSdkService } from './deezer-sdk/deezer-sdk.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loggedIn$ = this.loggedIn.asObservable();

  constructor(
    private deezerService: DeezerService,
    private deezerSdkService: DeezerSdkService,
    private userService: UserService,
  ) { }

  login() {
    return this.deezerService.login().pipe(
      tap( res => {
        if (res.authResponse.accessToken) {
          LS.setItem("auth", JSON.stringify(res))
          this.loggedIn.next(true);
        }
      }),
      tap(res => console.log({res})),
      map( res => !!res.authResponse.accessToken ),
      switchMap( res => res? this.userService.fetchUserData() : of(false)),
      tap(res => console.log({res})),
    )
  }

  getLoginStatus() {
    return this.deezerSdkService.getLoginStatus().pipe(
      map(res => {
        if (res.authResponse) {
          // logged in and connected user, someone you know
          return true;
        } else {
          // no user session available, someone you dont know
          return false;
        }
      }),
      tap(loggedIn => this.loggedIn.next(loggedIn)),
    )
  }
}
