import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import PremiumClubEvent from "../../models/PremiumClubEvent";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
    selector: 'page-about-event',
    templateUrl: 'about-event.html',
})
export class AboutEventPage {

    public premiumClubEvent: PremiumClubEvent = new PremiumClubEvent();

    constructor(public navCtrl: NavController, public params: NavParams, private iab: InAppBrowser) {
        console.log(params.get('premiumClubEvent'));
        this.premiumClubEvent = new PremiumClubEvent(params.get('premiumClubEvent'));
    }

    closeModal() {
        this.navCtrl.pop();
    }

    openLink(link: string) {
        this.iab.create(link, '_system', 'location=yes');
    }
}
