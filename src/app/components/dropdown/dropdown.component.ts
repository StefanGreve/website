import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icon } from 'src/app/enums/icon';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'adv-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements OnInit {
  public id!: string;
  public icon!: string;
  public selectedOption: string | undefined;

  @Input()
  public options!: Array<string>;

  @Output()
  public changeOption: EventEmitter<string> = new EventEmitter();

  public ngOnInit(): void {
    this.id = `dropdown__${uuid()}`;
    this.icon = Icon.getId(Icon.ArrowDown, true);
    this.selectedOption = this.options[0];
  }

  public selectOption(event: Event) {
    const target = event.target as HTMLLIElement;
    this.selectedOption = target.innerHTML;
    this.changeOption.emit(this.selectedOption);
  }
}
