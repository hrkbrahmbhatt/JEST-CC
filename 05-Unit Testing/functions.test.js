const functions = require("./functions");

test("Adds 2 + 2 is equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//toEqual for Object or Array
test("User Should be HRK Rao object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "HRK",
    lastName: "Rao",
  });
});

//Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(16000);
});

//Arrays
test("Admin Should be in usernames", () => {
  usernames = ["john", "david", "admin"];
  expect(usernames).toContain("admin");
});
