function createCircle(x,y,d){
    var options = {
        friction: 0.2,
        restitution: 0.7,
        speed: 0.5
    }

    this.body = Bodies.circle(x, y, d, options);
    this.d = d;
    Composite.add(engine.world, this.body);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        circle(0,0,this.d*1.9);

        pop();
    }

    // circle(circle1.position.x, circle1.position.y, 30);
}