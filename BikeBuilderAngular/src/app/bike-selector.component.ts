import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseAppProvider, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { config1 } from './app.module';
import { config } from './app.module';
import { BikeService } from './bike.service';
import { Bike } from './bike';


@Component({
    selector: 'app-bikeselector',
    templateUrl: './bike-selector.component.html',
    providers: [BikeService]
})

export class BikeSelectorComponent {
    private db: AngularFireDatabase;
    private _router: Router;
    public ddb: FirebaseApp;

    bgimage = 'assets/img/schenley.jpg';
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    bikes;
    bikeSelected;
    bike = new Bike();
    _imageUrl;
    _totalPrice;

    @Output() outputEvent: EventEmitter<any> = new EventEmitter();

    constructor(bikeService: BikeService, private _route: Router) {
        this.bikeSelected = false;
        this._totalPrice = 0;
        this._imageUrl = 'assets/img/bike-default.png';
        this.bikes = bikeService.Bikes();

    }

    ngOnInit() {
        /*  console.log(this.ddb);
          this.db = new AngularFireDatabase(_firebaseAppFactory(config1, 'second'));
          this.users = this.db.list('/');
      */
    }

    toColors() {
        if (this.bikeSelected) {
            this.outputEvent.emit(this.bike);
            this._route.navigate(['/colors', this.bike.Id]);
        } else {
            console.log(false);
        }
    }

    selectedEvent(bike) { }
    handleEvent(value) {
        this.bike = value;
        console.log(this.bike);
        this.bike.Name = value.Name;
        this.bike.Price = value.Price;
        this.bike.Id = value.$key;
        this.bike.imageurl = value.imageurl;

        console.log(this.bike);

        this._totalPrice = 0;
        this._totalPrice += value.Price;

        this._imageUrl = value.imageurl;

        this.bikeSelected = true;
        console.log(this.bikeSelected);
    }

}
