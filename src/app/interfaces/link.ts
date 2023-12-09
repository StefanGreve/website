import { Item } from "./item";

export interface Link extends Item {
  href?: string;
  external?: boolean;
}
