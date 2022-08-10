class Food{
    constructor(){
      this.radius = random(3, 6);
      this.x = random((-width/2) + this.radius, (width/2) - this.radius);
      this.y = random((-height/2) + this.radius, (height/2) - this.radius);
    }
    
    show(){
      stroke("orange");
      strokeWeight(this.radius);
      
      point(this.x, this.y);
    }
  }