import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetsListComponent} from './petshop/pets-list/pets-list.component';
import {HomeComponent} from './home/home.component';
import {OwnersListComponent} from './petshop/owners-list/owners-list.component';
import {PetDetailsComponent} from './petshop/pet-details/pet-details.component';
import {AuthGuard} from './petshop/shared/guards/auth.guard';
import {UserLoginComponent} from './petshop/shared/user-login/user-login.component';
import {AboutusComponent} from './aboutus/aboutus.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsListComponent},
  { path: 'owners', component: OwnersListComponent, canActivate: [AuthGuard]},
  { path: 'pets/getdetails/:id', component: PetDetailsComponent},
  { path: 'login', component: UserLoginComponent },
  { path: 'aboutus', component: AboutusComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
