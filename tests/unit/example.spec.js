const add = (a, b) => a + b;

describe("test example", function() {
  it("should add two numbers", () => {
    expect(add(2, 3)).toEqual(5);
  });
});
