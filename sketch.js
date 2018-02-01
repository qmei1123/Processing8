var secondX = 20;
var secondY = 40;
function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

}

function draw() { 
    background(0);
    //line following mouse
    line(mouseX, mouseY, mouseX*secondX*2, mouseY*secondY);
    //custome shape
    beginShape();
    noFill();
    strokeWeight(5);
    stroke(255);

    let vertices = map(mouseX, 0, width, 5, 100);

    for(let a = 0; a < 360; a += vertices) {
        let x = 150 * sin(a) + 180;
        let y = 150 * cos(a) + 180;
        vertex (x, y);
    }
    endShape(CLOSE);
    
}