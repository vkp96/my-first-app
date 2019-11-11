import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName: string = 'defaultServerName';
  serverCreationStatus: string = 'Server was not created!';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created, server name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log("onUpdateServerName Called");
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
