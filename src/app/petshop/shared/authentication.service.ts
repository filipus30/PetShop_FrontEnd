import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


login(Username: string, Password: string): Observable<boolean>{
  return this.http.post<any>('https://localhost:59009/api/token', {Username, Password }).pipe(map(response => {
    const token = response.token;
    // login successful if there's a jwt token in the response
    if (token) {
      // store username and jwt token in local storage to keep user logged in between page refreshed
      localStorage.setItem('currentUser', JSON.stringify({ username: Username, token: token }));
      // return true to indicate successful login
      window.location.reload();
      return true;

    } else {
      // return false to indicate failed login
      return false;
    }
  }));
}
getToken(): string {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    return currentUser.token;
  } else {
    return null;
  }
}

getUsername(): string {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    return currentUser.username;
  } else {
    return null;
  }
}

logout(): void {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}
}
