
function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    background(0);

}

function draw() { 
    //line following mouse
    //custome shape
    beginShape();
    noFill();
    strokeWeight(5);
    stroke(255);
    let vertices = map(mouseY, 0, width, 5, 100);
    for(let a = 0; a < 360; a += vertices) {
        let x = 100 * sin(a) + 180;
        let y = 100 * cos(a) + 180;
        vertex (x, y);
    }
    endShape(CLOSE);

    
    
}