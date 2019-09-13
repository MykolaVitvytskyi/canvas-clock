import drawClock from './drawClock';
(function() { 
    let canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext("2d");
    let radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius - 20;
    drawClock(ctx,radius);
    setInterval(drawClock,1000,ctx,radius)
    })()
   

