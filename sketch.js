

// MATTER JS
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

var engine;
var world;
var circles = [];
var ground;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    canvas.parent("sketchContainer");
    engine = Engine.create();
    world = engine.world;
    Matter.Runner.run(engine);
    // console.log(circle1);
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(windowWidth/2, height, windowWidth, 15, options);
    ground2 = Bodies.rectangle(width, windowHeight/2, 15, windowHeight, options)
    ground3 = Bodies.rectangle(0, windowHeight/2, 15, windowHeight, options)

    Composite.add(engine.world, ground);
    Composite.add(engine.world, ground2);
    Composite.add(engine.world, ground3);
}

function mousePressed(){
    circles.push(new createCircle(mouseX, mouseY, 30));
}
function keyPressed(){

}

function draw(){
    background(0);
    for (var i = 0; i < circles.length; i++){
        circles[i].show();
    }
    // circle1.show();
    
}