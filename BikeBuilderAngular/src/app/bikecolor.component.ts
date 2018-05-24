import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BikeService } from './bike.service';
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
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    id;
    bike;
    bikess;
    bikeService;
    constructor(private _router: Router, private _route: ActivatedRoute, bikeService: BikeService) {
        this._imageUrl = 'assets/img/bike-default.png';
        // this.bikes = _bikeService.bikeColors(this.id);
      //  this.db = new AngularFireDatabase(_firebaseAppFactory(config, 'first'));
        // this.bikes = this.db.list('/');
        console.log('constructor1');
        this.bikess = bikeService.bikeColors(1);
        this.bikess.forEach(element => {
            console.log(element);
        });
        console.log('constructor');
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
            console.log('break');
        });
    }
    next() {
        this._router.navigate(['accessories']);
    }

}
