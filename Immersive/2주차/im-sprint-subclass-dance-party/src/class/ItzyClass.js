if (typeof window === "undefined") {
  global.DancerClass = require("./DancerClass");
} // you don't have to worry about this code. this is for testing.

// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.

/* eslint-disable */

class ItzyClass extends DancerClass {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.toggle = true;
  }

  createDancerElement() {
    let elDancer = document.createElement("span");
    elDancer.className = "Itzy";
    elDancer.addEventListener("mouseover", this.mouseover.bind(this));
    elDancer.addEventListener("mouseout", this.mouseout.bind(this));
    return elDancer;
  }

  // 각각의 댄서  span Itzy ria
  setPosition(top, left) {
    super.setPosition(top, left);
    Object.assign(this.$node.style, {
      width: `300px`,
      height: `260px`,
    });
  }
  mouseover() {
    let style = this.$node.style;
    style.border = "10px solid purple";
  }
  mouseout() {
    let style = this.$node.style;
    style.border = "";
  }

  step() {
    super.step();
    if(this.toggle === true) {
      this.toggle = false;
      Object.assign(this.$node.style, {
        backgroundSize: `90% 90%`,
      });
    } else {
      this.toggle = true;
      Object.assign(this.$node.style, {
        backgroundSize: `100% 100%`,
      });
    }
  }
}

// 댄서 각각의 인덱스에 setposition을 준다.

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = ItzyClass;
}
