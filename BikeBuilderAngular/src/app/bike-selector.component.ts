import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseAppProvider, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { config1 } from './app.module';
import { config } from './app.module';
import { BikeService } from './bike.service';


@Component({
    selector: 'app-bikeselector',
    templateUrl: './bike-selector.component.html'
})

export class BikeSelectorComponent {
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    users;
    private db: AngularFireDatabase;
    private _router: Router;
    public ddb: FirebaseApp;
    constructor(/*private db: AngularFireDatabase, private _router: Router, public ddb: FirebaseApp*/) {
        // this.users = _bikeservice.Bikes();

    }

    ngOnInit() {
        console.log(this.ddb);
        this.db = new AngularFireDatabase(_firebaseAppFactory(config1, 'second'));
        this.users = this.db.list('/');
    }


    next() {
        this._router.navigate(['colors']);
    }
}
