import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from 'src/app/interfaces/item';
import { v4 as uuid } from "uuid";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matKeyboardArrowDownOutline } from '@ng-icons/material-icons/outline';
import { ClickedOutsideDirective } from 'src/app/directives/clicked-outside.directive';

@Component({
  selector: 'adv-dropdown',
  standalone: true,
  imports: [CommonModule, NgIconComponent, ClickedOutsideDirective],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  viewProviders: [provideIcons({ matKeyboardArrowDownOutline })]
})
export class DropdownComponent implements OnInit {
  public id!: string;
  public icon!: string;
  public selectedOption?: string;
  private dropdownButton?: HTMLButtonElement;

  @Input()
  public options?: Item[];

  @Input()
  public hidden?: boolean;

  @Input()
  public disabled?: boolean;

  @Output()
  public changeOption: EventEmitter<string> = new EventEmitter();

  public ngOnInit(): void {
    this.id = `dropdown__${uuid()}`;
    this.selectedOption = this.options?.at(0)?.label;
  }

  public openOptions(event: Event): void {
    this.dropdownButton = event.target as HTMLButtonElement;
    this.dropdownButton?.classList.toggle("active");
  }

  public selectOption(event: Event): void {
    const target = event.target as HTMLLIElement;
    this.selectedOption = target.innerHTML;
    this.changeOption.emit(this.selectedOption);
    this.dropdownButton?.classList.remove("active");
  }

  public closeDropdown(): void {
    this.dropdownButton?.classList.remove("active");
  }
}
