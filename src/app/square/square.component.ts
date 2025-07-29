import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-square',
    templateUrl: './square.component.html',
    styleUrls:['./square.component.scss'],
    standalone:true
})

export class SquareComponent {
    @Input() value?:'X' | 'O';
    @Output() squareClick = new EventEmitter<void>();

    onClick() {
        this.squareClick.emit();
    }
}


