const Intern = require("../lib/intern");

describe("Intern", () => {
  test("has a school property", () => {
    const intern = new Intern("Frank Reynolds", 5, "rumham@gmail.com", "Rutgers");
    expect(intern).toHaveProperty("school");
  });

  test("has a getSchool method", () => {
    const intern = new Intern("Frank Reynolds", 5, "rumham@gmail.com", "Rutgers");
    expect(intern.getSchool).toBeInstanceOf(Function);
  });

  test("getSchool returns the school", () => {
    const intern = new Intern("Frank Reynolds", 5, "rumham@gmail.com", "Rutgers");
    expect(intern.getSchool()).toEqual(intern.school);
  });

  test("getRole returns the role", () => {
    const intern = new Intern("Frank Reynolds", 5, "rumham@gmail.com", "Rutgers");
    expect(intern.getRole()).toEqual("Intern");
  });
});