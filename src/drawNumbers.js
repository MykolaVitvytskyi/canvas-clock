export default function drawNumbers(variables) {
    let ctx = variables.ctx;
    let radius = variables.radius;
    ctx.font = radius/7 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(let i = 1; i < 13; i++){
        let ang = i * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius+35);
        ctx.rotate(-ang);
        ctx.fillText(i.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius-35);
        ctx.rotate(-ang);
    }
}