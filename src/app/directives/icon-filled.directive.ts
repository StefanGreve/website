import { Directive } from "@angular/core";
import { provideIcons } from "@ng-icons/core";
import { matKeyboardArrowDownRound } from "@ng-icons/material-icons/round";
import { IconDefinition } from "../interfaces/icon-definition";

@Directive({
  standalone: true,
  providers: [
    provideIcons({
      matKeyboardArrowDownRound
    })
  ],
})
export class IconFilledDirective {
  public readonly ICONS = {
    ArrowDown: "matKeyboardArrowDownRound",
  } as IconDefinition;
}
