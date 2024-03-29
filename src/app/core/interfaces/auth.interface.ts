// Generated by https://quicktype.io

export interface IAuth {
  authResponse: AuthResponse;
  status:       string;
  userID:       string;
  authInitDate: number;
}

export interface AuthResponse {
  accessToken: string;
  expire:      number;
}


/** Example */
// {
//   "authResponse": {
//       "accessToken": "frMv1JhzxQTB8sKe5PV9xOLB2XHAqWmLrCmdD7SgYC9vkvUmS2h",
//       "expire": 83
//   },
//   "status": "connected",
//   "userID": "5046451522",
//   "authInitDate": 1657675742082
// }