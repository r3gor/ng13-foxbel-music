declare const DZ: any;

import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IAuth } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class DeezerSdkService {

  constructor() { }

  login(perms = 'basic_access,email') {
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

  api<T>(path: string) {
    return new Observable((observer: Observer<T>) => {
      DZ.api(path, (response: T) => {
        if(response) observer.next(response);
        else observer.error(response);
      });
    })
  }
}
