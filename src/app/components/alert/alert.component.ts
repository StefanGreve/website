import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { TitleDirective } from "src/app/directives/inputs/title.directive";
import { State } from "src/app/enums/state";
import { Button } from "src/app/interfaces/button";
import { v4 as uuid } from "uuid";
import { OverlayComponent } from "../overlay/overlay.component";

@Component({
  selector: "adv-alert",
  standalone: true,
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.scss",
  imports: [CommonModule, OverlayComponent],
  hostDirectives: [
    {
      directive: TitleDirective,
      inputs: ["title"],
    },
  ]
})
export class AlertComponent implements OnInit {
  // dependency injection
  private titleDirective = inject(TitleDirective);

  // directive inputs
  public title: string | undefined;

  @Input()
  public content: string | undefined;

  @Input({ required: true })
  public actions!: Button[];

  // public fields
  public readonly id: string = `adv__alert__${uuid()}`;
  public hidden: boolean = true;
  public State = State;

  ngOnInit(): void {
    this.title = this.titleDirective.title;

    // if there are only two buttons, then the primary button should be placed
    // on the right-hand side
    if (this.actions.length === 2) {
        this.actions.reverse();
    }
  }

  public open() {
    console.debug(`[${this.id}] Opening alert`);
    this.hidden = false;

  }

  public close() {
    console.debug(`[${this.id}] Closing alert`);
    this.hidden = true;
  }
}
