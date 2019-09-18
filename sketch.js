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
  let r=height/3;   //Definizone costante pari al raggio della circonferenza
  let a=2;          //Definizione della cadenza delle linee tracciate
  let x=r*cos(frameCount*a); //Definizone ascisse punto mobile
  let y=r*sin(frameCount*a); //Definizione ordinete punto mobile


  translate(width/2,height/2);  // Centratura della figura

  stroke(
    lerpColor(                  // Variazione il colore da colore1 a colore2
      color('#D00000'),         // Colore1
      color('#FFBA08'),         // Colore2
      frameCount/(360/a)        // Interpolazione
    )
  );

  line(r, 0, x, y);   //fig buona

  //line(r*cos(frameCount*a), -r*sin(frameCount*a), -r, 0); //half below

  //line(0, 0, r*cos(frameCount*3)+r*cos(frameCount), r*sin(frameCount*3)-r*sin(frameCount));

  if (frameCount == (360/a))
    noLoop();



}
