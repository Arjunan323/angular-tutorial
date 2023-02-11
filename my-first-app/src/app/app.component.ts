import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];

  onIntervalFierd(fierdNumber: number) {
    if (fierdNumber % 2 == 0) {
      this.evenNumbers.push(fierdNumber)
    } else {
      this.oddNumbers.push(fierdNumber)
    }
  }
}
