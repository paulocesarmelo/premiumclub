import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
})
export class AboutPage {

    constructor(private iab: InAppBrowser) {

    }

    openPdf() {
        this.openUrl('http://www.premiumclubgo.com.br/uploads/lista-de-maquinas-pre-aprovadas-2018.pdf');
    }

    openDepoimentos() {
        this.openUrl('http://www.premiumclubgo.com.br/depoimentos');
    }

    openSocio() {
        this.openUrl('http://www.premiumclubgo.com.br/ficha_de_associacao');
    }

    openSocial() {
        this.openUrl('http://www.premiumclubgo.com.br/responsabilidade-social');
    }

    openWecando() {
        this.openUrl('http://wecando.com.br');
    }

    openUrl(url: string) {
        this.iab.create(url, '_system');
    }
}
