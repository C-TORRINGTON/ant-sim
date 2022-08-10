let ants = [];
let food = [];

const ANTS_NUM = 10;
const FOOD_NUM = 50;

function setup() {
  createCanvas(700, 550);
  
  // make ants
  for (let i = 0; i < ANTS_NUM; i++){
    ants.push(new Ant());
  }

  // make food
  for (let i = 0; i < FOOD_NUM; i++){
    food.push(new Food());
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);

  // draw ants
  for (let ant of ants){
    ant.move();
    ant.show();
  }

  // draw food
  for (let f of food){
    f.show();
  }
}