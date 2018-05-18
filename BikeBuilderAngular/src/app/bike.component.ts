import { Component, Input } from '@angular/core';
import { BikeService } from './bike.service';

@Component({
    selector: 'app-bike',
    templateUrl: './bike.component.html',
    providers: [BikeService]
})

export class BikeComponent {
    bikes;
    constructor(_bikeService: BikeService) {
        this.bikes = _bikeService.Bikes();
    }
    @Input() data;
}
