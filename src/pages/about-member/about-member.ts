import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import PremiumClubMember from "../../models/PremiumClubMember";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
    selector: 'page-about-member',
    templateUrl: 'about-member.html',
})
export class AboutMemberPage {
    public premiumClubMember: PremiumClubMember = new PremiumClubMember();

    constructor(public navCtrl: NavController, public params: NavParams, private iab: InAppBrowser) {
        console.log(params.get('premiumClubMember'));
        this.premiumClubMember = new PremiumClubMember(params.get('premiumClubMember'));
    }

    closeModal() {
        this.navCtrl.pop();
    }

    openLink(link: string) {
        this.iab.create(link, '_system', 'location=yes');
    }

}
