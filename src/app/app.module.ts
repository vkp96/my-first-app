import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AssignmentOneComponent} from './AssignmentOne/assignmentOne.component';
import { SuccessAlertComponent } from './AssignmentOne/successAlert.component';
import { WarningAlertComponent } from './AssignmentOne/warningAlert.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';
import { GameComponent } from './assignment-four/game/game.component';
import { OddComponent } from './assignment-four/odd/odd.component';
import { EvenComponent } from './assignment-four/even/even.component';
import { AssignmentFiveComponent } from './assignment-five/assignment-five.component';
import { ActiveUsersComponent } from './assignment-five/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment-five/inactive-users/inactive-users.component';
import { CountService } from './assignment-five/count-service';
import { AssignmentSixComponent } from './assignment-six/assignment-six.component';
import { AssignmentSevenComponent } from './assignment-seven/assignment-seven.component';
import { AssignmentEightComponent } from './assignment-eight/assignment-eight.component';
import { ReversePipe } from './assignment-eight/reverse-pipe.pipe';
import { SortPipe } from './assignment-eight/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AssignmentOneComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
    AssignmentFiveComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AssignmentSixComponent,
    AssignmentSevenComponent,
    AssignmentEightComponent,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
