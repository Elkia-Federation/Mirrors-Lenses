var startRay = [0,0,0];
var lenses = [];
var linesToDraw = [];

function setup (){
    resize();
    var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
    setTimeout(function(){refresh(ctx);}, 10);
}

function refresh (ctx){
    var ray = startRay;
    var lowestDistance = [];
    linesToDraw = [];
    while (lowestDistance != [-1]){
        lowestDistance = [-1];
        for (i=0; i<lenses.length; i++){
            var intersect = lenses[i].testIntersect(ray);
            if (intersect[0]){
                if (intersect[1] < lowestDistance[0]){
                    lowestDistance = [intersect[1], i];
                }
            }
        }
        if (lowestDistance != [-1]){
            linesToDraw[linesToDraw.length] = [ray[0],ray[1],ray[2],lowestDistance[0]];
            ray = lenses[lowestDistance[1]].doLens(ray);
        }
    }
    
    
    
    for (i = 0; i < lenses.length; i++){
        ctx = (lenses[i].draw(ctx));
    }
    ctx = (drawRays(ctx));
    setTimeout(function(){refresh(ctx);}, 10);
    
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    w = window.innerWidth;
	h = window.innerHeight;
}

function drawRays (ctx){
    for (i=0; i < linesToDraw; i++){
        var x1 = (linesToDraw[i])[0];
        var y1 = (linesToDraw[i])[1];
        var x2 = x1+(Math.cos((linesToDraw[i])[2])*((linesToDraw[i])[3]));
        var y2 = y1+(Math.sin((linesToDraw[i])[2])*((linesToDraw[i])[3]));
        ctx.fillStyle = "#ffff00";
        ctx.strokeStyle = "#ffff00";
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }
    return ctx;
}
window.addEventListener('resize', resize, false); resize();