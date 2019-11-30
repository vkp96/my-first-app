import { Component, OnInit } from '@angular/core';
import {UserService} from './user-service';
import {CountService} from './count-service';
@Component({
  selector: 'app-assignment-five',
  templateUrl: './assignment-five.component.html',
  styleUrls: ['./assignment-five.component.css'],
  providers: [UserService]
})
export class AssignmentFiveComponent implements OnInit {
  constructor(private userService: UserService, private countService: CountService) { }

  ngOnInit() {
  }
}
