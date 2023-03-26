// Canvas setup
const canvas = document.getElementById("canvas");
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;
const ctx = canvas.getContext("2d");

// Enemy class
class Enemy1{
  constructor(imgSrc){
    this.image = new Image();
    this.image.src = imgSrc;
    this.actualWidth = Math.floor(1758/6);
    this.actualHeight = 155;
    this.width = this.actualWidth/3;
    this.height = this.actualHeight/3;
  }


  update(){
    return
  }

  draw(){
    ctx.drawImage(enemy1.image, 0, 0, enemy1.actualWidth, enemy1.actualHeight,
      0, 0, enemy1.width, enemy1.height);
  }

}

// Animate function
let animationFrame;
const enemy1 = new Enemy1("./images/enemy1.png");
function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(enemy1.image, 0, 0, enemy1.actualWidth, enemy1.actualHeight,
                0, 0, enemy1.width, enemy1.height);
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