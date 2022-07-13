import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { LoginService } from 'src/app/shared/services/api/login.service';
/**
 * @deprecated
 */
@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  code$ = this.route.queryParams.pipe(
    map(params => params['code'])
  );

  successLogin$ = this.code$.pipe(
    switchMap(code => this.loginService.genAccessToken(code))
  )

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
