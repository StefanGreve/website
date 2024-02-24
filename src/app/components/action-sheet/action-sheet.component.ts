import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Button } from "src/app/interfaces/button";
import { v4 as uuid } from "uuid";
import { State } from "src/app/enums/state";
import { OverlayComponent } from "../overlay/overlay.component";

@Component({
  selector: "adv-action-sheet",
  standalone: true,
  imports: [CommonModule, OverlayComponent],
  templateUrl: "./action-sheet.component.html",
  styleUrl: "./action-sheet.component.scss",
})
export class ActionSheetComponent implements OnInit {
  // public fields
  public readonly id: string = `adv__action_sheet__${uuid()}`;
  public "class" = ActionSheetComponent;
  public State = State;

  public readonly cancel: Button = {
    label: "Cancel",
    action: this.close,
    state: State.Info,
  };

  public static hidden: boolean = true;

  @Input({ required: true })
  public actions!: Button[];

  ngOnInit(): void {
    this.actions.push(this.cancel);
  }

  public open() {
    console.debug(`[${this.id}] Opening action sheet`);
    ActionSheetComponent.hidden = false;
  }

  public close() {
    console.debug(`[${this.id}] Closing action sheet`);
    ActionSheetComponent.hidden = true;
  }
}
