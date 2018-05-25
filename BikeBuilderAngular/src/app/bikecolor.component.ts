import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BikeService } from '././/Services/bike.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseAppProvider, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { config1, config } from './app.module';
@Component({
    selector: 'app-bikecolor',
    templateUrl: `./bikecolor.component.html`,
    styleUrls: ['./app.component.css'],
    providers: [BikeService]
})

export class BikeColorComponent {
    _imageUrl: string;
    private db: AngularFireDatabase;
    bikeimg = 'assets/img/fullBike/BlueBirdPlain.png';
    id;
    bike;
    bikess;
    bikeService;
    constructor(private _router: Router, private _route: ActivatedRoute, bikeService: BikeService) {
        this._imageUrl = 'assets/img/Frames/E8000_frame_Submarine.png';

        this._route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
            console.log('break');
        });
        console.log('constructor1');
        this.bikess = bikeService.bikeColors(this.id);
        this.bikess.forEach(element => {
            console.log(element);
        });
        console.log('constructor');
    }

    ngOnInit() {
    }
    returnToModels() {
        this._router.navigate(['models']);
    }
    gotoAc() {
        this._router.navigate(['accessories', this.id]);
    }
    changeColorOne() {
        this._imageUrl = 'assets/img/fullBike/LizardPlain.png';
        this.bikeimg = 'assets/img/fullBike/LizardPlain.png';
    }
    changeColorTwo() {
        this._imageUrl = 'assets/img/fullBike/BlueBirdPlain.png';
        this.bikeimg = 'assets/img/fullBike/BlueBirdPlain.png';
    }
    changeColorThree() {
        this._imageUrl = 'assets/img/fullBike/PepperPlain.png';
        this.bikeimg = 'assets/img/fullBike/PepperPlain.png';
    }
}

