import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-six',
  templateUrl: './assignment-six.component.html',
  styleUrls: ['./assignment-six.component.css']
})
export class AssignmentSixComponent implements OnInit {
  @ViewChild('form', { static: false }) signupForm: NgForm;
  defaultSubscription = 'Advanced';
  formSubmitted = false;
  user = {
    email: '',
    password: '',
    subscription: '',
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.subscription = this.signupForm.value.subscription;
  }

}
