const Engineer = require("../lib/engineer");

describe("Engineer class tests", () => {
    test("creates an Engineer object", () => {
      const engineer = new Engineer("Frank Reynolds", 123, "rumham@gmail.com", "frankr");
      expect(engineer.github).toEqual(expect.any(String));
    });

    test("returns the employee's role as Engineer", () => {
      const engineer = new Engineer("Frank Reynolds", 123, "rumham@gmail.com", "frankr");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });