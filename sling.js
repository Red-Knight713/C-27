class Sling {
  constructor(bodyA,bodyB){
    var options = {
    length :100,
    stiffness: 1,
    bodyA:bodyA,
    bodyB:bodyB
  }
  this.sling = Matter.Constraint.create(options)
  Matter.World.add(world, this.sling)
  }
  
  display(){
      line(bodyA.position.x,bodyA.position.y, bodyB.position.x,bodyB.position.y)
  }
}