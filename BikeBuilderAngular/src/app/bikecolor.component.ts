import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-bikecolor',
    templateUrl: `./bikecolor.component.html`,
    styleUrls: ['./app.component.css']
})

export class BikeColorComponent {

    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    id;
    constructor(private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        });
    }
    next() {
        this._router.navigate(['accessories']);
    }
    myFunc() {
        console.log('function called');
    }
}
