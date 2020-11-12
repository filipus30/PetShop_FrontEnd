import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetsListComponent} from './petshop/pets-list/pets-list.component';
import {HomeComponent} from './home/home.component';
<<<<<<< HEAD
import {OwnersListComponent} from './petshop/owners-list/owners-list.component';
import {PetDetailsComponent} from './petshop/pet-details/pet-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsListComponent },
  { path: 'owners', component: OwnersListComponent},
  { path: ':id', component: PetDetailsComponent}
=======
import {UserLoginComponent} from './pets/shared/user-login/user-login.component';
import {AuthGuard} from './pets/shared/guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: UserLoginComponent },
>>>>>>> 0fd045844dce981694a38977756b9e87d14c7590
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
