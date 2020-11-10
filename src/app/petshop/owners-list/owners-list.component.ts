import { Component, OnInit } from '@angular/core';
import {OwnerserviceService} from '../shared/ownerservice.service';
import {Owner} from '../shared/ownermodel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {

  owners: Owner[];
  constructor(
    private ownerService: OwnerserviceService ) { }

  ngOnInit(): void {
    this.ownerService.getowners().subscribe( owners => {
      this.owners = owners;
    });
  }

}
