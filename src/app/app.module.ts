import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AgmDirectionModule} from 'agm-direction';
import { AgmCoreModule } from '@agm/core';
import {GoogleplaceDirective} from './directives/google-place.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBkf5_v4o7kXXN8_0acDPd1p2HZJJf4jQ'

    })
  ],
  exports: [GoogleplaceDirective],
  providers: [],
  declarations: [ AppComponent, GoogleplaceDirective],
  bootstrap: [ AppComponent ]
})
export class AppModule{}



