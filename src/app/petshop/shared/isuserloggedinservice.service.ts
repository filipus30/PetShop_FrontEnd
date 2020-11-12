import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsuserloggedinserviceService {
public isloggedin: boolean;
  constructor() { }
  setTrue() {
    this.isloggedin = true;
  }
  setFalse() {
    this.isloggedin = false;
  }
  getBoolean() {
    return this.isloggedin;
  }
}
