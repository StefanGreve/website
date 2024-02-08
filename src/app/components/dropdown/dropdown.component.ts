import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "src/app/interfaces/item";
import { v4 as uuid } from "uuid";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matKeyboardArrowDownOutline } from "@ng-icons/material-icons/outline";
import { ClickedOutsideDirective } from "src/app/directives/clicked-outside.directive";
import { HiddenDirective } from "src/app/directives/inputs/hidden.directive";
import { DisabledDirective } from "src/app/directives/inputs/disabled.directive";

@Component({
  selector: "adv-dropdown",
  standalone: true,
  imports: [CommonModule, NgIconComponent, ClickedOutsideDirective],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss",
  viewProviders: [provideIcons({ matKeyboardArrowDownOutline })],
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
export class DropdownComponent implements OnInit {
  public readonly id: string = `adv__dropdown__${uuid()}`;
  public readonly icon: string = "matKeyboardArrowDownOutline";
  public selectedOption: string | undefined;
  public isOpened = false;

  // directive inputs
  public hidden: boolean | undefined;
  public disabled: boolean | undefined;

  @Input()
  public options?: Item[];

  @Output()
  public changeOption: EventEmitter<string> = new EventEmitter();

  // eslint-disable-next-line no-unused-vars
  constructor(public hiddenDirective: HiddenDirective, public disabledDirective: DisabledDirective) { }

  public ngOnInit(): void {
    this.selectedOption = this.options?.at(0)?.label;
    this.hidden = this.hiddenDirective.hidden;
    this.disabled = this.disabledDirective.disabled;
  }

  public open(): void {
    this.isOpened = true;
  }

  public selectOption(event: Event): void {
    const target = event.target as HTMLLIElement;
    this.selectedOption = target.innerHTML;
    this.changeOption.emit(this.selectedOption);
    this.isOpened = false;
  }

  public close(): void {
    this.isOpened = false;
  }
}
