import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'] ,
  providers : [LoggingService]
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor(private loginService : LoggingService){

  }

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    } , 1000)
  }

  onPauseGame(){
    clearInterval(this.interval)
  }

}
