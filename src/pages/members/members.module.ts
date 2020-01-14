import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MembersPage} from './members';
import {PremiumClubService} from "../../services/PremiumClubService";
import {ComponentsModule} from "../../components/components.module";
import {AboutMemberPageModule} from "../about-member/about-member.module";

@NgModule({
  declarations: [
    MembersPage,
  ],
  providers: [PremiumClubService],
  imports: [
    AboutMemberPageModule,
    ComponentsModule,
    IonicPageModule.forChild(MembersPage),
  ],
})
export class MembersPageModule {
}
