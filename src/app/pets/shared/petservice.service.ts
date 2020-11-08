import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pet} from './petmodel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetserviceService {

  constructor(private http: HttpClient ) { }

  getpets(): Observable<Pet[]>{
   return this.http.get<Pet[]>('https://localhost:59009/api/pets');
  }
}
