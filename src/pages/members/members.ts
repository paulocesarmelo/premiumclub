import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {PremiumClubService} from "../../services/PremiumClubService";
import PremiumClubMember from "../../models/PremiumClubMember";
import {AboutMemberPage} from "../about-member/about-member";

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {


  isLoading: boolean = true;

  members: PremiumClubMember[] = [];

  constructor(public modalCtrl: ModalController, public premiumClubService: PremiumClubService) {
    this.updateRecords();
  }

  doRefresh(refresher) {
    this.updateRecords(() => {
      this.isLoading = false;
      refresher.complete();
    });
  }

  updateRecords(done: Function = () => {
    this.isLoading = false;
  }) {
    this.premiumClubService.findAllMembros().then((response: any) => {
      const {data} = response;
      if (data && data.records) {
        this.members = data.records.map((obj: any) => new PremiumClubMember(obj));
      }
      done();
    }).catch(() => done());
  }

  openMember = (premiumClubMember: PremiumClubMember) => {
    this.modalCtrl.create(AboutMemberPage, {premiumClubMember}).present();
  }

}
