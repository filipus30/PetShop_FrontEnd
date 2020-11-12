import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from './ownermodel';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService ) { }
Owners: Owner[];
  getowners(): Observable<Owner[]>{
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Owner[]>('https://localhost:59009/api/owners',httpOptions);
  }}
