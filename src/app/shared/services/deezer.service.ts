import { Injectable } from '@angular/core';
import { DeezerSdkService } from './deezer-sdk/deezer-sdk.service';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private deezerSdk: DeezerSdkService) { }

  login(perms = 'basic_access,email') {
    return this.deezerSdk.login(perms);
  }

  getUser(id: number) {
    const path = `/user/${id}`;

    return this.deezerSdk.api(path);
  }
  
  getMe(){
    return this.deezerSdk.api<IUser>('/user/me');
  }
}
