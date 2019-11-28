import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css']
})
export class AssignmentFourComponent implements OnInit {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onEmittedEvent(index: number) {
    if(index % 2 === 0 ) {
      this.evenNumbers.push(index);
    } else {
      this.oddNumbers.push(index);
    }
  }

}
