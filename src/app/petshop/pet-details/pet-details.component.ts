import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetserviceService} from '../shared/petservice.service';
import {Pet} from '../shared/petmodel';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent implements OnInit {
pet: Pet;
  constructor(private route: ActivatedRoute,
              private petService: PetserviceService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.petService.getpetbyid(id).subscribe(pet =>{
      this.pet = pet;
    });


  }

}
