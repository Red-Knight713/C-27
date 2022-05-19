class Box{
    constructor(x,y,w,l,image){
        this.x=x
        this.y=y
        this.w=w
        this.l=l
        this.image=image

        this.body=Bodies.rectangle(x,y,w,l,{density:2})
        World.add(world,this.body)
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.l);
        pop();
    }
   
}