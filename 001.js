function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background("#9C27B0");

  stroke("orange"); 

  rectMode(CENTER);
  noFill();
  
  for(i = 1; i< 15; i++) {
    for(j=1; j<15; j++) {
      
      if(floor(random(4)) != 0) {
        push();
        translate(i*40, j*40);   
        rotate(random(TWO_PI));
        rect(0, 0, 20, 20);   
        pop();
      }
    }
    
  }
}
