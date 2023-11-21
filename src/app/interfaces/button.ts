import { Item } from "./item";

export interface Button extends Item {
  action?: () => void;
}
