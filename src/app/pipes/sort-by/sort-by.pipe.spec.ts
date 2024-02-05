import { Item } from "src/app/interfaces/item";
import { SortByPipe } from "./sort-by.pipe";

describe("App.Pipes.SortByPipe", () => {
  let pipe: SortByPipe;
  let array: Array<Item>;

  beforeEach(() => {
    pipe = new SortByPipe();
    array = [
      {
        label: "Stefan",
      },
      {
        label: "Thomas",
      },
      {
        label: "Monika",
      },
      {
        label: undefined,
      },
      {
        label: "Anneliese",
      },
      {
        label: "Steven"
      }
    ];
  });

  it("should create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return an empty array in response to an undefined source", () => {
    const result = pipe.transform(undefined, "name").map((o) => o.name);
    const expected = new Array<string>();

    expect(result).toEqual(expected);
  });

  it("should sort an array of elements by property in ascending order", () => {
    const result = pipe.transform(array, "label").map((o) => o.label);
    const expected = [undefined, "Anneliese", "Monika", "Stefan", "Steven"];

    expect(result).toEqual(expected);
  });
});
