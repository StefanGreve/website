import { Component, Input } from '@angular/core';
import { NavigationItem } from 'src/app/interfaces/navigation-item';

@Component({
  selector: 'adv-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input()
  items: NavigationItem[] | undefined;

  constructor(){}

  ngOnInit(): void {
    this.items = this.items?.filter(item => !item?.hidden);
  }
}
