import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BoardComponent } from "./board/board.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'tic-tac-toe';
}
