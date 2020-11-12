import { Component, OnInit } from '@angular/core';
import {PetserviceService} from '../petservice.service';
import {IsuserloggedinserviceService} from '../isuserloggedinservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private petService: PetserviceService,private isuserloggedinService: IsuserloggedinserviceService) { }

  ngOnInit(): void {
  }
check(): boolean {
   return this.isuserloggedinService.getBoolean();
}
}
