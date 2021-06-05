class ston{
	constructor(x,y,r)
	{
	var options ={
density : 12,
friction : 0.94512365356269,
restitution : 0.884959,


	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonpos=this.body.position;		
			push()
			translate(stonpos.x,stonpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("blue");
			fill("red");
			ellipse (0,0,this.r,this.r)

			pop()
	}

}