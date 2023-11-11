import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/enums/icon';

@Component({
  selector: 'adv-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  readonly Icon = Icon;

  @Input()
  icons: Icon[] | undefined;
}
