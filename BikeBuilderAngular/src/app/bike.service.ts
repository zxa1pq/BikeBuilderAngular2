import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseAppProvider, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { Router } from '@angular/router';
import { config } from './app.module';

export class BikeService {

users;

private db: AngularFireDatabase;
private _router: Router;
public ddb: FirebaseApp;
    constructor() {
    }
    ngOnInit() {
        console.log(this.ddb);
        this.db = new AngularFireDatabase(_firebaseAppFactory(config, 'first'));
        this.users = this.db.list('/');
      }
        Bikes() {
            this.db = new AngularFireDatabase(_firebaseAppFactory(config, 'first'));
        this.users = this.db.list('/');
            return this.users;
        }}
