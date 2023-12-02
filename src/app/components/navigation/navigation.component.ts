import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationItem } from 'src/app/interfaces/navigation-item';

@Component({
  selector: 'adv-navigation',
  standalone: true,
  imports: [CommonModule],
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
