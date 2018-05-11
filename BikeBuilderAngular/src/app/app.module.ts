import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BikeComponent } from './bike.component';

import { routing } from './app.routing';
import {HttpModule } from '@angular/http';
import { HomeComponent } from './Home.component';
import { BotnavComponent } from './botnav.component';



@NgModule({
  declarations: [
    AppComponent, BikeComponent, HomeComponent, BotnavComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
