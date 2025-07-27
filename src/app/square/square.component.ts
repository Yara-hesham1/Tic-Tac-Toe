import { Component, Input } from "@angular/core";



@Component({
    selector:'app-square',
  template: `<button class="square">{{ value }}</button>`,
    styleUrls:['./square.component.scss'],
    standalone:true
    

})

export class SquareComponent {

    @Input() value?:'X' | 'O';
}


