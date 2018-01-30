
function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

}

function draw() { 
        background(0);

    //line following mouse
    line(mouse)
    //custome shape
    function circles() {
        beginShape();
        noFill();
        strokeWeight(5);
        stroke(255);

        let vertices = map(mouseY, 0, width, 5, 100);

        for(let a = 0; a < 360; a += vertices) {
            let x = 50 * sin(a) + 180;
            let y = 50 * cos(a) + 180;
            vertex (x, y);
        }
        endShape(CLOSE);
        }  
    
}