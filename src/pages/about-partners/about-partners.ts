import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import PremiumClubPartner, {PremiumClubCategories} from "../../models/PremiumClubPartner";
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
    selector: 'page-about-partners',
    templateUrl: 'about-partners.html',
})
export class AboutPartnersPage {
    public premiumClubPartner: PremiumClubPartner = new PremiumClubPartner();

    constructor(public navCtrl: NavController, public params: NavParams, private iab: InAppBrowser) {
        this.premiumClubPartner = new PremiumClubPartner(params.get('premiumClubPartner'));
    }

    closeModal() {
        this.navCtrl.pop();
    }

    getCategorieById(id: string) {
        return PremiumClubCategories[id];
    }

    openLink(link: string) {
        this.iab.create(link, '_system', 'location=yes');
    }

    openMap(address: string) {
        this.iab.create(`https://www.google.com.br/maps/search/${encodeURI(address)}`, '_system', 'location=yes');
    }

}
