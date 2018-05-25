import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-accessory',
    templateUrl: './accessoryitem.component.html',
})

export class AccessoryitemComponent {
    _totalPrice: any;
    bikeimg = 'assets/img/Frames/E8000_frame_Submarine.png';
    @Output() outputEvent: EventEmitter<any> = new EventEmitter();
    @Input() data;

    bclick(item) {
        this.outputEvent.emit(item);
    }
}
