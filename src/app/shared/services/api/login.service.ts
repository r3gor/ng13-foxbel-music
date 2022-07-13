import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mapTo, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGetTokenDeezer } from '../../interfaces/http/get-token-deezer.interface';
import { HttpDeezerService } from '../http/http-deezer.service';
/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpDeezer: HttpDeezerService) { }

  get deezerAuthURL() {
    const { 
      API: { 
        DEEZER: { AUTH_URL } 
      },
      CONFIG: {
        DEEZER: { APP_ID, PERMS, REDIRECT_URI } 
      } 
    } = environment;
  
    const params = new HttpParams()
    .set('app_id', APP_ID)
    .set('redirect_uri', REDIRECT_URI)
    .set('perms', PERMS);

    return `${AUTH_URL}?${params.toString()}`;
  }

  genAccessToken(code: string) {
    return this.httpDeezer.genToken(code).pipe(
      map(ans => {
        const token = (ans as IGetTokenDeezer).access_token;
        if (token) 
          localStorage.setItem("token", token);
        return token;
      }),
      map(token => !!token),
    )
  }
}
