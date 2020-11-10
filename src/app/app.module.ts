import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './petshop/pets-list/pets-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './petshop/shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OwnersListComponent } from './petshop/owners-list/owners-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavbarComponent,
    NavbarComponent,
    HomeComponent,
    OwnersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
