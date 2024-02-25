import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { v4 as uuid } from "uuid";
import { State } from "src/app/enums/state";
import { Role } from "src/app/enums/role";
import { Button } from "src/app/interfaces/button";

@Component({
  selector: "adv-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss"
})
export class ButtonComponent implements OnInit {
  // dependency injection
  private document = inject(DOCUMENT);

  // public fields
  public State = State;
  public readonly id: string = `adv__button__${uuid()}`;

  @Input({required: true})
  public action!: Button;

  @Input()
  public role: Role = Role.Normal;

  ngOnInit(): void {
      // TODO: store state in color variable
      const button = this.document.getElementById(this.id);
      button?.style.setProperty("color", "blue");
  }
}
