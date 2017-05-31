var startRay = [0,0,0];
var lenses = [];

function setup (){
    resize();
    setTimeout(function(){refresh();}, 10);
}

function refresh (){
    var ray = startRay;
    var lowestDistance = [];
    while (lowestDistance != [-1]){
        lowestDistance = [-1];
        for (i=0; i<lenses.length; i++){
            var intersect = lenses[i].testIntersect(ray);
            if (intersect[0]){
                if (intersect[1] > lowestDistance[0]){
                    lowestDistance = [intersect[1], i];
                }
            }
        }
        if (lowestDistance != [-1]){
            ray = doLens(ray);
        }
    }
    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext;
    
    for (i = 0; i < lenses.length; i++){
        lenses[i].draw(ctx);
    }
    
    setTimeout(function(){refresh();}, 10);
    
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    w = window.innerWidth;
	h = window.innerHeight;
}

window.addEventListener('resize', resize, false); resize();