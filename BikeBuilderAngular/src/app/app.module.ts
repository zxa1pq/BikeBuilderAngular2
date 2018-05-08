import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BikeComponent } from './bike.component';

import { routing } from './app.routing';
import { FrontpageComponent } from './frontpage.component';
import {HttpModule } from '@angular/http';
import { BlankComponent } from './blank.component';



@NgModule({
  declarations: [
    AppComponent, BikeComponent, FrontpageComponent, BlankComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
