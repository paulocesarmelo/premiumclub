import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AboutPartnersPage} from './about-partners';
import {ComponentsModule} from "../../components/components.module";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@NgModule({
    declarations: [
        AboutPartnersPage,
    ],
    providers: [InAppBrowser],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(AboutPartnersPage),
    ],
})
export class AboutPartnersPageModule {
}
