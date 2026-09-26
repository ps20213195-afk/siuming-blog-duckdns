//please don't go into my code, I don't want you to crash your browser.
// this acts as a disclamer, so PROCEED AT YOUR OWN RISK
var fps = document.getElementById("fps");
var startTime = Date.now();
var frame = 0;

function tick() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}
tick();
//jk its a fps script and you thought you were brave huh