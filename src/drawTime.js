import drawArrow from './drawArrow';
export default function drawTime(variables){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let radius = variables.radius;
    let ctx = variables.ctx;
    hours=hours%12;
    hours=(hours*Math.PI/6)+(minutes*Math.PI/(6*60))+(seconds*Math.PI/(360*60));
    minutes=(minutes*Math.PI/30)+(seconds*Math.PI/(30*60));
    seconds=(seconds*Math.PI/30);

    drawArrow(ctx, hours, radius/2.6);
    drawArrow(ctx, minutes, radius/1.5);
    drawArrow(ctx, seconds, radius-40, 'red');
}