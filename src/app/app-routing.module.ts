import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetsListComponent} from './petshop/pets-list/pets-list.component';
import {HomeComponent} from './home/home.component';
import {OwnersListComponent} from './petshop/owners-list/owners-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsListComponent },
  { path: 'owners', component: OwnersListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
