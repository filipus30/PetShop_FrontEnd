import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {PetserviceService} from '../petservice.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user: User;
  userForm = new FormGroup( {
    username: new FormControl(''),
    password: new FormControl('')
  });
  subscription: Subscription;
  errormessage = '';
  loading = false;
  loggedIn = false;

  constructor(private petService: PetserviceService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.isLoggedIn();
  }

  userLogin(): void {
    this.loading = true;
    const user = this.userForm.value;
    this.subscription = this.petService.login(user.username, user.password).subscribe(success => {
      this.loggedIn = true;
      // this.router.navigate(['/']);
      },
      error => {
        this.errormessage = error.message;
        this.loading = false;
      });
  }

  logout(): void {
    this.subscription.unsubscribe();
    this.petService.logout();
  }

  isLoggedIn(): boolean {
    this.user.userToken = this.petService.getToken();
    if(this.user.userToken !== null){
      return true;
    }
    else{
      return false;
    }
  }

}
