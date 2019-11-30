import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-seven',
  templateUrl: './assignment-seven.component.html',
  styleUrls: ['./assignment-seven.component.css']
})
export class AssignmentSevenComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenProjectnames = ['testproject'];
  forbiddenProjectNameVariables = ['prodproject'];
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)], this.forbiddenProjectNames.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl('Stable')
      })
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    //this.signupForm.reset();
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectnames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNameVariables.indexOf(control.value) !== -1) {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
