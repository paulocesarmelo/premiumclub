import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PartnersPage} from './partners';
import {PremiumClubService} from "../../services/PremiumClubService";
import {ComponentsModule} from "../../components/components.module";
import {AboutPartnersPageModule} from "../about-partners/about-partners.module";

@NgModule({
  declarations: [
    PartnersPage,
  ],
  providers: [PremiumClubService],
  imports: [
    AboutPartnersPageModule,
    ComponentsModule,
    IonicPageModule.forChild(PartnersPage),
  ],
})
export class PartnersPageModule {
}
