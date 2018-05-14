import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {HttpModule } from '@angular/http';

import { HomeComponent } from './Home.component';
import { BotnavComponent } from './botnav.component';
import { TopnavComponent } from './topnav.component';
import { BikeColorComponent } from './bikecolor.component';
import { BikeSelectorComponent } from './bike-selector.component';
import { BikeAccessoryComponent } from './bikeaccessory.component';
import { SummaryComponent } from './summary.component';




@NgModule({
  declarations: [
    AppComponent, HomeComponent, BotnavComponent, TopnavComponent, BikeSelectorComponent, BikeColorComponent,
    BikeAccessoryComponent, SummaryComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
