import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './pets/shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './pets/shared/user-login/user-login.component';
import {AuthGuard} from './pets/shared/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavbarComponent,
    NavbarComponent,
    HomeComponent,
    UserLoginComponent,
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
