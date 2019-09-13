export default function drawCircles(variables) {
    let ctx = variables.ctx;
    let radius = variables.radius - 10;
    let size;
    for(let i = 0; i < 60; i++){
      ctx.beginPath();
      ctx.strokeStyle = 'green';
      if(i % 5 == 0){
          size = 5;
        }else{
            size = 2;
        }
	  const xPointM = 0 + radius * Math.cos(-6 * i * (Math.PI/180) + Math.PI/2);
	  const yPointM = 0 - radius * Math.sin(-6 * i * (Math.PI/180) + Math.PI/2);
	  ctx.arc(xPointM, yPointM, size, 0, 2*Math.PI, true);
	  ctx.stroke();
	  ctx.closePath();
    } 
}