function setup (){
    resize();
    setTimeout(function(){refresh();}, 10);
}

function refresh (x){
    setTimeout(function(x){refresh();}, 10);
    
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    w = window.innerWidth;
	h = window.innerHeight;
}

window.addEventListener('resize', resize, false); resize();