import { Component, OnInit } from '@angular/core';
import { PetserviceService} from '../shared/petservice.service';
import {Pet} from '../shared/petmodel';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {
   pets: Pet[];

  constructor(private petService: PetserviceService) { }

  ngOnInit(): void {
    this.petService.getpets().subscribe(pets => {
      this.pets = pets;
    });
  }

}
