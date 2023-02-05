const Manager = require("../lib/manager");

describe("Manager", () => {
  test("can be instantiated with the correct properties", () => {
    const manager = new Manager("Frank Reynolds", 2, "rumham@gmail.com", 8);

    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  test("has the correct role", () => {
    const manager = new Manager("Frank Reynolds", 2, "rumham@gmail.com");

    expect(manager.getRole()).toEqual("Manager");
  });
});