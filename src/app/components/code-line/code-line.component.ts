import { Component, Input, OnInit } from "@angular/core";
import { v4 as uuid } from "uuid";
import { Utils } from "../../lib/utils";
import { CommonModule } from "@angular/common";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matCheckOutline, matContentCopyOutline } from "@ng-icons/material-icons/outline";
import { TitleDirective } from "src/app/directives/inputs/title.directive";

@Component({
  selector: "adv-code-line",
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: "./code-line.component.html",
  styleUrls: ["./code-line.component.scss"],
  viewProviders: [provideIcons({ matCheckOutline, matContentCopyOutline })],
  hostDirectives: [
    {
      directive: TitleDirective,
      inputs: ["title"],
    }
  ]
})
export class CodeLineComponent implements OnInit {
  public readonly DEFAULT_ICON: string = "matContentCopyOutline";
  public readonly ACTIVE_ICON: string = "matCheckOutline";
  public readonly id: string = `adv__code__${uuid()}`;
  public readonly buttonActiveClass = "active";
  public icon: string = this.DEFAULT_ICON;

  // directive inputs
  public title: string | undefined;

  @Input()
  code?: string;

  // eslint-disable-next-line no-unused-vars
  constructor(private titleDirective: TitleDirective) { }

  ngOnInit(): void {
    this.title = this.titleDirective.title;
  }

  onClickCopy(): void {
    const button  = document.getElementById(this.id);

    // copy code to clipboard and update icon
    navigator.clipboard.writeText(this.code ?? "");
    this.icon = this.ACTIVE_ICON;
    button?.classList.add(this.buttonActiveClass);

    // then reset the icon after a while
    Utils.delay(2000).then(() => {
      this.icon = this.DEFAULT_ICON;
      button?.classList.remove(this.buttonActiveClass);
    });
  }
}
