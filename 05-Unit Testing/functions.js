const functions = {
  add: (num1, num2) => num1 + num2,
  createUser: () => {
    const user = { firstName: "HRK" };
    user["lastName"] = "Rao";
    return user;
  },
};

module.exports = functions;
