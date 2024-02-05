import { Item } from "src/app/interfaces/item";
import { DropPipe } from "./drop.pipe";

describe("App.Pipes.DropPipe", () => {
  let pipe: DropPipe;
  let array: Array<Item>;

  beforeEach(() => {
    pipe = new DropPipe();
    array = [
      {
        label: "Item 1",
        disabled: true,
      },
      {
        label: "Item 2",
        hidden: true,
      },
      {
        label: "Item 3",
      },
      {
        label: undefined,
      },
      {
        label: "Item 5",
        disabled: undefined,
      },
    ];
  });

  it("should create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return an empty array in response to an undefined source", () => {
    const result = pipe.transform(undefined, "label").map((i) => i.label);
    const expected = new Array<string>();

    expect(result).toEqual(expected);
  });

  it("should remove elements from source by property name", () => {
    const result = pipe.transform(array, "disabled");
    const expected = 4;

    expect(result.length).toEqual(expected);
  });
});

