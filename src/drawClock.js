import drawFace from './drawFace';
import drawNumbers from './drawNumbers';
import drawTime from './drawTime';
import drawCircles from './drawCircles';
export default function drawClock(ctx,radius) {
    let variables ={
        "ctx":ctx,
        "radius":radius
    }
    drawFace(variables);
    drawNumbers(variables);
    drawTime(variables);
    drawCircles(variables);
}