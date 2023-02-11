import { Component } from '@angular/core';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.css']
})
export class BlueprintComponent {
  serverElements = [{ type: 'server', name: 'Test1', content: 'Test2' }];

  onAddServer(serverData: { serverName: string, serverConent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverConent
    });
  }

  onAddBlueprint(blueprintData: { serverName: string, serverConent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverConent
    });
  }

  onChangesFirst() {
    this.serverElements[0].name = 'Changed!'
  }

  onDestoryFirst() {
    this.serverElements.splice(0, 1)
  }

}
