import {Component, Input} from '@angular/core';

/**
 * Generated class for the HeaderImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-image',
  templateUrl: 'header-image.html'
})
export class HeaderImageComponent {

  @Input()
  src: string;

  @Input()
  title: string;

  @Input()
  subtitle: string;

  public width: string = "100%";

  @Input()
  public height: string = "180px";

  public getImagemShow() {
    if (this.src !== null) {
      return `url("${this.src}")`;
    }
    return ''
  }

  public getWidth() {
    return this.width;
  }

  public getHeight() {
    return this.height;
  }

}
