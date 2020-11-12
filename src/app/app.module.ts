import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './petshop/pets-list/pets-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './petshop/shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { OwnersListComponent } from './petshop/owners-list/owners-list.component';
import { PetDetailsComponent } from './petshop/pet-details/pet-details.component';
=======
import { UserLoginComponent } from './pets/shared/user-login/user-login.component';
import {AuthGuard} from './pets/shared/guards/auth.guard';
>>>>>>> 0fd045844dce981694a38977756b9e87d14c7590

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavbarComponent,
    NavbarComponent,
    HomeComponent,
<<<<<<< HEAD
    OwnersListComponent,
    PetDetailsComponent
=======
    UserLoginComponent,
>>>>>>> 0fd045844dce981694a38977756b9e87d14c7590
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
