import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bikeaccessory',
    templateUrl: './bikeaccessory.component.html'
})

export class BikeAccessoryComponent {
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    constructor( private _router: Router) {
    }
    summary() {
        this._router.navigate(['summary']);
      }
}
