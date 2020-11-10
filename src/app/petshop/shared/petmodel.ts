import {Owner} from './ownermodel';
import {Observable} from 'rxjs';
import DateTimeFormat = Intl.DateTimeFormat;
import {Time} from '@angular/common';

export interface Pet{
  id: number;
  name: string;
  color: string;
  price: number;
  birthdate: string;
  petOwner: Owner;
}
