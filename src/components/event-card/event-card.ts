import {Component, Input} from '@angular/core';
import PremiumClubEvent from "../../models/PremiumClubEvent";


@Component({
  selector: 'event-card',
  templateUrl: 'event-card.html'
})
export class EventCardComponent {

  @Input('on-press')
  onPress: Function;

  @Input('premium-club-event')
  premiumClubEvent: PremiumClubEvent;

}
