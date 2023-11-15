import { Component, Input } from '@angular/core';
import { v4 as uuid } from "uuid";


@Component({
  selector: 'adv-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  public readonly id: string;

  @Input()
  checked?: boolean;

  @Input()
  disabled?: boolean;

  @Input()
  hidden?: boolean;

  constructor() {
    this.id = `switch__${uuid()}`;
  }
}
