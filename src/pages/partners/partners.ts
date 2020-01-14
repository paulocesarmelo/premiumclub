import {Component} from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {PremiumClubService} from "../../services/PremiumClubService";
import {AboutPartnersPage} from "../about-partners/about-partners";
import PremiumClubPartner, {PremiumClubCategories} from "../../models/PremiumClubPartner";

@IonicPage()
@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html',
})
export class PartnersPage {
  isLoading: boolean = true;

  partners: PremiumClubPartner[] = [];
  partnersShow: PremiumClubPartner[] = [];
  categoriesKeys: any = Object.keys(PremiumClubCategories);
  keySelect: any = '0';

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
    this.premiumClubService.findAllParceiros().then((response: any) => {
      const {data} = response;
      if (data && data.records) {
        this.partners = data.records.map((obj: any) => new PremiumClubPartner(obj));
        this.updateShow();
      }
      done();
    }).catch(() => done());
  }

  updateShow = ()=> {
    this.partnersShow = this.partners.filter((item) => this.keySelect === '0' || item.categoria == this.keySelect);
  };

  getCategorieById(id: string) {
    return PremiumClubCategories[id];
  }


  openPartner = (premiumClubPartner: PremiumClubPartner) => {
    this.modalCtrl.create(AboutPartnersPage, {premiumClubPartner}).present();
  }

}
