import { Component } from '@angular/core';
import { Link } from './interfaces/link';
import { ThemeSwitcherService } from './services/theme-switcher.service';
import { Theme } from './enums/theme';

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

  constructor(private themeService: ThemeSwitcherService) {
    console.log(themeService.getActiveTheme);
    themeService.setTheme(Theme.Dark);
  }
}
