const HIST_SIZE = 500;

class Ant {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.max_speed = 0.5;
    this.dx = 0;
    this.dy = 0;
    this.acceleration = 0.01;
    this.heading = random(2 * PI);
    this.carrying_food = false;
    this.history = [];
  }
  
  move(){
    // ant acceleration
    if (this.dx < this.max_speed){
      this.dx += this.acceleration;
    }
    if (this.dy < this.max_speed){
      this.dy += this.acceleration;
    }

    // move ant
    this.x += sin(this.heading) * this.dx;
    this.y += cos(this.heading) * this.dy;
    this.heading += random(-PI/32, PI/32)

    // check edge collisions
    if (this.x >= width/2 || this.x <= -width/2){
      this.heading += PI;
    }
    if (this.y >= height/2 || this.y <= -height/2){
      this.heading += PI;
    }

    // check if ant is on food
    if (!this.carrying_food){
      this.food_check();
    }

    // save position to history
    if (this.history.length > HIST_SIZE){
      this.history.shift();
    }
    this.history.push({x: this.x, y: this.y, had_food: this.carrying_food, heading: this.heading});
  } 
  
  show(){
    // if (this.carrying_food){
    //   stroke("blue");
    // }
    // else {
    //   stroke("red")
    // }
    strokeWeight(2);

    for (let i = 0; i < this.history.length; i++){
      if (this.history[i].had_food){
        stroke("blue");
      }
      else {
        stroke("red");
      }
      point(this.history[i].x, this.history[i].y);
    }
  }  

  // check if ant on food
  food_check(){
    for (let f of food){
      if (Math.sqrt(((this.x - f.x)**2) + ((this.y - f.y)**2)) < f.radius){
        this.carrying_food = true;
        food.splice(food.indexOf(f), 1);
      }
    }
  }
}
