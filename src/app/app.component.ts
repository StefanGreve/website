import { Component } from '@angular/core';
import { ThemeSwitcherService } from './services/theme-switcher.service';
import { Theme } from './enums/theme';
import { Icon } from './enums/icon';
import { Clickable } from './interfaces/clickable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Hello, World!';

  icons: Icon[] = [
    Icon.Copy,
    Icon.CheckMark,
  ];

  items: Clickable[] = [
    {
      label: "Login",
      href: "#",
      disabled: true,
    },
    {
      label: "Archive",
      href: "https://archive.stefangreve.com/",
      external: true,
    },
    {
      label: "Settings",
      action: this.openSettings,
    }
  ]

  constructor(private themeService: ThemeSwitcherService) {
    console.log(themeService.getActiveTheme);
  }

  openSettings() {
    alert("open settings dialog");
  }

  closeSettings() {
    console.log("close settings dialog");
  }
}
