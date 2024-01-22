import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { State } from "src/app/enums/state";
import { Button } from "src/app/interfaces/button";
import {v4 as uuid } from "uuid";

@Component({
  selector: "adv-alert",
  standalone: true,
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.scss",
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule]
})
export class AlertComponent implements OnInit {
  public id!: string;
  public State = State;
  public visible: boolean = true; // false

  @Input()
  public title!: string;

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
    this.id = `alert__${uuid()}`;
    this.title ??= "Alert";
    // line added for testing purposes temporarily
    document.body.classList.add("adv-alert-open");
  }
}
