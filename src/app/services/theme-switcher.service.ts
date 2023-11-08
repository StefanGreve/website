import { Injectable } from '@angular/core';
import { ThemeDefinition } from '../interfaces/theme';
import { darkTheme } from '../data/darkTheme';
import { lightTheme } from '../data/lightTheme';
import { Theme } from '../enums/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {
  public readonly localStorageKey = "theme";

  constructor() {
    const cachedTheme = localStorage.getItem(this.localStorageKey) || "Light";
    const activeTheme = Theme[cachedTheme as keyof typeof Theme];
    this.setTheme(activeTheme);
  }

  private createTheme(themeDefinition: ThemeDefinition): void {
    Object.keys(themeDefinition).forEach(key => {
      // Custom CSS properties (variables) require a double hyphen as leading
      // characters. By convention, TypeScript properties use camelCase which
      // we also replace here with a single hyphen character as a word separator
      const variable = `--${key.split(/(?=[A-Z])/).join('-').toLowerCase()}`;
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
  }

  get getActiveTheme(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }
}
