import { Injectable, inject } from "@angular/core";
import { darkTheme } from "../data/darkTheme";
import { lightTheme } from "../data/lightTheme";
import { Theme } from "../enums/theme";
import { ThemeDefinition } from "../interfaces/theme";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class ThemeSwitcherService {
  // dependency injection
  private document = inject(DOCUMENT);

  // public fields
  public readonly localStorageKey = "theme";

  public initialize() {
    const theme = this.getActiveTheme;
    this.setTheme(theme);
  }

  private setIcon(theme: Theme): void {
    const prevTheme = (theme === Theme.Light) ? "dark" : "light";
    const activeTheme = Theme[theme].toLowerCase();

    this.document.head.querySelectorAll<HTMLLinkElement>(`link[rel$="icon"]`).forEach(link => {
      link.setAttribute("href", link.href.replace(prevTheme, activeTheme));
    });
  }

  private createTheme(themeDefinition: ThemeDefinition): void {
    const style = this.document.body.style;

    Object.keys(themeDefinition).forEach(key => {
      // Custom CSS properties (variables) require a double hyphen as leading
      // characters. By convention, TypeScript properties use camelCase which
      // we also replace here with a single hyphen character as a word separator
      const variable = `--${key.split(/(?=[A-Z])/).join("-").toLowerCase()}`;
      style.setProperty(variable, themeDefinition[key]);
    });
  }

  public setTheme(theme: Theme): void {
    switch (theme) {
      default:
      case Theme.Light:
        this.createTheme(lightTheme);
        break;
      case Theme.Dark:
        this.createTheme(darkTheme);
        break;
    }

    localStorage.setItem(this.localStorageKey, Theme[theme]);
    this.setIcon(theme);
  }

  get getActiveTheme(): Theme {
    const activeTheme: string = localStorage.getItem(this.localStorageKey) || Theme[this.getPreferredBrowserTheme];
    return Theme[activeTheme as keyof typeof Theme];
  }

  get getPreferredBrowserTheme(): Theme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light;
  }
}
