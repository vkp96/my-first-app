import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styles: [`
    .logItem {
      color: white
    }
  `]
})
export class AssignmentThreeComponent{
  i = 1;
  showParagraph = false;
  count = [];

  onClick() {
    this.showParagraph = !this.showParagraph;
    this.count.push(new Date());
    this.i++;
  }

  /*getBackgroundColor() {
    return {backgroundColor: this.i >= 6 ? 'blue' : 'transparent'};
  }*/
}
