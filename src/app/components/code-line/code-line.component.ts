import { Component, Input } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Utils } from "../../lib/utils";

@Component({
  selector: 'adv-code-line',
  templateUrl: './code-line.component.html',
  styleUrls: ['./code-line.component.scss']
})
export class CodeLineComponent {
  @Input()
  code: string = "";

  @Input()
  title: string | undefined;

  public readonly id: string;

  constructor() {
    this.id = `code__${uuid()}`
  }

  onClickCopy() {
    let button  = document.getElementById(this.id);
    let use = document.querySelectorAll(`#${this.id} > svg > use`).item(0);

    // copy code to clipboard and update icon
    navigator.clipboard.writeText(this.code);
    use.setAttribute("href", "#check-icon");
    button?.classList.add("active");

    // then reset the icon after a while
    Utils.delay(2000).then(function() {
      use.setAttribute("href", "#copy-icon");
      button?.classList.remove("active");
    });
  }
}
