import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "src/app/interfaces/item";
import { v4 as uuid } from "uuid";
import { NgIconComponent } from "@ng-icons/core";
import { ClickedOutsideDirective } from "src/app/directives/clicked-outside.directive";
import { HiddenDirective } from "src/app/directives/inputs/hidden.directive";
import { DisabledDirective } from "src/app/directives/inputs/disabled.directive";
import { IconOutlineDirective } from "src/app/directives/icon-outlined.directive";

@Component({
  selector: "adv-dropdown",
  standalone: true,
  imports: [CommonModule, NgIconComponent, ClickedOutsideDirective],
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss",
  hostDirectives: [
    {
      directive: IconOutlineDirective,
    },
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
  // dependency injection
  private hiddenDirective = inject(HiddenDirective);
  private disabledDirective = inject(DisabledDirective);
  private iconOutlineDirective = inject(IconOutlineDirective);

  // directive inputs
  public hidden: boolean | undefined;
  public disabled: boolean | undefined;

  @Input({ required: true })
  public options!: Item[];

  @Output()
  public changeOption: EventEmitter<string> = new EventEmitter();

  // public fields
  public readonly id: string = `adv__dropdown__${uuid()}`;
  public readonly icon: string = this.iconOutlineDirective.ICONS.ArrowDown;
  public selectedOption: string | undefined;
  public isOpened = false;

  public ngOnInit(): void {
    this.selectedOption = this.options.at(0)?.label;
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
