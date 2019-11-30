import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private userService: UserService) {}
}
