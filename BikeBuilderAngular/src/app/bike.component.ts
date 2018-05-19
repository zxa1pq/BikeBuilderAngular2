import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bike',
    templateUrl: './bike.component.html',
})

export class BikeComponent {
    _totalPrice: any;
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    @Output() outputEvent: EventEmitter<any> = new EventEmitter();
    @Input() data;

    bclick(user) {
        this.outputEvent.emit(user.Price);
    }
}
