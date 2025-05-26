function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background("#000000");

  

  rectMode(CENTER);
  //noFill();
  
  r = floor(random(100));
  g = floor(random(200));
  b = floor(random(100));
  
  //fill(100,200,100);
  stroke("orange"); 
  
  for(i = 1; i<30; i++) {
    for(j=1; j<30; j++) {
      
      c = floor(random(3))
      
      if (c == 0)
        triangle(i*20, j*20, i*20-5, j*20, i*20, j*20+5);
      
      if (c==1) 
        rect(i*20, j*20, 12, 12);   

      if(c == 2)
        circle(i*20,j*20, 10);
    }
    
  }
}
