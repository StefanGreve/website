import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Button } from "src/app/interfaces/button";
import { v4 as uuid } from "uuid";
import { State } from "src/app/enums/state";

@Component({
  selector: "adv-action-sheet",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./action-sheet.component.html",
  styleUrl: "./action-sheet.component.scss",
})
export class ActionSheetComponent implements OnInit {
  public readonly id: string = `adv__action_sheet__${uuid()}`;
  public State = State;

  public readonly cancel: Button = {
    label: "Cancel",
    action: this.close,
    state: State.Info,
  };

  public hidden: boolean = true;

  @Input({ required: true })
  public actions!: Button[];

  ngOnInit(): void {
    this.actions.reverse();
    this.actions.push(this.cancel);
  }

  public open() {
    console.trace(`[${this.id}] Opening action sheet`);
    this.hidden = false;
  }

  public close() {
    console.trace(`[${this.id}] Closing action sheet`);
    this.hidden = true;
  }
}
