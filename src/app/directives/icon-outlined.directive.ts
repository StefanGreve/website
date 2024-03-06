import { Directive } from "@angular/core";
import { provideIcons } from "@ng-icons/core";
import { matKeyboardArrowDownOutline } from "@ng-icons/material-icons/outline";
import { IconDefinition } from "../interfaces/icon-definition";

@Directive({
  standalone: true,
  providers: [
    provideIcons({
      matKeyboardArrowDownOutline
    })
  ],
})
export class IconOutlineDirective {
  public readonly ICONS = {
    ArrowDown: "matKeyboardArrowDownOutline",
  } as IconDefinition;
}
