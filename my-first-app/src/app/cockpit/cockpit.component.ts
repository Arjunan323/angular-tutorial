import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreate = new EventEmitter<{ serverName: string, serverConent: string }>();
  @Output('bpCreated') blueprintCreate = new EventEmitter<{ serverName: string, serverConent: string }>();
  newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInput:HTMLInputElement) {
    this.serverCreate.emit({ serverName: serverNameInput.value, serverConent: this.newServerContent })
  }

  onAddBlueprint() {
    this.blueprintCreate.emit({ serverName: this.newServerName, serverConent: this.newServerContent })
  }
}
