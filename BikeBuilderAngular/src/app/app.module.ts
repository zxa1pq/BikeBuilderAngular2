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

export const config = {
  apiKey: 'AIzaSyC4E7exIjh-LvOy2X38qwBgTi6HnEYxSkA',
  authDomain: 'crudproject-80a90.firebaseapp.com',
  databaseURL: 'https://crudproject-80a90.firebaseio.com',
  projectId: 'crudproject-80a90',
  storageBucket: 'crudproject-80a90.appspot.com',
  messagingSenderId: '484980870717'
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
    BikeAccessoryComponent, SummaryComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule, AngularFireDatabaseModule, ReactiveFormsModule, AngularFireModule.initializeApp(config1, 'second'),
    AngularFireModule.initializeApp(config, 'first'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
