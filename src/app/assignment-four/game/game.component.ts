import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  interval;
  index = 1;
  @Output() eventEmitted: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval (() => {
      this.eventEmitted.emit(this.index++);
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
    //this.index = 1;
  }
}
