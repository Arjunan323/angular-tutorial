import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { BlueprintComponent } from './blueprint/blueprint.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    BlueprintComponent,
    ServerElementComponent,
    CockpitComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
