import {Observable} from 'rxjs';
import {Pet} from './petmodel';

export interface Owner{
  ownerId: number;
  ownerFirstName: string;
  ownerLastName: string;
  ownerAddress: string;
  ownerPhoneNr: number;
  petsOwned: Observable<Pet[]>;


}
