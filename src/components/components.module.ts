import { NgModule } from '@angular/core';
import { EventCardComponent } from './event-card/event-card';
import {IonicModule} from "ionic-angular";
import { LoadingComponent } from './loading/loading';
import { ImageCardComponent } from './image-card/image-card';
import { HeaderImageComponent } from './header-image/header-image';
@NgModule({
	declarations: [EventCardComponent,
    LoadingComponent,
    ImageCardComponent,
    HeaderImageComponent],
	imports: [IonicModule],
	exports: [EventCardComponent,
    LoadingComponent,
    ImageCardComponent,
    HeaderImageComponent]
})
export class ComponentsModule {}
