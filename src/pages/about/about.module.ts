import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    AboutPage,
  ],
    providers:[InAppBrowser],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
})
export class AboutPageModule {}
