// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  API: {
    DEEZER: {
      AUTH_URL: "https://connect.deezer.com/oauth/auth.php",
      TOKEN_URL: "https://connect.deezer.com/oauth/access_token.php",
    }
  },
  
  CONFIG: {
    DEEZER: {
      APP_ID: 551022,
      APP_SECRET: "0698413d96834ce9769d7d00aef642f6", // FIXME: Move to backend (INSECURED) 
      REDIRECT_URI: "http://localhost:4200/auth/access-gen",
      PERMS: "basic_access,email"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
