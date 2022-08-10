class Food{
    constructor(){
      this.pos = createVector(random(0, width), random(0, height));
      this.radius = random(3, 6);
    }
    
    draw(){
      stroke("orange");
      strokeWeight(this.radius);
      
      point(this.pos);
    }
  }