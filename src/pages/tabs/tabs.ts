import {Component} from '@angular/core';
import {SchedulePage} from "../schedule/schedule";
import {MembersPage} from "../members/members";
import {PartnersPage} from "../partners/partners";
import {AboutPage} from "../about/about";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  schedulePage = SchedulePage;
  membersPage = MembersPage;
  partnersPage = PartnersPage;
  aboutPage = AboutPage;
}
