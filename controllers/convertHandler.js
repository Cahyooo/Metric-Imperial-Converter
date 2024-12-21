function ConvertHandler() {
  const regex = /^(.*?)([a-zA-Z]{1,3})$/

  function splitMeasurement(input) {
    const match = input.match(regex);
    if (match) {
      return [match[1], match[2].toLowerCase()];
    } else {
      return ["invalid number", "invalid unit"];
    }    
  }

  function parseAndCalculate(input) {
    const regex = /^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/;
    if (regex.test(input)) {
      if (input.includes("/")) {
        const [numerator, denominator] = input.split("/").map(Number);
        if (denominator === 0) {
          return "invalid number";
        }
        return numerator / denominator;
      } else {
        return parseFloat(input);
      }
    }
    else {
      return "invalid number";
    } 
  }

  this.getNum = function (input) {
    let result = splitMeasurement(input)[0];    

    if (result === "") {
      result = 1;
    } else {
      result = parseAndCalculate(result);
    }

    return result;
  };

  this.getUnit = function (input) {
    let result = splitMeasurement(input)[1];

    if (result === "l") {
      result = "L";
    }

    // check unit
    if (result !== "gal" && result !== "lbs" && result !== "mi" && result !== "L" && result !== "kg" && result !== "km") {
      result = "invalid unit";
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let unit = initUnit.toLowerCase();

    if (unit === "gal") {
      return "L";
    } else if (unit === "lbs") {
      return "kg";
    } else if (unit === "mi") {
      return "km";
    } else if (unit === "l") {
      return "gal";
    } else if (unit === "kg") {
      return "lbs";
    } else if (unit === "km") {
      return "mi";
    } else {
      return "invalid unit";
    }
  };

  this.spellOutUnit = function (unitInput) {
    const unit = unitInput.toLowerCase();

    if (unit === "gal") {
      return "gallons";
    } else if (unit === "lbs") {
      return "pounds";
    } else if (unit === "mi") {
      return "miles";
    } else if (unit === "l") {
      return "liters";
    } else if (unit === "kg") {
      return "kilograms";
    } else if (unit === "km") {
      return "kilometers";
    }

    return unit;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const unit = initUnit.toLowerCase();

    if (unit === "gal") {
      initNum *= galToL;
    } else if (unit === "lbs") {
      initNum *= lbsToKg;
    } else if (unit === "mi") {
      initNum *= miToKm;
    } else if (unit === "l") {
      initNum /= galToL;
    } else if (unit === "kg") {
      initNum /= lbsToKg;
    } else if (unit === "km") {
      initNum /= miToKm;
    }

    return Number(initNum.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const unit = this.getReturnUnit(initUnit);

    const spellOutUnit = this.spellOutUnit(initUnit);
    const spellOutUnitConvert = this.spellOutUnit(returnUnit);

    return `${initNum} ${spellOutUnit} converts to ${returnNum} ${spellOutUnitConvert}`;
  };
}

module.exports = ConvertHandler;
