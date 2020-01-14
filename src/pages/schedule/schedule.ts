import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {PremiumClubService} from "../../services/PremiumClubService";
import PremiumClubEvent from "../../models/PremiumClubEvent";
import {AboutEventPage} from "../about-event/about-event";

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  isLoading: boolean = true;

  events: PremiumClubEvent[] = [];

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
    this.premiumClubService.findAllEventos().then((response: any) => {
      const {data} = response;
      if (data && data.records) {
        this.events = data.records.map((obj: any) => new PremiumClubEvent(obj));
      }
      done();
    }).catch(() => done());
  }

  openEvent = (premiumClubEvent: PremiumClubEvent) => {
    this.modalCtrl.create(AboutEventPage, {premiumClubEvent}).present();
  }

}
