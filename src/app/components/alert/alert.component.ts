import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { State } from "src/app/enums/state";
import { Button } from "src/app/interfaces/button";
import { v4 as uuid } from "uuid";

@Component({
  selector: "adv-alert",
  standalone: true,
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.scss",
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule]
})
export class AlertComponent implements OnInit {
  public readonly id: string = `adv__alert__${uuid()}`;
  public State = State;
  public visible: boolean = false;

  @Input()
  public title: string = "Alert";

  @HostBinding("attr.title")
  get getTitle(): null {
    return null;
  }

  @Input()
  public content?: string;

  @Input()
  public actions?: Button[];

  public open() {
    console.log("opening alert");
    this.visible = true;
    document.body.classList.add("adv-alert-open");
  }

  public close() {
    console.log("closing alert");
    this.visible = false;
    document.body.classList.remove("adv-alert-open");
  }

  ngOnInit(): void {
    // if there are only two buttons, then the primary button should be placed
    // on the right-hand side
    if (this.actions?.length === 2) {
        this.actions?.reverse();
    }
  }
}
