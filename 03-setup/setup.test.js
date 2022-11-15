let animals = [];

// beforeAll(() => {
//   console.log("Before All");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });

// afterEach(() => {
//   console.log("After Each");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });

// afterAll(() => {
//   console.log("After All");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });

describe("animals array", () => {
  beforeEach(() => {
    console.log("Before Each");
    animals = ["elephant", "zebra", "bear", "tiger"];
  });
  it("should add animal to end of array", () => {
    animals.push("lion");
    expect(animals[animals.length - 1]).toBe("lion");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
