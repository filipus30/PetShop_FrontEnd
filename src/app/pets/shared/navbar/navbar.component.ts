import { Component, OnInit } from '@angular/core';
import {PetserviceService} from '../petservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private petService: PetserviceService) { }

  ngOnInit(): void {
  }

}
