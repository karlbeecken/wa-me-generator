const waMe = require("./index");

describe("Create a wa.me link from a phone number", () => {
  test("it should filter weird chars from the phone number input", () => {
    const input = "+49 (30) 82-56/123 99";
    const output = "https://wa.me/4930825612399";
    expect(waMe.createFromNumber(input)).toEqual(output);
  });
});

describe("Create a wa.me link from a phone number with a pre-filled message", () => {
  test("it should filter weird chars from the phone number input", () => {
    const number = "+49 (30) 82-56/123 99";
    const message = "";
    const output = "https://api.whatsapp.com/send/?phone=4930825612399&text=";
    expect(waMe.createFromNumberWithMessage(number, message)).toEqual(output);
  });
  test("it should URL-encode the pre-filled message", () => {
    const number = "+49 (30) 82-56/123 99";
    const message = "❤✊😉";
    const output =
      "https://api.whatsapp.com/send/?phone=4930825612399&text=%E2%9D%A4%E2%9C%8A%F0%9F%98%89";
    expect(waMe.createFromNumberWithMessage(number, message)).toEqual(output);
  });
});
