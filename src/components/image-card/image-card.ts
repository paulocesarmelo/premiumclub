import {Component, Input} from '@angular/core';


@Component({
  selector: 'image-card',
  templateUrl: 'image-card.html'
})
export class ImageCardComponent {

  @Input()
  src: string;

  public width: string = "100%";

  @Input()
  public height: string = "150px";

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
