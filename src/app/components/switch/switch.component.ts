import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
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
    }
  ]
})
export class SwitchComponent implements OnInit {
  public id: string = `adv__switch__${uuid()}`;

  // directive inputs
  public hidden: boolean | undefined;
  public disabled: boolean | undefined;

  // eslint-disable-next-line no-unused-vars
  constructor(public hiddenDirective: HiddenDirective, public disabledDirective: DisabledDirective) { }

  ngOnInit(): void {
    this.hidden = this.hiddenDirective.hidden;
    this.disabled = this.disabledDirective.disabled;
  }

  @Input()
  public checked: boolean = false;
}
