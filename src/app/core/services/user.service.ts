import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { DeezerSdkService } from './deezer-sdk/deezer-sdk.service';
import { DeezerService } from './deezer.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject<IUser | undefined>(undefined);
  
  user$ : Observable<IUser> = this.user.asObservable().pipe(
    filter((s): s is IUser => s !== undefined),
    tap(console.log)
  );

  constructor(private deezerService: DeezerService) {}

  fetchUserData() {
    return this.deezerService.getMe().pipe(
      tap(data => {
        if (data) this.user.next(data);
      }),
      map(data => !!data),
    );
  }
  
  getUser() {
    return this.user.getValue();
  }

}
