import { DropPipe } from "./drop.pipe";

describe("DropPipe", () => {
  const pipe = new DropPipe();

  it("should create a new instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return an empty array when source is undefined", () => {
    expect(pipe.transform(undefined, "disabled")).toEqual([]);
  });

  it("should filter out objects where the specified key is undefined or false", () => {
    const source = [
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
        disabled: false,
      },
      {
        label: "Item 6",
        disabled: undefined,
      },
    ];

    const results = pipe.transform(source, "disabled");
    const expected = 5;

    expect(results.length).toEqual(expected);
  });
});
