import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BikeService } from '././/Services/bike.service';
import { Bike } from './Models/bike';
@Component({
    selector: 'app-bikecolor',
    templateUrl: `./bikecolor.component.html`,
    styleUrls: ['./app.component.css'],
    providers: [BikeService]
})

export class BikeColorComponent {
    _imageUrl: string;
    bikeimg = 'assets/img/fullBike/BlueBirdPlain.png';
    bike;
    bikess;
    bikeService;
    selectedBike: Bike;
    constructor(private _router: Router, private _route: ActivatedRoute, bikeService: BikeService) {
        this._imageUrl = 'assets/img/Frames/E8000_frame_Submarine.png';
       this.selectedBike = new Bike();

        this._route.params.subscribe(params => {
            this.selectedBike.Id = params['id'];
            console.log(this.selectedBike.Id);
            console.log('break');
        });
    console.log('constructor1');
        this.bikess = bikeService.bikeColors(this.selectedBike.Id);
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
        this._router.navigate(['accessories', this.selectedBike.Id]);
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

