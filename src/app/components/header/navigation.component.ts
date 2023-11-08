import { Component, Input } from '@angular/core';
import { Link } from 'src/app/interfaces/link';

@Component({
  selector: 'adv-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input()
  links: Link[] | undefined;

  constructor(){}

  ngOnInit(): void {  }
}
