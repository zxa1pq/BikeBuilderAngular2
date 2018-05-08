import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-bike',
    templateUrl: `./bike.component.html`,
    styleUrls: ['./app.component.css']
})

export class BikeComponent {

    bikeimg = 'assets/img/E8000_white_Race.jpg';
    myFunc() {
        console.log('function called');
      }
      constructor( private _router: Router) {
      }
      start() {
          this._router.navigate(['start']);
        }
}
