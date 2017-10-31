//0000000000000000000000000000000000000000
//0000000000000000000000000000000000000000 SETUP

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var mouseX = 0;
var mouseY = 0;





function resizeCanvas(){
canvas.width = innerWidth;
canvas.height = innerHeight;
}

function updateMouseXY(e){
  mouseX = e.x;
  mouseY = e.y;
}


//0000000000000000000000000000000000000000
window.addEventListener('mousemove', updateMouseXY);
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

//0000000000000000000000000000000000000000

function draw(){
ctx.fillStyle = 'orange';
ctx.fillRect(0,0,innerWidth, innerHeight);

ctx.fillStyle = 'green';
ctx.fillRect(0,0,30, 30);
// ctx.font = '40px Impact';
// ctx.fillStyle = 'green';
//
// ctx.fillText('hi there!', mouseX, mouseY);
// ctx.strokeText('WOAH BUDDY!', mouseX, mouseY);
// ctx.strokeText('YA NEED TO WAKE UP!',mouseX, mouseY);
requestAnimationFrame(draw);

}
function drawRect(){
  ctx.fillStyle = 'purple';
  ctx.fillRect(mouseX,mouseY,(-30),200);


  ctx.fillStyle = 'blue';
  ctx.fillRect(mouseX,mouseY,(-60),(-200));

  ctx.fillStyle = 'blue';
  ctx.fillRect(mouseX,mouseY,(-30),200);

  ctx.fillStyle = '#ff7373';
  ctx.fillRect(mouseX,mouseY,(-60),(200));


  ctx.fillStyle = 'blue';
  ctx.fillRect(mouseX,mouseY,30,(-200));

  ctx.fillStyle = 'blue';
  ctx.fillRect(mouseX,mouseY,(-30),200);

  ctx.fillStyle = '#ff7373';
  ctx.fillRect(mouseX,mouseY,(-30),(-200));

  ctx.fillStyle = '#ff7373';
  ctx.fillRect(mouseX,mouseY,30,200);

  ctx.fillStyle = '#63C97E';
  ctx.fillRect(mouseX,mouseY,(-80),(15));

  ctx.fillStyle = '#63C97E';
  ctx.fillRect(mouseX,mouseY,(80),(15));

  requestAnimationFrame(drawRect);

}

function drawAgain(){

  ctx.fillStyle = 'green';
  ctx.fillRect(mouseX,mouseY,(400),(415));

}



draw();
drawRect();
drawAgain();
// setInterval(draw, 1000, 30);
