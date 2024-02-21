import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[title]",
  standalone: true,
})
export class TitleDirective {
  @Input()
  public title = "";

  @HostBinding("attr.title")
  protected get nativeTitle(): null {
    return null;
  }
}
