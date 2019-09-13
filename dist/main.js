let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90


function drawClock() {
  drawFace();
  drawNumbers();
  drawTime();
}

function drawFace() {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#546eff';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, 2*Math.PI);
  ctx.fillStyle = '#000';
  ctx.fill();
}
function drawNumbers() {
  let ang;
  let num;
  ctx.font = radius/7 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawArrow(hour, radius/2.6);
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawArrow(minute, radius/1.5);
    second=(second*Math.PI/30);
    drawArrow(second, radius-40, 'red');
}

function drawArrow(pos, length, color = '#000') {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

drawClock();
setInterval(drawClock, 1000);