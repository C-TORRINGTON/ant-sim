const EDGE_BUFFER = 1;
const HISTORY_SIZE = 100;


class Ant {
  constructor(pos, speed, heading){
    this.pos = pos;
    this.speed = speed;
    this.heading = heading;
    this.history = [];
    this.carrying_food = false;
  }
  
  move(){
    this.heading += random(-0.09817477042, 0.09817477042); // PI/32

    this.pos.x += this.speed * cos(this.heading);
    this.pos.y += this.speed * sin(this.heading);

    // change directions if necessary
    if (this.pos.x >= width - EDGE_BUFFER || this.pos.x <= 0 + EDGE_BUFFER){
      this.heading += QUARTER_PI;
    }
    if (this.pos.y >= height - EDGE_BUFFER || this.pos.y <= 0 + EDGE_BUFFER){
      this.heading += QUARTER_PI;
    }
    
    if (this.history.length >= HISTORY_SIZE){
      this.history.shift()
    }
    this.history.push(this.pos)
    
    // check if found food
    this.food_check();
    console.log(this.history.length)
  } 
  
  
  draw(){
    if (this.carrying_food){
      stroke(0, 0, 255);
    } else {
      stroke(255, 0, 0);
    }
    strokeWeight(1);
    
    // for (let i = 0; i < this.history.length; i += 2){
    //   point(this.history[i].x, this.history[i].y)
    // }
    point(this.pos)
  }
  
  
  food_check(){
    for (let f of food){
      // Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0)) < r @ https://stackoverflow.com/questions/16792841/detect-if-user-clicks-inside-a-circle
      if (Math.sqrt((f.pos.x - this.pos.x) * (f.pos.x - this.pos.x) + (f.pos.y - this.pos.y) * (f.pos.y - this.pos.y)) < f.radius){
        this.carrying_food = true;
      }
    }
  }
}  
