function planeMirror(x1,y1,x2,y1) {
    //constructor
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1; //for future purposes we will call index of refraction "n"
    this.y2 = y2;
    this.angle = Math.atan2(y2-y1,x2-x1);
    this.slope = (y2-y1)/(x2-x1);
}
planeMirror.prototype.draw = function(ctx) { //draws lens
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();
    return ctx;
}

planeMirror.prototype.testIntersect = function(x,y,theta) {
    var myresults = [];
    var raySlope = Math.tan(theta);
    


    return myresults;
}

planeMirror.prototype.doLens = function(x,y,theta) {
    var myresults = [];
    var newTheta = 0;



    return myresults;
}