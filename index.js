// Imports
import enemyData from "./data/enemyData.json" assert {type: 'json'}
console.log(enemyData)

// URL
const enemyOne = enemyData[0]

// Canvas setup
const canvas = document.getElementById("canvas");
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;
const ctx = canvas.getContext("2d");

// Enemy class
class Enemy{
  constructor(imgSrc, actualWidth, actualHeight, numFrames){
    this.image = new Image();
    this.image.src = imgSrc;

    this.actualWidth = actualWidth;
    this.actualHeight = actualHeight;
    this.width = actualWidth/3;
    this.height = actualHeight/3;

    this.numFrames = numFrames;
    this.currFrame = 0; // 0-5
    this.gameFrame = 0;

    this.x = Math.random()*(CANVAS_WIDTH - this.width);
    this.y = Math.random()*(CANVAS_HEIGHT - this.height);

    this.speedReduction = Math.floor(Math.random()*6) + 5;
  }


  update(){
    if (this.gameFrame % this.speedReduction === 0){
      this.currFrame = (this.currFrame + 1) % this.numFrames;
      this.x = this.x < -this.width ? CANVAS_WIDTH : this.x -10
    }
  }

  draw(){
    ctx.drawImage(this.image, this.currFrame*this.actualWidth, 0, this.actualWidth, this.actualHeight,
      this.x, this.y, this.width, this.height);
    this.gameFrame++;
  }

}

// Enemy Array
const enemies = []
let type = 3;
for (let i=0; i<50; i++){
  enemies.push(new Enemy(enemyData[type].url, enemyData[type].width, enemyData[type].height, enemyData[type].numFrames))
}



// Animate function
let animationFrame;

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemies.forEach(enemy => {
    enemy.draw();
    enemy.update();
  })

  animationFrame = requestAnimationFrame(animate);
}


// Stop function
function stop(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  animationFrame = cancelAnimationFrame(animationFrame);
}

// button
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", ()=>{
  if(animationFrame){
    stop();
  }
  else{
    animate();
  }
})