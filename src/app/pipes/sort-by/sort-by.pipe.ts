import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortBy",
  standalone: true,
})
export class SortByPipe implements PipeTransform {
  public transform<T>(source: T[] | undefined, key: keyof T): T[] {
    if (source === undefined) return [];

    source.sort((a: T, b: T) => {
      if (a[key] === undefined) return -1;
      if (b[key] === undefined) return 1;

      const lhs = a[key]!.toString();
      const rhs = b[key]!.toString();

      // TODO: specify locale here
      return lhs.localeCompare(rhs, undefined, {
        sensitivity: "base",
        numeric: true,
      });
    });

    return source;
  }
}
