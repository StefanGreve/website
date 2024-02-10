import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { TitleDirective } from "src/app/directives/inputs/title.directive";
import { State } from "src/app/enums/state";
import { Button } from "src/app/interfaces/button";
import { v4 as uuid } from "uuid";

@Component({
  selector: "adv-alert",
  standalone: true,
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.scss",
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  hostDirectives: [
    {
      directive: TitleDirective,
      inputs: ["title"],
    },
  ]
})
export class AlertComponent implements OnInit {
  public readonly id: string = `adv__alert__${uuid()}`;
  private readonly alertClass = "adv-alert-open";
  public State = State;
  public hidden: boolean = true;

  // directive inputs
  public title: string | undefined;

  @Input()
  public content?: string;

  @Input()
  public actions?: Button[];

  // eslint-disable-next-line no-unused-vars
  constructor(private titleDirective: TitleDirective) { }

  ngOnInit(): void {
    this.title = this.titleDirective.title;

    // if there are only two buttons, then the primary button should be placed
    // on the right-hand side
    if (this.actions?.length === 2) {
        this.actions?.reverse();
    }
  }

  public open() {
    console.log("opening alert");
    this.hidden = false;
    document.body.classList.add(this.alertClass);
  }

  public close() {
    console.log("closing alert");
    this.hidden = true;
    document.body.classList.remove(this.alertClass);
  }
}
