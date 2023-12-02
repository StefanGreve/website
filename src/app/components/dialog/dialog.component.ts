import { Component, ViewEncapsulation } from '@angular/core';
import { v4 as uuid } from "uuid";


@Component({
  selector: 'adv-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {
  public readonly id!: string;

  constructor() {
    this.id = `dialog__${uuid()}`;
  }

  public openDialog() {
    const dialog = document.getElementById(this.id) as HTMLDialogElement;
    dialog?.showModal();
    document.body.style.filter = "blur(4px)";
  }

  public closeDialog() {
    const dialog = document.getElementById(this.id) as HTMLDialogElement;
    dialog?.close();
    document.body.style.filter = "unset";
  }
}
