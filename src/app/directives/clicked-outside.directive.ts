import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from "@angular/core";

@Directive({
  selector: "[advClickOutside]",
  standalone: true
})
export class ClickedOutsideDirective {
  private elementRef = inject(ElementRef);

  @Output() public clickedOutside = new EventEmitter();

  @HostListener("document:click", ["$event.target"])
  public onClick(target: never): void {
    const clickedOutside = this.elementRef.nativeElement.contains(target);

    if (!clickedOutside) {
      this.clickedOutside.emit(target);
    }
  }
}
