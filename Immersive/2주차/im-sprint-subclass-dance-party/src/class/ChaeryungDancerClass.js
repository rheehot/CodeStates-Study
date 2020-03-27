if (typeof window === "undefined") {
  global.ItzyClass = require("./ItzyClass");
} // you don't have to worry about this code. this is for testing.

/* eslint-disable */
class ChaeryungDancerClass extends ItzyClass {
  createDancerElement() {
    let ex = super.createDancerElement();
    ex.className += " chaeryung";
    return ex;
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = ChaeryungDancerClass;
}
