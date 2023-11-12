import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogComponent } from './components/dialog/dialog.component';
import { Icon } from './enums/icon';
import { Theme } from './enums/theme';
import { Clickable } from './interfaces/clickable';
import { ThemeSwitcherService } from './services/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  icons: Icon[] = [
    Icon.Copy,
    Icon.CheckMark,
  ];

  @ViewChild(DialogComponent, {static: false})
  settingsDialog: DialogComponent | undefined;
  settingsSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  ngAfterViewInit(): void {
    this.settingsSubject$?.subscribe(state => {
      if (state) this.settingsDialog?.openDialog();
      else this.settingsDialog?.closeDialog();
    })
  }

  constructor(private themeService: ThemeSwitcherService) {
    console.log(themeService.getActiveTheme);
  }

  public openSettings = () => {
    this.settingsSubject$.next(true);
  }

  public closeSettings = () => {
    this.settingsSubject$.next(false);
  }

  public toggleTheme() {
    const newTheme = this.themeService.getActiveTheme === Theme.Light ? Theme.Dark : Theme.Light;
    this.themeService.setTheme(newTheme);
  }

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
      label: "WIP",
      hidden: true,
    },
    {
      label: "Settings",
      action: this.openSettings,
    }
  ]
}
