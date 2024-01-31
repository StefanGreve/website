import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DialogComponent } from "./components/dialog/dialog.component";
import { Theme } from "./enums/theme";
import { NavigationItem } from "./interfaces/navigation-item";
import { ThemeSwitcherService } from "./services/theme-switcher.service";
import { Item } from "./interfaces/item";
import Enumerable from "./lib/Enumerable";
import { Button } from "./interfaces/button";
import { State } from "./enums/state";
import { AlertComponent } from "./components/alert/alert.component";

@Component({
  selector: "adv-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnInit {
  isDarkThemeEnabled = false;

  languages: Array<Item> = new Enumerable([
    {
      label: "English",
    },
    {
      label: "German",
    },
    {
      label: "Japanese",
      disabled: true,
    }
  ]).sort();

  @ViewChild(AlertComponent, {static: false})
  alert: AlertComponent | undefined;

  alertSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  @ViewChild(DialogComponent, {static: false})
  settingsDialog: DialogComponent | undefined;

  settingsSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  ngOnInit(): void {
    this.isDarkThemeEnabled = this.themeService.getActiveTheme === Theme.Dark;
  }

  ngAfterViewInit(): void {
    this.alertSubject$?.subscribe(state => {
      if (state) this.alert?.open();
      else this.alert?.close();
    });

    this.settingsSubject$?.subscribe(state => {
      if (state) this.settingsDialog?.open();
      else this.settingsDialog?.close();
    });
  }

  constructor(private themeService: ThemeSwitcherService) {
    console.log(`Active Theme: ${Theme[themeService.getActiveTheme]}`);
  }

  public openAlert = () => {
    this.alertSubject$.next(true);
  };

  public closeAlert = () => {
    this.alertSubject$.next(false);
  };

  public openSettings = () => {
    this.settingsSubject$.next(true);
  };

  public closeSettings = () => {
    this.settingsSubject$.next(false);
  };

  public toggleTheme() {
    const newTheme = this.themeService.getActiveTheme === Theme.Light ? Theme.Dark : Theme.Light;
    this.themeService.setTheme(newTheme);
    this.isDarkThemeEnabled = !this.isDarkThemeEnabled;
  }

  public changeLanguage(language: string) {
    console.log(language);
  }

  items: NavigationItem[] = [
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
      label: "Alert",
      hidden: false,
      action: this.openAlert,
    },
    {
      label: "Settings",
      action: this.openSettings,
    }
  ];

  testAlert: Button[] = [
    {
      label: "Ok",
      action: this.closeAlert,
      state: State.Info,
    },
    {
      label: "Fire Missiles",
      action: () => console.log("🔥"),
      state: State.Danger,
    },
  ];
}
