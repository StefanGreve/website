import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { NavigationItem } from "../../../interfaces/navigation-item";

@Component({
  selector: "adv-navigation",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.scss",
})
export class NavigationComponent {
  @Input() items: NavigationItem[] | undefined;
}
