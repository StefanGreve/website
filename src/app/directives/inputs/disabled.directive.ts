import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[disabled]",
  standalone: true,
})
export class DisabledDirective {
  @Input()
  public disabled = false;

  @HostBinding("attr.disabled")
  protected get nativeDisabled(): "" | null {
    return this.disabled ? "" : null;
  }

  @HostListener("click", ["$event"])
  @HostListener("dblclick", ["$event"])
  public onClick(e: Event): void {
    if (!this.disabled) return;

    e.preventDefault();
    e.stopImmediatePropagation();
  }
}
