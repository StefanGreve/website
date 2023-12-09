import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[clickedOutside]',
  standalone: true
})
export class ClickedOutsideDirective {
  private elementRef = inject(ElementRef);

  @Output() public clickedOutside = new EventEmitter();

  @HostListener("document:click", ["$event.target"])
  public onClick(target: any): void {
    const clickedOutside = this.elementRef.nativeElement.contains(target);
    if (!clickedOutside) {
      this.clickedOutside.emit(target);
    }
  }
}
