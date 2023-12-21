import { Injectable } from "@angular/core";
import { darkTheme } from "../data/darkTheme";
import { lightTheme } from "../data/lightTheme";
import { Theme } from "../enums/theme";
import { ThemeDefinition } from "../interfaces/theme";

@Injectable({
  providedIn: "root"
})
export class ThemeSwitcherService {
  public readonly localStorageKey = "theme";
  private readonly fallbackTheme = "Light";

  constructor() {
    const cachedTheme = localStorage.getItem(this.localStorageKey) || this.fallbackTheme;
    const activeTheme = Theme[cachedTheme as keyof typeof Theme];
    this.setTheme(activeTheme);
  }

  private setIcon(theme: Theme): void {
    const prevTheme = theme === Theme.Light ? "dark" : "light";
    const activeTheme = theme === Theme.Light ? "light" : "dark";

    document.head.querySelectorAll<HTMLLinkElement>(`link[rel$="icon"]`).forEach(link => {
      link.setAttribute("href", link.href.replace(prevTheme, activeTheme));
    });
  }

  private createTheme(themeDefinition: ThemeDefinition): void {
    Object.keys(themeDefinition).forEach(key => {
      // Custom CSS properties (variables) require a double hyphen as leading
      // characters. By convention, TypeScript properties use camelCase which
      // we also replace here with a single hyphen character as a word separator
      const variable = `--${key.split(/(?=[A-Z])/).join("-").toLowerCase()}`;
      document.documentElement.style.setProperty(variable, themeDefinition[key]);
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
    const activeTheme: string = localStorage.getItem(this.localStorageKey) || this.fallbackTheme;
    return Theme[activeTheme as keyof typeof Theme];
  }

  get getPreferredBrowserTheme(): Theme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light;
  }
}
