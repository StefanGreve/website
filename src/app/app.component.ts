import { Component } from "@angular/core";
import { NavigationComponent } from "./components/core/navigation/navigation.component";
import { NavigationItem } from "./interfaces/navigation-item";
import { DropPipe } from "./pipes/drop.pipe";

@Component({
  selector: "adv-root",
  standalone: true,
  imports: [NavigationComponent, DropPipe],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public items: NavigationItem[] = [
    {
      label: "Login",
      href: "#",
      disabled: true,
    },
    {
      label: "Archive",
      href: "https://archive.stefangreve.com/",
      external: true,
    },
    {
      label: "Alert",
      hidden: false,
    },
    {
      label: "Settings",
    },
  ];
}
