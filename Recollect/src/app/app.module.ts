
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
/*Angular Matrial Modules Imports */
import { MatInputModule }from '@angular/material/input';
import { MatCardModule }from '@angular/material/card';
import { MatButtonModule }from '@angular/material/button';
import { MatToolbarModule }from '@angular/material/toolbar';
import { MatExpansionModule }from '@angular/material/expansion';
import { MatProgressSpinnerModule }from '@angular/material/progress-spinner'; 
import { MatDialogModule }from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    BrowserModule,
    FormsModule,
    AppRoutingModule,
  
    ReactiveFormsModule,
    BrowserAnimationsModule,
   
    
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatSliderModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
