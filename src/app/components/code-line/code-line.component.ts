import { Component, Input } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Utils } from "../../lib/utils";
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matCheckOutline, matContentCopyOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'adv-code-line',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './code-line.component.html',
  styleUrls: ['./code-line.component.scss'],
  viewProviders: [provideIcons({ matCheckOutline, matContentCopyOutline })]
})
export class CodeLineComponent {
  public readonly DEFAULT_ICON: string = "matContentCopyOutline";
  public readonly ACTIVE_ICON: string = "matCheckOutline";

  public readonly id: string;
  public icon!: string;

  @Input()
  code?: string;

  @Input()
  title: string | undefined;


  constructor() {
    this.id = `code__${uuid()}`
    this.icon = this.DEFAULT_ICON;
  }

  onClickCopy() {
    let button  = document.getElementById(this.id);

    // copy code to clipboard and update icon
    navigator.clipboard.writeText(this.code ?? "");
    this.icon = this.ACTIVE_ICON;
    button?.classList.add("active");

    // then reset the icon after a while
    Utils.delay(2000).then(() => {
      this.icon = this.DEFAULT_ICON;
      button?.classList.remove("active");
    });
  }
}
