import { ThemeSwitcherService } from "./services/theme-switcher.service";

export function appInitializerFactory(themeSwitcherService: ThemeSwitcherService) {
  return async () => {
    console.debug("Initialize theme");
    themeSwitcherService.initialize();
  };
}
