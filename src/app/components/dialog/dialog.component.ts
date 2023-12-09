import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'adv-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule]
})
export class DialogComponent {
  public visible: boolean = false;

  public openDialog(): void {
    this.visible = true;
  }

  public closeDialog(): void {
    this.visible = false;
  }
}
