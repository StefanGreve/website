import { Item } from "../interfaces/item";

export default class Enumerable {
  constructor(private items: Item[]) {
    this.items = items.filter(i => !i.hidden);
  }

  public sort(): Item[] {
    return this.items.sort((a, b) => a.label.localeCompare(b.label));
  }
}
