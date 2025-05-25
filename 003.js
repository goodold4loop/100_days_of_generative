function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background("#000000");

  

  rectMode(CENTER);
  noFill();
  
  r = floor(random(100));
  g = floor(random(200));
  b = floor(random(100));
  
  for(i = 1; i< 30; i++) {
    for(j=1; j<30; j++) {
      

      if(floor(random(4)) == 0)
        r += random(2);
      if(floor(random(4)) == 0)
        g += random(2);
      if(floor(random(4)) == 0)
        b += random(2);
      
      fill(r,g,b);

      rect(i*20, j*20, 20, 20);   

    }
    
  }
}
