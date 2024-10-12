import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "drop",
  standalone: true,
})
export class DropPipe implements PipeTransform {
  transform<T>(source: T[] | undefined, key: keyof T): T[] {
    if (source === undefined) return [];

    return source.filter(a => a[key] === undefined || a[key] === false);
  }
}
