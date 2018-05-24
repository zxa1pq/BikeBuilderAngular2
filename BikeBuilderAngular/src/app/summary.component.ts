import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    summaryimg = 'assets/img/bluebird1.png';
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





    constructor(private _router: Router) {
    }
    summary() {
        this._router.navigate(['summary']);
    }
}
