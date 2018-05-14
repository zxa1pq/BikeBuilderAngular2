import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    /**
     *
     */
    constructor( private _router: Router) {
    }
    start() {
        this._router.navigate(['models']);
      }
}
