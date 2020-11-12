import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetsListComponent} from './petshop/pets-list/pets-list.component';
import {HomeComponent} from './home/home.component';
import {OwnersListComponent} from './petshop/owners-list/owners-list.component';
import {PetDetailsComponent} from './petshop/pet-details/pet-details.component';
import {AuthGuard} from './petshop/shared/guards/auth.guard';
import {UserLoginComponent} from './petshop/shared/user-login/user-login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsListComponent , canActivate: [AuthGuard]},
  { path: 'owners', component: OwnersListComponent},
  { path: ':id', component: PetDetailsComponent},
  { path: 'login', component: UserLoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
