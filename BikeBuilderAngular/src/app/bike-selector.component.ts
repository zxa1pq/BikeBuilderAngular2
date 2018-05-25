import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '././/Services/bike.service';
import { Bike } from './Models/bike';


@Component({
    selector: 'app-bikeselector',
    templateUrl: './bike-selector.component.html',
    providers: [BikeService]
})

export class BikeSelectorComponent {
    private _router: Router;

    bgimage = 'assets/img/schenley.jpg';
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    bikes;
    bikeSelected;
    bike = new Bike();
    cart: any[];
    _imageUrl;
    _totalPrice;

    @Output() outputEvent: EventEmitter<any> = new EventEmitter();

    constructor(bikeService: BikeService, private _route: Router) {
        this.bikeSelected = false;
        this._totalPrice = 0;
        this._imageUrl = 'assets/img/bike-default.png';
        this.bikes = bikeService.Bikes();
            this.cart = [];

    }

    ngOnInit() {
    }

    toColors() {
        if (this.bikeSelected) {
            this.outputEvent.emit(this.bike);
            this._route.navigate(['/colors', this.bike.Id]);
        } else {
            console.log(false);
        }
    }

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
        this.cart.push(value);
        this.cart.forEach(element => {
            console.log(element);
        });
        this.bikeSelected = true;
        console.log(this.bikeSelected);
    }

}
