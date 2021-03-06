import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pet} from './petmodel';
import {Observable, pipe} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from './user';
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
export class PetserviceService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService ) { }

  Pets: Pet[];
  getpets(): Observable<Pet[]>{
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return  this.http.get<Pet[]>('https://localhost:59009/api/pets', httpOptions);
  }
  // tslint:disable-next-line:typedef
getpetbyid(id: number) {
    return  this.http.get<Pet>('https://localhost:59009/api/pets/'+id);
  }

}




