/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */
  // make a dancer with a random position
  //
  // TODO:

  let dancerRyuJin = new RyuJinDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  document.body.appendChild(dancerRyuJin.$node);

  let dancerRia = new RiaDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  document.body.appendChild(dancerRia.$node);

  let dancerYeji = new YejiDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  document.body.appendChild(dancerYeji.$node);

  let dancerChaeryung = new ChaeryungDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  document.body.appendChild(dancerChaeryung.$node);

  let dancerYuna = new YunaDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  document.body.appendChild(dancerYuna.$node);

  dancers.push(
    dancerRyuJin,
    dancerRia,
    dancerYeji,
    dancerChaeryung,
    dancerYuna
  );
}

function lineup() {
  for (let i = 0; i < dancers.length; i++) {
    dancers[i].lineup(i);
  }
  play();
}
function play() {
  var audio = document.querySelector(".audio_play");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

function addBlinky() {
  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  document.body.appendChild(dancer.$node);
}

window.addEventListener("DOMContentLoaded", () => {
  const elAddDancerButton = document.querySelector(".addDancerButton");
  elAddDancerButton.addEventListener("click", handleClickDancerButton);

  const eladdBlinky = document.querySelector(".addBlinky");
  eladdBlinky.addEventListener("click", addBlinky);

  const lineupButton = document.querySelector(".lineup");
  lineupButton.addEventListener("click", lineup);
});
