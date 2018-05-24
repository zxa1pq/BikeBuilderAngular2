import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bikeaccessory',
    templateUrl: './bikeaccessory.component.html'
})

export class BikeAccessoryComponent {
    _imageUrl: string;
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    constructor( private _router: Router) {
        this._imageUrl = 'assets/img/bike-default.png';
    }
    summary() {
        this._router.navigate(['summary']);
      }
}
