import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { HiddenDirective } from "src/app/directives/inputs/hidden.directive";
import { TitleDirective } from "src/app/directives/inputs/title.directive";
import { State } from "src/app/enums/state";
import { Button } from "src/app/interfaces/button";
import { v4 as uuid } from "uuid";

@Component({
  selector: "adv-alert",
  standalone: true,
  templateUrl: "./alert.component.html",
  styleUrl: "./alert.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  hostDirectives: [
    {
      directive: TitleDirective,
      inputs: ["title"],
    },
    {
      directive: HiddenDirective,
      inputs: ["hidden"],
    }
  ]
})
export class AlertComponent implements OnInit, AfterViewInit {
  public readonly id: string = `adv__alert__${uuid()}`;
  public State = State;

  // directive inputs
  public title: string | undefined;
  public hidden: boolean | undefined;

  @Input()
  public content?: string;

  @Input()
  public actions?: Button[];

  // eslint-disable-next-line no-unused-vars
  constructor(private titleDirective: TitleDirective, private hiddenDirective: HiddenDirective, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.title = this.titleDirective.title;
    this.hidden = this.hiddenDirective.hidden ?? true;

    // if there are only two buttons, then the primary button should be placed
    // on the right-hand side
    if (this.actions?.length === 2) {
        this.actions?.reverse();
    }
  }

  ngAfterViewInit(): void {
    this.ref.detectChanges();
  }

  public open() {
    console.debug(`[${this.id}] Opening alert`);
    this.hidden = false;
    this.ref.markForCheck();
  }

  public close() {
    console.debug(`[${this.id}] Closing alert`);
    this.hidden = true;

    if (!this.hiddenDirective.hidden && !this.hidden) {
      console.log("inside close if");
      this.hidden = false;
      this.ref.markForCheck();
    }
  }
}
