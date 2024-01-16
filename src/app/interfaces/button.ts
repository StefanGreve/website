import { State } from "../enums/state";
import { Item } from "./item";

export interface Button extends Item {
  action?: () => void;
  state?: State;
}
