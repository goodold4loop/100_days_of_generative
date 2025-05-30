function setup() {
  createCanvas(800, 800);
  noLoop();
  colorMode(HSL, 360, 100, 100);
  background(0);

  let cellSize = 40;
  let noiseScale = 0.05;

  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      let n = noise(x * noiseScale, y * noiseScale);
      let hue = map(n, 0, 1, 180, 360);  // kék-lila-rózsaszín skála
      let sat = map(sin(n * TWO_PI), -1, 1, 60, 100);
      let light = map(cos(n * TWO_PI), -1, 1, 30, 90);

      fill(hue, sat, light);
      let jitter = random(-5, 5);
      let shapeType = int(random(3));

      push();
      translate(x + cellSize / 2 + jitter, y + cellSize / 2 + jitter);
      rotate(n * PI);

      switch (shapeType) {
        case 0:
          ellipse(0, 0, cellSize * 0.8, cellSize * 0.8);
          break;
        case 1:
          rectMode(CENTER);
          rect(0, 0, cellSize * 0.7, cellSize * 0.7);
          break;
        case 2:
          triangle(-cellSize / 3, cellSize / 3, 0, -cellSize / 3, cellSize / 3, cellSize / 3);
          break;
      }
      pop();
    }
  }

  drawVignette();
}

function drawVignette() {
  for (let r = 0; r < width * 0.7; r += 2) {
    noFill();
    stroke(0, 0, 0, map(r, 0, width * 0.7, 0, 30));
    ellipse(width / 2, height / 2, r, r);
  }
}
