const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

/*

1.convertHandler should correctly read a whole number input.
2.convertHandler should correctly read a decimal number input.
3.convertHandler should correctly read a fractional input.
4.convertHandler should correctly read a fractional input with a decimal.
5.convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
6.convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
7.convertHandler should correctly read each valid input unit.
8.convertHandler should correctly return an error for an invalid input unit.
9.convertHandler should return the correct return unit for each valid input unit.
10.convertHandler should correctly return the spelled-out string unit for each valid input unit.
11.convertHandler should correctly convert gal to L.
12.convertHandler should correctly convert L to gal.
13.convertHandler should correctly convert mi to km.
14.convertHandler should correctly convert km to mi.
15.convertHandler should correctly convert lbs to kg.
16.convertHandler should correctly convert kg to lbs.

*/

suite("Unit Tests", function () {
  // #1
  test("convertHandler should correctly read a whole number input.", function (done) {
    let input = "32km";
    let expected = 32;
    let actual = convertHandler.getNum(input);
    assert.equal(actual, expected);
    done();
  });

  // #2
  test("convertHandler should correctly read a decimal number input.", function (done) {
    let input = "3.2km";
    let expected = 3.2;
    let actual = convertHandler.getNum(input);
    assert.equal(actual, expected);
    done();
  });

  // #3
  test("convertHandler should correctly read a fractional input.", function (done) {
    let input = "3/2km";
    let expected = "1.5";
    let actual = convertHandler.getNum(input);
    assert.equal(actual, expected);
    done();
  });

  // #4
  test("convertHandler should correctly read a fractional input with a decimal.", function (done) {
    let input = "3/2.5km";
    let expected = "1.2";
    let actual = convertHandler.getNum(input);
    assert.equal(actual, expected);
    done();
  });

  // #5
  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", function (done) {
    let input = "3/2/3km";
    let expected = "invalid number";
    let actual = convertHandler.getNum(input);
    assert.equal(actual, expected);
    done();
  });

  // #6
  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", function (done) {
    let input = "km";
    let expected = "1";
    let actual = convertHandler.getNum(input);
    assert.equal(actual, expected);
    done();
  });

  // #7
  test("convertHandler should correctly read each valid input unit.", function (done) {
    let input = "32L";
    let expected = "L";
    let actual = convertHandler.getUnit(input);
    assert.equal(actual, expected);
    done();
  });

  // #8
  test("convertHandler should correctly return an error for an invalid input unit.", function (done) {
    let input = "32g";
    let expected = "invalid unit";
    let actual = convertHandler.getUnit(input);
    assert.equal(actual, expected);
    done();
  });

  // #9
  test("convertHandler should return the correct return unit for each valid input unit.", function (done) {
    const inputUnits = ["gal", "l", "mi", "km", "lbs", "kg"];
    const expectedReturnUnits = ["L", "gal", "km", "mi", "kg", "lbs"];

    inputUnits.forEach((unit, index) => {
      const result = convertHandler.getReturnUnit(convertHandler.getUnit(unit));
      assert.strictEqual(
        result,
        expectedReturnUnits[index]
      );
    });

    done();
  });

  // #10
  test("convertHandler should correctly display the spelled-out string unit for each valid input unit.", function (done) {
    const inputUnits = ["gal", "l", "mi", "km", "lbs", "kg"];
    const expectedReturnUnits = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"];

    inputUnits.forEach((unit, index) => {
      const result = convertHandler.spellOutUnit(convertHandler.getUnit(unit));
      assert.strictEqual(
        result,
        expectedReturnUnits[index]
      );
    });

    done();
  });

  // #11
  test("convertHandler should correctly convert gal to L.", function (done) {
    let input = "32gal";
    let expected = "L";
    let actual = convertHandler.getReturnUnit(convertHandler.getUnit(input));
    assert.equal(actual, expected);
    done();
  });

  // #12
  test("convertHandler should correctly convert L to gal.", function (done) {
    let input = "32L";
    let expected = "gal";
    let actual = convertHandler.getReturnUnit(convertHandler.getUnit(input));
    assert.equal(actual, expected);
    done();
  });

  // #13
  test("convertHandler should correctly convert mi to km.", function (done) {
    let input = "32mi";
    let expected = "km";
    let actual = convertHandler.getReturnUnit(convertHandler.getUnit(input));
    assert.equal(actual, expected);
    done();
  });

  // #14
  test("convertHandler should correctly convert km to mi.", function (done) {
    let input = "32km";
    let expected = "mi";
    let actual = convertHandler.getReturnUnit(convertHandler.getUnit(input));
    assert.equal(actual, expected);
    done();
  });

  // #15
  test("convertHandler should correctly convert lbs to kg.", function (done) {
    let input = "32lbs";
    let expected = "kg";
    let actual = convertHandler.getReturnUnit(convertHandler.getUnit(input));
    assert.equal(actual, expected);
    done();
  });

  // #16
  test("convertHandler should correctly convert kg to lbs.", function (done) {
    let input = "32kg";
    let expected = "lbs";
    let actual = convertHandler.getReturnUnit(convertHandler.getUnit(input));
    assert.equal(actual, expected);
    done();
  });
});
