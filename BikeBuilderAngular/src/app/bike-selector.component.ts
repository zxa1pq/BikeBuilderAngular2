import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bikeselector',
    templateUrl: './bike-selector.component.html'
})

export class BikeSelectorComponent {
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    constructor( private _router: Router) {
    }
    next() {
        this._router.navigate(['colors']);
      }
}
