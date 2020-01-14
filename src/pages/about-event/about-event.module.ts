import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AboutEventPage} from './about-event';
import {ComponentsModule} from "../../components/components.module";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@NgModule({
    declarations: [
        AboutEventPage,
    ],
    providers: [InAppBrowser],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(AboutEventPage),
    ],
})
export class AboutEventPageModule {
}
