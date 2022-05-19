class Bird {
    constructor(x,y,w,l,image){
    this.x=x
    this.y=y
    this.w=w
    this.l=l
    this.image=image
    this.body = Bodies.rectangle(x,y,w,l,{density:2})
    World.add(world,this.body)
    }

    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.l)
        pop()
    }
    
    shoot(){
        
    }
}