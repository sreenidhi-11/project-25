class Dustbin {
  constructor(x,y) {
      var options = {
          isStatic : true
      }
      this.image=loadImage("dustbingreen.png");
      this.height = 100;
      this.thickness = 20;
      this.width = 200;
      this.leftBody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
      this.rightBody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
      this.bottomBody = Bodies.rectangle(x,y,this.width,this.thickness,options);
      World.add(world,this.leftBody);
      World.add(world,this.rightBody);
      World.add(world,this.bottomBody);
      
  }
  display(){
      var leftPos = this.leftBody.position;
      var rightPos = this.rightBody.position;
      var bottomPos = this.bottomBody.position;
      push();
      imageMode(CENTER);
      translate(leftPos.y,leftPos.x);
      fill("red");
      pop();
      push();
      rectMode(CENTER);
      translate(rightPos.x,rightPos.y);
      fill("red");
      pop();
      push();
      translate(bottomPos.x,bottomPos.y);
      fill("red");
      image(this.image,0,-this.height/2,this.width,175);
      pop();

  }
}