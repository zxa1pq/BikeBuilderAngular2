import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from './Services/bike.service';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styles: [`
        .row {
            margin-right: 100px;
            margin-left: 100px;
        }

        .container {

            padding-bottom: 50px;
        }

        .img-fluid {

            max-width: 70%;
        }

        .page-header
        {
            margin: 0px 0 0px;
        }
    `]



})

export class SummaryComponent {
    summaryimg = 'assets/img/fullBike/BlueBirdPlain.png';
    summaryRemove = 'assets/img/close.png';
    summarydataOrders = 'Your Order';
    summarydataItems = 'Items';
    summarydataModel = 'Ebullit Steps E8000:';
    summarydataColours = 'ColourWay:';
    summarydataBikeColour = 'Blue Bird';
    summarydataAccessories = 'Accessories:';
    summarydataAccessoriesType = 'ALU Box';
    summarydataAccessoriesPrice = '€350.00';
    summarydataBikePrice = '€4,965.00';
    summarydataSubTot = 'Sub Total:';
    summarydataTax = 'Tax:';
    summarydataTotal = 'Grand Total:';
    summarydataSubPrice = '€5,315.00';
    summarydataTaxPrice = '€5';
    summarydataGrandTot = '€5,320.00';



bikeService;

    constructor(private _router: Router) {
this.bikeService = new BikeService();
    }
    returnToAc() {
        this._router.navigate(['accessories']);
    }
    summary() {
        this.bikeService.push();
        // this._router.navigate(['summary']);
    }
}
