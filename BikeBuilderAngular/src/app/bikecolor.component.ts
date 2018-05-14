import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-bikecolor',
    templateUrl: `./bikecolor.component.html`,
    styleUrls: ['./app.component.css']
})

export class BikeColorComponent {

    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    myFunc() {
        console.log('function called');
      }
      constructor( private _router: Router) {
      }
      next() {
          this._router.navigate(['accessories']);
        }
}
