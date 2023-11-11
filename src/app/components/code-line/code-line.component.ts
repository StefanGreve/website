import { Component, Input } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Utils } from "../../lib/utils";
import { Icon } from 'src/app/enums/icon';

@Component({
  selector: 'adv-code-line',
  templateUrl: './code-line.component.html',
  styleUrls: ['./code-line.component.scss']
})
export class CodeLineComponent {
  public readonly Icon = Icon;
  public readonly id: string;

  public readonly defaultIconId: string = Icon.getId(Icon.Copy, true);
  public readonly defaultIconLabel: string = Icon.getLabel(Icon.Copy);
  public readonly activeIconId: string = Icon.getId(Icon.CheckMark, true);
  public readonly activeIconLabel: string = Icon.getLabel(Icon.CheckMark);

  @Input()
  code: string = "";

  @Input()
  title: string | undefined;


  constructor() {
    this.id = `code__${uuid()}`
  }

  onClickCopy() {
    let button  = document.getElementById(this.id);
    let use = document.querySelectorAll(`#${this.id} > svg > use`).item(0);

    // copy code to clipboard and update icon
    navigator.clipboard.writeText(this.code);
    use.setAttribute("href", this.activeIconId);
    use.parentElement?.setAttribute("aria-label", this.activeIconLabel);
    button?.classList.add("active");

    // then reset the icon after a while
    Utils.delay(2000).then(() => {
      use.setAttribute("href", this.defaultIconId);
      use.parentElement?.setAttribute("aria-label", this.defaultIconLabel);
      button?.classList.remove("active");
    });
  }
}
