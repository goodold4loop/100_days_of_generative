function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background("#F2F10E");

  

  rectMode(CENTER);
  noFill();
  
  for(i = 1; i< 15; i++) {
    for(j=1; j<15; j++) {
      
      /*if(floor(random(4)) != 0) {
        push();
        translate(i*40, j*40);   
        rotate(random(TWO_PI));
        rect(0, 0, 20, 20);   
        pop();
      }*/
      offsetx = floor(random(4));
      offsety = floor(random(4));
      
      stroke("rgb(202,42,149)"); 
      circle(i*40+offsetx,j*40,random(3,20));
      
      stroke("rgb(202,42,149)"); 
      circle(i*40,j*40+offsety,random(3,20));
    }
    
  }
}
