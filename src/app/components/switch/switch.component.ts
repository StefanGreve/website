import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuid } from "uuid";


@Component({
  selector: 'adv-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  standalone: true,
})
export class SwitchComponent implements OnInit {
  public id!: string;

  @Input()
  public checked?: boolean;

  @Input()
  public disabled?: boolean;

  @Input()
  public hidden?: boolean;

  public ngOnInit(): void {
    this.id = `switch__${uuid()}`;
  }
}
