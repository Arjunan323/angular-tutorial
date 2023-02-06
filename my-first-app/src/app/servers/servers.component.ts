import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {


  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created!'
  serverName: string = 'Test';
  username: string = '';
  serverCreated:boolean = false
  servers:Array<string> = ['Test Server' , "Test Server 2"   ]
  showSecret:boolean = false;
  log:Array<Date> = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created!. Name is '+this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverCreated = false;
    this.serverName = (<HTMLInputElement> event.target ).value
  }

  onRestUser(){
    this.username = ''
  }

  
  onToggleDetails(){
      this.showSecret = !this.showSecret
      // this.log.push(this.log.length + 1)
      this.log.push(new Date())
  }
}
