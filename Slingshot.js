class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 25);
        image(this.sling2, 170, 15);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if (pointA.x<210){

            
            line(pointA.x, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x, pointA.y, pointB.x+12, pointB.y);
            image(this.sling3, pointA.x-20, pointA.y-10, 15, 30);
        }
        else{
            line(pointA.x, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x, pointA.y, pointB.x+12, pointB.y);
            image(this.sling3, pointA.x+15, pointA.y-10, 15, 30);  
        }
    }
}
}