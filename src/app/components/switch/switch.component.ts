import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
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
  public id: string = `adv__switch__${uuid()}`;

  // directive inputs
  public hidden: boolean | undefined;
  public disabled: boolean | undefined;
  public checked: boolean | undefined;

  // eslint-disable-next-line no-unused-vars
  constructor(private hiddenDirective: HiddenDirective, private disabledDirective: DisabledDirective, private checkedDirective: CheckedDirective) { }

  ngOnInit(): void {
    this.hidden = this.hiddenDirective.hidden;
    this.disabled = this.disabledDirective.disabled;
    this.checked = this.checkedDirective.checked;
  }
}
