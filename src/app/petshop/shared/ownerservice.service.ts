import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from './ownermodel';

@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {

  constructor(private http: HttpClient ) { }

  getowners(): Observable<Owner[]>{
    return this.http.get<Owner[]>('https://localhost:59009/api/owners');
  }}
