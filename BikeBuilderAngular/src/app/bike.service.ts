import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseAppProvider, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { Router } from '@angular/router';
import { config, config1 } from './app.module';

import * as firebase from 'firebase';
import 'firebase/storage';

export class BikeService {

    bikes;

    private db: AngularFireDatabase;
    private _router: Router;
    public ddb: FirebaseApp;
    constructor() {
    }
    Bikes() {
        this.db = new AngularFireDatabase(_firebaseAppFactory(config1, 'second'));
        this.bikes = this.db.list('/');
        return this.bikes;
    }

    getImages() {
    }
    bikeColors(id) {
        this.db = new AngularFireDatabase(_firebaseAppFactory(config1, 'second'));
        this.bikes = this.db.list('/' + id);
        return this.bikes;
    }
    push(bike) {}
    next() {
        console.log('hello');
    }
}

