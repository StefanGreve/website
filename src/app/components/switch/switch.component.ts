import { Component, Input } from "@angular/core";
import { v4 as uuid } from "uuid";


@Component({
  selector: "adv-switch",
  templateUrl: "./switch.component.html",
  styleUrl: "./switch.component.scss",
  standalone: true,
})
export class SwitchComponent {
  public id: string = `adv__switch__${uuid()}`;

  @Input()
  public checked: boolean = false;

  @Input()
  public disabled: boolean = false;

  @Input()
  public hidden: boolean = false;
}
