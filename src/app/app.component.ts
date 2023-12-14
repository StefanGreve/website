import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DialogComponent } from "./components/dialog/dialog.component";
import { Theme } from "./enums/theme";
import { NavigationItem } from "./interfaces/navigation-item";
import { ThemeSwitcherService } from "./services/theme-switcher.service";
import { Item } from "./interfaces/item";
import Enumerable from "./lib/Enumerable";

@Component({
  selector: "adv-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
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

  @ViewChild(DialogComponent, {static: false})
  settingsDialog: DialogComponent | undefined;

  settingsSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  ngAfterViewInit(): void {
    this.settingsSubject$?.subscribe(state => {
      if (state) this.settingsDialog?.openDialog();
      else this.settingsDialog?.closeDialog();
    });
  }

  constructor(private themeService: ThemeSwitcherService) {
    console.log(themeService.getActiveTheme);
  }

  public openSettings = () => {
    this.settingsSubject$.next(true);
  };

  public closeSettings = () => {
    this.settingsSubject$.next(false);
  };

  public toggleTheme() {
    const newTheme = this.themeService.getActiveTheme === Theme.Light ? Theme.Dark : Theme.Light;
    this.themeService.setTheme(newTheme);
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
      label: "WIP",
      hidden: true,
    },
    {
      label: "Settings",
      action: this.openSettings,
    }
  ];
}
