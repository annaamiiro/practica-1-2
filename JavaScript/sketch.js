var py = 135;
var pz = 50;
var y = 225;
var w = 8;
var h = 18;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);

  //Estructura cos del robot, formada de 3 rectangles,1 quadrat i 1 línia//

  stroke(8, 8, 8);
  strokeWeight(2);
  fill(108, 243, 213);
  rect(170, 100, 150, 75, 20);
  rect(220, 175, 50, 25);
  quad(185, 200, 305, 200, 305, 320, 185, 320);
  rect(215, 320, 60, 40);
  line(245, 320, 245, 360);

  //orelles//

  fill(33, 163, 163);
  arc(170, 140, 40, 40, HALF_PI, PI + HALF_PI, 0);
  arc(320, 140, 40, 40, PI + HALF_PI, HALF_PI, 0);

  //antenes//

  fill(115, 117, 165);
  line(245, 100, 220, 70);
  circle(220, 70, 10, 10);
  line(245, 100, 270, 70);
  circle(270, 70, 10, 10);

  //cara: nas i ulls//

  fill(115, 117, 165);
  triangle(235, 165, 245, 155, 255, 165);

  px = 205;
  ulls(px, py, pz);

  px = 285;
  ulls(px, py, pz);

  //elements cos del robot: botons i pantalla//

  x = 200;
  boto(x, y, w, h);

  x = 212;
  boto(x, y, w, h);

  x = 224;
  boto(x, y, w, h);

  fill(158, 6, 74);
  circle(285, 225, 12, 12);

  noFill();
  stroke(158, 6, 74);
  strokeWeight(3);
  rect(195, 250, 100, 50, 10);

  // braços robot amb eina beginShape//
  //esquerre//

  stroke(8, 8, 8);
  strokeWeight(2);

  fill(33, 163, 163);
  beginShape();
  vertex(185, 200);
  vertex(150, 300);
  vertex(185, 300);
  vertex(185, 200);
  endShape();

  //dret//

  beginShape();
  vertex(305, 200);
  vertex(340, 300);
  vertex(305, 300);
  vertex(305, 200);
  endShape();

  //peus//

  fill(33, 163, 163);
  arc(230, 360, 30, 30, PI, TWO_PI, 0, CHORD);
  arc(260, 360, 30, 30, PI, TWO_PI, 0, CHORD);
}

function ulls(px, py, pz) {
  fill(43, 54, 74);
  circle(px, py, pz);
  fill(252, 250, 250);
  circle(px + 7, py - 5, pz - 20);
  circle(px - 10, py + 7, pz - 40);
}

function boto(x, y, w, h) {
  fill(158, 6, 74);
  ellipse(x, y, w, h);
}
