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
<<<<<<< HEAD:src/app/petshop/shared/petservice.service.ts
   return  this.http.get<Pet[]>('https://localhost:59009/api/pets');
  }
  // tslint:disable-next-line:typedef
getpetbyid(id: number) {
    return  this.http.get<Pet>('https://localhost:59009/api/pets/'+id);
=======
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Pet[]>('https://localhost:44348/api/pets', httpOptions);
>>>>>>> 0fd045844dce981694a38977756b9e87d14c7590:src/app/pets/shared/petservice.service.ts
  }

}




