import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BikeService } from '././/Services/bike.service';
import { BikeAccessory } from './Models/BikeAccessory';
@Component({
    selector: 'app-bikeaccessory',
    templateUrl: './bikeaccessory.component.html',
    providers: [BikeService]
})

export class BikeAccessoryComponent {
    accessories;
    _imageUrl;
    _totalPrice;
    bikeid;
    accessory = new BikeAccessory();

    constructor( private _router: Router, bikeService: BikeService, private _route: ActivatedRoute) {

        this._route.params.subscribe(params => {
            this.bikeid = params['id'];
            console.log('break');
        });

        this._totalPrice = 0;
        this._imageUrl = 'assets/img/bike-default.png';

        this.accessories = bikeService.Geta(this.bikeid);
       this.accessories.forEach(element => {
           console.log(element);
       });
    }

    handleEvent(value) {
        this.accessory = value;
         console.log(value);
         this.accessory.Price = value.Price;
         this.accessory.Id = value.$key;
         this.accessory.imageurl = value.imageurl;
         console.log(this.accessory);
        this._totalPrice = 0;
        this._totalPrice += value.Price;
        this._imageUrl = value.imageurl;


    }
    rHome() {
        this._router.navigate(['']);
    }
    gotoColors() {
        this._router.navigate(['colors']);
    }

    gotoSum() {
        this._router.navigate(['summary']);
        console.log('clicked');
    }

}
