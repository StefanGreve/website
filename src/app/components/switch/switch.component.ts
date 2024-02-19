import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { CheckedDirective } from "src/app/directives/inputs/checked.directive";
import { DisabledDirective } from "src/app/directives/inputs/disabled.directive";
import { HiddenDirective } from "src/app/directives/inputs/hidden.directive";
import { v4 as uuid } from "uuid";


@Component({
  selector: "adv-switch",
  templateUrl: "./switch.component.html",
  styleUrl: "./switch.component.scss",
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [
    {
      directive: HiddenDirective,
      inputs: ["hidden"],
    },
    {
      directive: DisabledDirective,
      inputs: ["disabled"],
    },
    {
      directive: CheckedDirective,
      inputs: ["checked"],
    }
  ]
})
export class SwitchComponent implements OnInit {
  // dependency injection
  private hiddenDirective = inject(HiddenDirective);
  private disabledDirective = inject(DisabledDirective);
  private checkedDirective = inject(CheckedDirective);

  // directive inputs
  public hidden: boolean | undefined;
  public disabled: boolean | undefined;
  public checked: boolean | undefined;

  // public fields
  public id: string = `adv__switch__${uuid()}`;

  ngOnInit(): void {
    this.hidden = this.hiddenDirective.hidden;
    this.disabled = this.disabledDirective.disabled;
    this.checked = this.checkedDirective.checked;
  }
}
