import { Component, Input } from '@angular/core';
import { Clickable } from 'src/app/interfaces/clickable';

@Component({
  selector: 'adv-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input()
  items: Clickable[] | undefined;

  constructor(){}

  ngOnInit(): void {
    this.items = this.items?.filter(item => !item?.hidden);
  }
}
