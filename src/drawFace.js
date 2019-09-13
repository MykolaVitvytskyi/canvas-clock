export default function drawFace(variables) {
    let ctx = variables.ctx;
    let radius = variables.radius;
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