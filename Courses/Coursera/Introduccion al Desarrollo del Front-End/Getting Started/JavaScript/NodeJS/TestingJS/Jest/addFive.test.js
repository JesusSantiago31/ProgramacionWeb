const {default: TestRunner} = require("jest-runner");
const addFive = require("./addFive");

test('retuns the number plus five', () =>{
    expect(addFive(1)).toBe(6);
})