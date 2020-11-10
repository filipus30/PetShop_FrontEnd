import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pet} from './petmodel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetserviceService {

  constructor(private http: HttpClient ) { }

  Pets: Pet[];
  getpets(): Observable<Pet[]>{
   return  this.http.get<Pet[]>('https://localhost:59009/api/pets');
  }
  // tslint:disable-next-line:typedef
getpetbyid(id: number) {
    return  this.http.get<Pet>('https://localhost:59009/api/pets/'+id);
  }
}




