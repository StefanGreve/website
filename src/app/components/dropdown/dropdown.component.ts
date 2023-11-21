import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from 'src/app/enums/icon';
import { Item } from 'src/app/interfaces/item';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'adv-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements OnInit {
  public id!: string;
  public icon!: string;
  public selectedOption?: string;

  @Input()
  public options!: Array<Item>;

  @Input()
  public hidden?: boolean;

  @Input()
  public disabled?: boolean;

  @Output()
  public changeOption: EventEmitter<string> = new EventEmitter();

  public ngOnInit(): void {
    this.id = `dropdown__${uuid()}`;
    this.icon = Icon.getId(Icon.ArrowDown, true);
    this.selectedOption = this.options[0].label;
  }

  public selectOption(event: Event) {
    const target = event.target as HTMLLIElement;
    this.selectedOption = target.innerHTML;
    this.changeOption.emit(this.selectedOption);
  }
}
