import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseAppProvider, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { Router } from '@angular/router';
import { config, config1 } from './../app.module';
import { Bike } from '../Models/bike';

export class BikeService {

    bikes;
    bikeObject = new Bike();

    private db: AngularFireDatabase;
    private storedBikes: AngularFireDatabase;
    constructor() {
        this.db = new AngularFireDatabase(_firebaseAppFactory(config1, 'second'));
        this.storedBikes = new AngularFireDatabase(_firebaseAppFactory(config, 'first'));
    }
    Bikes() {
        this.bikes = this.db.list('/');
        return this.bikes;
    }

    bikeColors(id) {
        this.bikes = this.db.list('/' + id + '/Color/');
        return this.bikes;
    }

    Geta(id) {
    this.bikes = this.db.list('/' + id + '/Accessory/');
    return this.bikes;
}

    push() {
        this.bikeObject.Name = 'Steps EBULLITT';
        this.bikeObject.Price = '1234';
        this.bikeObject.Description = 'Heavy equipment';

        this.storedBikes.list('/').push(this.bikeObject);
    }
    bikeAccossories() {
        console.log('hello');
    }
}


