import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bike } from './Models/bike';

@Component({
    selector: 'app-bike',
    templateUrl: './bike.component.html',
})

export class BikeComponent {
    _totalPrice: any;
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    sbike: Bike;
    @Output() outputEvent: EventEmitter<any> = new EventEmitter();
    @Input() bike;

    bclick(sbike) {
        this.outputEvent.emit(sbike);
    }
}
