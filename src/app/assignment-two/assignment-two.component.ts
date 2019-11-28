import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
})
export class AssignmentTwoComponent {

  username = '';
  isDisabled = true;

  onUpdateInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username === '') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  onClick() {
    this.username = '';
    this.isDisabled = true;
  }
}
