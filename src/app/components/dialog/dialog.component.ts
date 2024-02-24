import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { v4 as uuid } from "uuid";
import { OverlayComponent } from "../overlay/overlay.component";

@Component({
  selector: "adv-dialog",
  standalone: true,
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, OverlayComponent]
})
export class DialogComponent {
  // public fields
  public readonly id: string = `adv__dialog__${uuid()}`;
  public hidden: boolean = true;

  public open(): void {
    console.debug(`[${this.id}] Opening dialog`);
    this.hidden = false;
  }

  public close(): void {
    console.debug(`[${this.id}] Closing dialog`);
    this.hidden = true;
  }
}
