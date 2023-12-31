class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

display()
{
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    strokeWeight(2);

    var anchor1X = pointA.x;
    var anchor1Y = pointA.y;

    var anchor2X = pointB.x + this.offsetX; 
    var anchor2Y = pointB.y;

    line(anchor1X, anchor1Y, anchor2X, anchor2Y);
}
}