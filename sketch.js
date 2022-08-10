const NUM_ANTS = 500;
const cwidth = 2555;
const cheight = 1295;
const FOOD_NUM = 5;

let ants = [];
let food = [];

function setup() {
  createCanvas(cwidth, cheight);
  strokeWeight(2)
  
  // create ants
  for (let i = 0; i < NUM_ANTS; i++){
    append(ants, new Ant(createVector(width/2, height/2), random(0.1, 0.3), random(2 * PI)));
  }
  
  // create food
  for (let i = 0; i < FOOD_NUM; i += 1){
    food.push(new Food());
  }
}

function draw() {
  // draw ants
  for (let ant of ants){
    ant.draw();
    ant.move();
  }
  
  // draw food
  for (let f of food){
    f.draw();
  }
}