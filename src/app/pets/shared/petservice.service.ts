import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pet} from './petmodel';
import {Observable, pipe} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class PetserviceService {

  constructor(private http: HttpClient ) { }

  getpets(): Observable<Pet[]>{
   return this.http.get<Pet[]>('https://localhost:44348/api/pets');
  }

  login(username: string, password: string): Observable<boolean>{
    return this.http.post<any>('https://localhost:44348/api/token', {username, password }).pipe(map(response => {
      const token = response.token;
      // login successful if there's a jwt token in the response
      if (token) {
        // store username and jwt token in local storage to keep user logged in between page refreshed
        localStorage.setItem('currentUser', JSON.stringify({ username: name, token: token }));
        // return true to indicate successful login
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
