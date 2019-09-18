function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(24);
  /*background("peachpuff");
  angleMode(DEGREES); //RADIANS are in relation of PI
  noStroke();*/
  //frameRate(12); //setes the fps
  // put setup code here
}

function draw() {
/*
  strokeWeight(5);
  stroke(130, 100, 255);
  fill(87, 169, 255);
  line(90, 120, 120, 90); //units are in pixels
  rect(150, 150, 200, 120);
  ellipseMode(CORNER); // instead of CENTER
  ellipse(150, 400, 200, 120);

  stroke(0);
  fill(255);
  rect(130,280,200,50);

  stroke(0);
  fill(0);
  rect(160, 200, 100, 150);

  stroke(0);
  fill(150);
  rect(50, 50, 200, 20);


  ellipse(width/2, height/2, 25); //width e height sono le dimensioni del canvas
  ellipse(mouseX,mouseY,20); // to triggerAttack(
  pmouseX and pmouseY are the prevoius positions

  fill(255);
  arc(frameCount, height/2, 50, 50, frameCount, frameCount + 90, PIE); //PIE fills it like a portion of pie
  arc(frameCount, height/2, 50, 50, frameCount + 180, frameCount + 270, PIE);

  fill("orange");
  arc(frameCount, height/2, 50, 50, frameCount + 90, frameCount + 180, PIE);
  arc(frameCount, height/2, 50, 50, frameCount - 90, frameCount, PIE);

  translate(width/2, height/2);
  rotate(frameCount * 3);
  noFill();

  stroke( //each frame has 3° of rotaion.
    lerpColor(
      color("tomato"),
      color("aquamarine"),
      frameCount / 120
    )
  );
  ellipse(100, 0, 250);

  if(frameCount == 120)
  noLoop();
*/
  let k = width/6;
  translate(width/2,height/2);
  line(k, 0, k*cos(frameCount*6), k*sin(frameCount*6));
  if(frameCount == (360/6))
    noLoop();
}
