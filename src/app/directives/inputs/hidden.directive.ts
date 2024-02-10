import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[hidden]",
  standalone: true,
})
export class HiddenDirective {
  @Input()
  public hidden: boolean | undefined = undefined;

  @HostBinding("attr.hidden")
  protected get nativeHidden(): true | null {
    return this.hidden ? true : null;
  }
}
