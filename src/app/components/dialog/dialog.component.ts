import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { v4 as uuid } from "uuid";

@Component({
  selector: "adv-dialog",
  standalone: true,
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule]
})
export class DialogComponent {
  public readonly id: string = `adv__dialog__${uuid()}`;
  public hidden: boolean = true;

  public open(): void {
    console.trace(`[${this.id}] Opening dialog`);
    this.hidden = false;
  }

  public close(): void {
    console.trace(`[${this.id}] Closing dialog`);
    this.hidden = true;
  }
}
