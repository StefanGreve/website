import { Component, Input, OnInit } from "@angular/core";
import { State } from "src/app/enums/state";
import { Button } from "src/app/interfaces/button";
import {v4 as uuid } from "uuid";

@Component({
  selector: "adv-alert",
  standalone: true,
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.scss"
})
export class AlertComponent implements OnInit {
  public id!: string;
  public State = State;

  @Input()
  public title!: string;

  @Input()
  public content?: string;

  @Input()
  public actions?: Button[];

  public open() {
    console.log("opening alert");
  }

  public close() {
    console.log("closing alert");
  }

  ngOnInit(): void {
    this.id = `alert__${uuid()}`;
    this.title ??= "Alert";
  }
}
