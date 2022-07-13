import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private opened = new BehaviorSubject(true);
  opened$ = this.opened.asObservable();

  open() {
    this.opened.next(true);
  }

  close() {
    this.opened.next(false);
  }

  constructor() { }
}
