import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";


@Component({
  selector: "adv-dialog",
  standalone: true,
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule]
})
export class DialogComponent {
  public visible: boolean = false;

  public open(): void {
    this.visible = true;
    document.body.classList.add("adv-dialog-open");
  }

  public close(): void {
    this.visible = false;
    document.body.classList.remove("adv-dialog-open");
  }
}
