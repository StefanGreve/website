import { Component } from '@angular/core';
import { Link } from './interfaces/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Hello, World!';
  links: Link[] = [
    {
      label: "test1",
      href: "#"
    },
    {
      label: "test2",
      href: "#",
      disabled: true
    },
    {
      label: "test3",
      href: "httpsL//google.com",
      external: true
    }
  ]
}
