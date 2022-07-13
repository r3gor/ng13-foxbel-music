import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IGetTokenDeezer } from '../../interfaces/http/get-token-deezer.interface';
/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root'
})
export class HttpDeezerService {

  constructor(private http: HttpClient) { }

  /**
   * THIS METHOUD SHOULD BE IN BACKEND
   * @param code 
   * @returns 
   */
  genToken(code: string) {
    const { 
      API: { 
        DEEZER: { TOKEN_URL: URL } 
      },
      CONFIG: {
        DEEZER: { APP_ID, APP_SECRET } 
      } 
    } = environment;

    const params = new HttpParams()
    .set('app_id', APP_ID)
    .set('secret', APP_SECRET)
    .set('code', code)
    .set('output', 'json');

    return this.http.get<IGetTokenDeezer | string>(URL, { params })
  }
}
