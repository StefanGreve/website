import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Button } from "src/app/interfaces/button";
import { v4 as uuid } from "uuid";

@Component({
  selector: "adv-action-sheet",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./action-sheet.component.html",
  styleUrl: "./action-sheet.component.scss",
})
export class ActionSheetComponent {
  public readonly id: string = `adv__action_sheet__${uuid()}`;
  public hidden: boolean = true;

  @Input()
  public actions: Button[] | undefined;

  public open() {
    console.trace(`[${this.id}] Opening action sheet`);
    this.hidden = false;
  }

  public close() {
    console.trace(`[${this.id}] Closing action sheet`);
    this.hidden = true;
  }
}
