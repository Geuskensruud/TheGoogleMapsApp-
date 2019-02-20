import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AgmDirectionModule} from 'agm-direction';
import { AgmCoreModule } from '@agm/core';
import {GoogleplaceDirective} from './directives/google-place.directive';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import {StorageServiceModule} from 'ngx-webstorage-service';
import {LocalStorageService} from './LocalStorageService';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmDirectionModule,
    StorageServiceModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBkf5_v4o7kXXN8_0acDPd1p2HZJJf4jQ',
      libraries: ["places"]
    }),
  ],
  exports: [GoogleplaceDirective],
  providers: [LocalStorageService],
  declarations: [ AppComponent, GoogleplaceDirective, LoginComponent, UserFormComponent, GoogleMapsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule{}



