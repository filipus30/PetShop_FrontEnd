import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetserviceService} from '../shared/petservice.service';
import {Pet} from '../shared/petmodel';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
pet: Pet;
  constructor(private route: ActivatedRoute,
              private petService: PetserviceService) { }
  private routeSub: Subscription;

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const id = (params['id'])
      return this.petService.getpetbyid(id).subscribe(pet =>
      {
        this.pet = pet;
      })
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
