function planeMirror(x1,y1,x2,y2) {
    //constructor
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1; //for future purposes we will call index of refraction "n"
    this.y2 = y2;
    this.angle = Math.atan2(y2-y1,x2-x1);
    this.slope = (y2-y1)/(x2-x1);
    this.b = -1*(x1*((y2-y1)/(x2-x1))+y1);
}
planeMirror.prototype.draw = function() { //draws lens
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();
}

planeMirror.prototype.testIntersect = function(x,y,theta) {
    var raySlope = Math.tan(theta);
    var b1 = -1*((x*raySlope)+y);
    var intersectX = (this.b-b1)/(raySlope-this.slope);
    var intersectY = (this.slope*intersectX)+this.b;
    if (((intersectX > this.x1) && (intersectX < this.x2))||((intersectX < this.x1) && (intersectX > this.x2))){
        if (((intersectX > this.x1) && (intersectX < this.x2))||((intersectX < this.x1) && (intersectX > this.x2))){
            if(Math.sqrt(Math.pow(x-intersectX,2)+Math.pow(y-intersecty,2))<10){
            var returnValue = [true, Math.sqrt(Math.pow(x-intersectX,2)+Math.pow(y-intersecty,2))];
            return returnValue
            }else{
            var returnValue = [false,0];
            return returnValue
            }
        }else{
            var returnValue = [false,0];
            return returnValue
        }
    }else{
        var returnValue = [false,0];
        return returnValue
    }    
}

planeMirror.prototype.doLens = function(x,y,theta) {
    var raySlope = Math.tan(theta);
    var b1 = -1*((x*raySlope)+y);
    var intersectX = (this.b-b1)/(raySlope-this.slope);
    var intersectY = (this.slope*intersectX)+this.b;
    var newTheta = theta+this.angle;
    var myresults = [intersectX, intersectY, newTheta];
    return myresults;
}