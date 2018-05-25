import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { HomeComponent } from './Home.component';
import { BotnavComponent } from './botnav.component';
import { TopnavComponent } from './topnav.component';
import { BikeColorComponent } from './bikecolor.component';
import { BikeSelectorComponent } from './bike-selector.component';
import { BikeAccessoryComponent } from './bikeaccessory.component';
import { SummaryComponent } from './summary.component';
import { BikeComponent } from './bike.component';
import { AccessoryitemComponent } from './accessoryitem.component';

export const config = {
  apiKey: 'AIzaSyApNjvhk12xI_PR5SNcHS4BQ9yCqiLe8Lc',
  authDomain: 'buildedbikes.firebaseapp.com',
  databaseURL: 'https://buildedbikes.firebaseio.com',
  projectId: 'buildedbikes',
  storageBucket: '',
  messagingSenderId: '552384458120'
};

export const config1 = {
  apiKey: 'AIzaSyCsssX9j3gU7OAaiIB0WCNC-nLzGge8-vQ',
  authDomain: 'bikebuilder-01.firebaseapp.com',
  databaseURL: 'https://bikebuilder-01.firebaseio.com',
  projectId: 'bikebuilder-01',
  storageBucket: 'bikebuilder-01.appspot.com',
  messagingSenderId: '787277440785'
};


@NgModule({
  declarations: [
    AppComponent, HomeComponent, BotnavComponent, TopnavComponent, BikeComponent, BikeSelectorComponent, BikeColorComponent,
    BikeAccessoryComponent, SummaryComponent, AccessoryitemComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule, AngularFireDatabaseModule, ReactiveFormsModule, AngularFireModule.initializeApp(config1, 'second'),
    AngularFireModule.initializeApp(config, 'first'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
