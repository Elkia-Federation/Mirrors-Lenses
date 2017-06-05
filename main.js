var startRay = [0,0,1];
var lenses = [new planeMirror(0, 50, 50, 0)];
var linesToDraw = [];

function setup (){
    resize();
    setTimeout(function(){refresh();}, 10);
}

function refresh (){
    var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
    var ray = startRay;
    var lowestDistance = [];
    while (lowestDistance[0] != 1000){
        lowestDistance[0] = 1000;
        console.log("1");
        if (lenses[0] == -1){
                console.log("2");
        }else if (lenses[0] != -1){
            for (i=0; i<lenses.length; i++){
                var intersect = [];
                intersect[0] = lenses[i].testIntersect(ray);
                console.log("a");

                if (intersect){
                                                    console.log("b");

                    if (intersect[1] < lowestDistance[0]){
                        lowestDistance [0] = intersect[1];
                        lowestDistance [1] = i;
                                                                            console.log("c");

                    }
                }
            }
            if (lowestDistance[0] != 1000){
                linesToDraw[linesToDraw.length] = startRay[0];
                linesToDraw[linesToDraw.length] = startRay[1];
                linesToDraw[linesToDraw.length] = startRay[2];
                linesToDraw[linesToDraw.length] = lowestDistance[0];
                startRay = lenses[lowestDistance[1]].doLens(ray);
            }
        }
                console.log("3");

    }
            console.log("4");

    linesToDraw[linesToDraw.length] = startRay[0];
    linesToDraw[linesToDraw.length] = startRay[1];
    linesToDraw[linesToDraw.length] = startRay[2];
    linesToDraw[linesToDraw.length] = 1000;
    if (lenses[0] != -1){
        for (i = 0; i < lenses.length; i++){
            lenses[i].draw(ctx);
        }
    }
    drawRays();
    setTimeout(function(){refresh();}, 10000000);
    
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    w = window.innerWidth;
	h = window.innerHeight;
}

function drawRays (){
    for (i=0; i < linesToDraw.length; i++){
        console.log("5");

        var c = document.getElementById("canvas");
	    var ctx = c.getContext("2d");
        var x1 = linesToDraw[i*4];
        var y1 = linesToDraw[i*4+1];
        var x2 = x1+(Math.cos(linesToDraw[i*4+2])*(linesToDraw[i*4+3]));
        var y2 = y1+(Math.sin(linesToDraw[i*4+2])*(linesToDraw[i*4+3]));
        ctx.fillStyle = "#ffff00";
        ctx.strokeStyle = "#ffff00";
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }
}
window.addEventListener('resize', resize, false); resize();