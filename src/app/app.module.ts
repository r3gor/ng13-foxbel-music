import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { makeFactory } from './initializers/factory';
import { FontAwesomeInit } from './initializers/font-awesome.init';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { SessionRecoverInit } from './initializers/session-recover.init';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: makeFactory<FontAwesomeInit>(),
      deps: [FontAwesomeInit],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: makeFactory<SessionRecoverInit>(),
      deps: [SessionRecoverInit],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
