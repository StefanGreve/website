import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "drop",
  standalone: true,
})
export class DropPipe implements PipeTransform {
  public transform<T>(source: T[] | undefined, key: keyof T) {
    if (source === undefined) return [];

    return source.filter((a: T) => a[key] === undefined || a[key] === false);
  }
}
