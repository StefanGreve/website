import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "adv-overlay",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./overlay.component.html",
  styleUrl: "./overlay.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class OverlayComponent {
  @Input()
  public visible: boolean = false;
}
