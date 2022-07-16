declare const DZ: any;

import { Injectable, NgZone } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IAuth } from '../../interfaces/auth.interface';
import { ILoginStatus } from '../../interfaces/login-status.interface';

@Injectable({
  providedIn: 'root'
})
export class DeezerSdkService {

  constructor(private ngZone: NgZone) { }

  login(perms: string) {
    return new Observable((observer: Observer<IAuth>) => {
      DZ.login((response: IAuth) => {
        
        if (response.authResponse) {
          observer.next(response);
        } else {
          observer.error(response);
        }
      }, {perms})
    });
  }

  logout() {
    return new Observable((observer: Observer<IAuth>) => {
      DZ.logout((response: IAuth) => {
        
        if (response.authResponse) {
          observer.next(response);
        } else {
          observer.error(response);
        }
      })
    });
  }

  getLoginStatus(){
    return new Observable((observer: Observer<ILoginStatus>) => {
      DZ.getLoginStatus((response: ILoginStatus) => {
        observer.next(response);
      });
    });
  }

  api<T>(path: string) {
    return new Observable((observer: Observer<T>) => {
      DZ.api(path, (response: T) => {
        if(response) observer.next(response);
        else observer.error(response);
      });
    })
  }
}
