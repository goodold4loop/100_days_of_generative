let t = 0;

function setup() {
  createCanvas(600, 600);
  background(0);
  noFill();
  stroke(255, 50);
}

function draw() {
  translate(width / 2, height / 2);
  let radius = 150 + noise(t) * 100;
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.05) {
    let r = radius + noise(t + a * 2) * 50;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  t += 0.01;

  if (frameCount > 500) {
    noLoop(); 
  }
}
