import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AboutMemberPage} from './about-member';
import {ComponentsModule} from "../../components/components.module";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@NgModule({
    declarations: [
        AboutMemberPage,
    ],
    providers: [InAppBrowser],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(AboutMemberPage),
    ],
})
export class AboutMemberPageModule {
}
