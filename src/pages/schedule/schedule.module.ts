import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SchedulePage} from './schedule';
import {PremiumClubService} from "../../services/PremiumClubService";
import {ComponentsModule} from "../../components/components.module";
import {AboutEventPageModule} from "../about-event/about-event.module";

@NgModule({
  declarations: [
    SchedulePage,
  ],
  providers: [PremiumClubService],
  imports: [
    AboutEventPageModule,
    ComponentsModule,
    IonicPageModule.forChild(SchedulePage),
  ],
})
export class SchedulePageModule {
}
