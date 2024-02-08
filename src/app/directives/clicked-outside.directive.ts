import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from "@angular/core";

@Directive({
  selector: "[clickOutside]",
  standalone: true
})
export class ClickedOutsideDirective<T> {
  private elementRef = inject(ElementRef);

  @Output() public clickedOutside = new EventEmitter<T>();

  @HostListener("document:click", ["$event.target"])
  public onClick(target: T): void {
    const clickedOutside = this.elementRef.nativeElement.contains(target);

    if (!clickedOutside) {
      this.clickedOutside.emit(target);
    }
  }
}
