function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background('#032B43');
  noFill();
}

function draw() {
  if(width>=height) //Vertical screen optimization
    var r=height/3;
  else var r=width/3; //Definizone raggio della circonferenza
  let a=2;            //Definizione della cadenza delle linee tracciate
  let x=r*cos(frameCount*a); //Definizone ascisse punto mobile
  let y=r*sin(frameCount*a); //Definizione ordinete punto mobile

  translate(width/2,height/2);  // Centratura della figura

  if (frameCount < (360/a)){
    stroke(
      lerpColor(                  // Variazione il colore da colore1 a colore2
        color('#D00000'),         // Colore1
        color('#FFBA08'),         // Colore2
        frameCount/(360/a)        // Interpolazione
      )
    );

    line(r, 0, x, y);   //figura esercizio
  }
  else {
    colorMode(HSB, 100);

    stroke(100*mouseX/width, 100, 100); //variazione tonalità in base a mousex

    circle(0,0,2*r+20*(frameCount-(360/a))); //serie di cerchi concentrici
  }
}
