import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetsListComponent} from './pets/pets-list/pets-list.component';
import {HomeComponent} from './home/home.component';
import {UserLoginComponent} from './pets/shared/user-login/user-login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsListComponent },
  { path: 'login', component: UserLoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
