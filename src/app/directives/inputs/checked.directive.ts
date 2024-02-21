import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[checked]",
  standalone: true
})
export class CheckedDirective {
  @Input()
  public checked = false;

  @HostBinding("attr.checked")
  protected get nativeChecked(): "" | null {
    return this.checked ? "" : null;
  }
}
