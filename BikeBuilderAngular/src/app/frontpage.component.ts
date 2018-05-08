import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-frontpage',
    templateUrl: './frontpage.component.html',
})

export class FrontpageComponent {
    constructor(private _router: Router) {
    }
    add() {
        this._router.navigate(['builder']);
      }
}
