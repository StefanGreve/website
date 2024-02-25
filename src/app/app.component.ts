import { Component, OnInit, ViewChild, inject } from "@angular/core";
import { DialogComponent } from "./components/dialog/dialog.component";
import { Theme } from "./enums/theme";
import { NavigationItem } from "./interfaces/navigation-item";
import { ThemeSwitcherService } from "./services/theme-switcher.service";
import { Item } from "./interfaces/item";
import { Button } from "./interfaces/button";
import { State } from "./enums/state";
import { AlertComponent } from "./components/alert/alert.component";
import { ActionSheetComponent } from "./components/action-sheet/action-sheet.component";

@Component({
  selector: "adv-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  // dependency injection
  private themeSwitcherService = inject(ThemeSwitcherService);

  public isDarkThemeEnabled = false;

  public languages: Item[] = [
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
  ];

  @ViewChild(AlertComponent, {static: false})
  private alert: AlertComponent | undefined;

  @ViewChild(DialogComponent, {static: false})
  private settingsDialog: DialogComponent | undefined;

  @ViewChild(ActionSheetComponent, {static: false})
  private actionSheet: ActionSheetComponent | undefined;

  ngOnInit(): void {
    this.isDarkThemeEnabled = this.themeSwitcherService.getActiveTheme === Theme.Dark;
    console.log(`Active Theme: ${Theme[this.themeSwitcherService.getActiveTheme]}`);
  }

  public openAlert = () => {
    this.alert?.open();
  };

  public closeAlert = () => {
    this.alert?.close();
  };

  public openSettings = () => {
    this.settingsDialog?.open();
  };

  public closeSettings = () => {
    this.settingsDialog?.close();
  };

  public openActionSheet = () => {
    this.actionSheet?.open();
  };

  public closeActionSheet = () => {
    this.actionSheet?.close();
  };

  public toggleTheme() {
    const newTheme = this.themeSwitcherService.getActiveTheme === Theme.Light ? Theme.Dark : Theme.Light;
    this.themeSwitcherService.setTheme(newTheme);
    this.isDarkThemeEnabled = !this.isDarkThemeEnabled;
  }

  public changeLanguage(language: string) {
    console.log(language);
  }

  public items: NavigationItem[] = [
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

  public alertActions: Button[] = [
    {
      label: "Ok",
      action: this.closeAlert,
      state: State.Info,
    },
    {
      label: "Fire Missiles",
      action: () => console.log("🔥"),
      state: State.Danger,
      disabled: true,
    },
  ];

  public actionSheetButton = {
    label: "Open ActionSheet",
    action: this.openActionSheet,
  } as Button;

  public actionSheetActions: Button[] = [
    {
      label: "Option 1",
      action: this.closeActionSheet,
    },
    {
      label: "Option 2",
      action: this.closeActionSheet,
    }
  ];
}
