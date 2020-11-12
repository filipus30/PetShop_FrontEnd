import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {PetserviceService} from '../petservice.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {IsuserloggedinserviceService} from '../isuserloggedinservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  userForm = new FormGroup( {
    username: new FormControl(''),
    password: new FormControl('')
  });
  subscription: Subscription = new Subscription();
  errormessage = '';
  loading = false;
  loggedIn = false;

  constructor(private authenticationService: AuthenticationService,private isuserloggedinService: IsuserloggedinserviceService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.isLoggedIn();
  }

  userLogin(): void {
    this.loading = true;
    this.user = this.userForm.value;
    this.subscription = this.authenticationService.login(this.user.username, this.user.password).subscribe(success => {
      this.loggedIn = true;
      this.router.navigate(['/']);
      },

      error => {
        this.errormessage = error.message;
        this.loading = false;
      });
  }

  logout(): void {
    this.subscription.unsubscribe();
    this.authenticationService.logout();
    this.loggedIn = false;
    window.location.reload();
  }

  isLoggedIn(): boolean {
    this.user.userToken = this.authenticationService.getToken();
    if(this.user.userToken !== null){
      this.user.username = this.authenticationService.getUsername();
      this.isuserloggedinService.setTrue();
      return true;
    }
    else{
      this.isuserloggedinService.setFalse();
      return false;
    }
  }

}
