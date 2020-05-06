/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var translateRomanNumeral = function (number) {
  // TODO: Implement me!
  if (typeof number !== "string") {
    return null;
  }
  var result = 0;
  if (number.length === 0) {
    return result;
  }
  var arr = number.split("");
  for (var i = 0; i < arr.length; i++) {
    if (!DIGIT_VALUES.hasOwnProperty(arr[i])) {
      return null;
    }
    var num = DIGIT_VALUES[arr[i]];
    var next = DIGIT_VALUES[arr[i + 1]];
    if (next === undefined || next <= num) {
      result += num;
    } else {
      result -= num;
    }
  }
  return result;
};
