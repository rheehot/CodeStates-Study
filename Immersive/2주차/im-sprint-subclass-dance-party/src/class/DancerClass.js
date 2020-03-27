if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
class DancerClass {
  constructor(top, left, timeBetweenSteps) {
    this.$node = this.createDancerElement();
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }
  createDancerElement() {
    let elDancer = document.createElement("span");
    elDancer.className = "dancer";
    return elDancer;
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    Object.assign(this.$node.style, {
      top: `${top}px`,
      left: `${left}px`
    });
  }
  /* eslint-disable */
  lineup(DacerIndex) {
    let variable = DacerIndex * 20;
    Object.assign(this.$node.style, {
      top: `50%`,
      left: `${variable}%`
    });
  }
}

// 댄서 각각의 인덱스에 setposition을 준다.

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = DancerClass;
}
