
absLENS.prototype.draw = function(context) { //draws lens
  return context
}

absLENS.prototype.testIntersect = function(x,y, theta) {
  var  myresults = [];
  var intersects = false;
  var distance = 0;

//  ADD SOME CALCULATION TO DETERMINE if it intersects
  switch (this.shape) {
    case ("parabola"):
      this.a = 1;
      this.b = 5;
      this.c = 3;
      if (Math.pow(this.b-Math.tan(theta),2)-(4*this.a*(this.c+Math.tan(theta)*x-y)) < 0)
        {break;}
      //else {X = 1;}//solve for x}
      else {var intersectX1 = (-this.b+Math.tan(theta)+Math.sqrt(Math.pow(this.b-Math.tan(theta),2)-(4*this.a*(this.c+Math.tan(theta)*x-y))))/(2*this.a);
          var intersectX2 = (-this.b+Math.tan(theta)-Math.sqrt(Math.pow(this.b-Math.tan(theta),2)-(4*this.a*(this.c+Math.tan(theta)*x-y))))/(2*this.a);
          var intersectY1 = this.a*Math.pow(intersectX1,2)+this.b * intersectX1+ this.c;
          var intersectY2 = this.a*Math.pow(intersectX2,2)+this.b * intersectX2+ this.c;
          intersects = true;

    }
      break;
    case "sphere":
      this.h = 10;
      this.k = 10;
      this.r = 10;
      //if false {return};
      break;

  //  default:
  }



//  */

  if (intersects) {
    myresults.push(intersects);
    //add some calculation
    var dist1 = Math.abs(Math.sqrt((Math.pow(intersectX1-x,2)+(Math.pow(intersectY1-y,2)))));
    var dist2 = Math.abs(Math.sqrt((Math.pow(intersectX2-x,2)+(Math.pow(intersectY2-y,2)))));
    if (dist1 < dist2 || dist1 == dist2) {
      myresults.push(dist1);
      console.log(dist1);
      console.log(dist2);
      console.log(intersectX1);
      console.log(intersectY1);
      console.log(intersectX2);}
    if (dist1 > dist2) {myresults.push(dist2);}
    console.log(myresults);
    return myresults //a[1] should be the exact distance away from the starting point of ray to the point of intersection
  }
  else{myresults.push(intersects);
  myresults.push(distance);
  console.log(myresults);
  return myresults }//myresults[0] tells if it intersects, myresults[1] tells the distance
}

absLENS.prototype.doLens = function(x,y,theta) {
  var myresults = [];
  var newX = 0;
  var newY = 0;
  var newTheta = 0;
//calculation for intersection

  switch (this.shape){
//else {X = 1;}//solve for x}
    case "parabola":
    var intersectX1 = (-this.b+Math.tan(theta)+Math.sqrt(Math.pow(this.b-Math.tan(theta),2)-(4*this.a*(this.c+Math.tan(theta)*x-y))))/(2*this.a);
    var intersectX2 = (-this.b+Math.tan(theta)-Math.sqrt(Math.pow(this.b-Math.tan(theta),2)-(4*this.a*(this.c+Math.tan(theta)*x-y))))/(2*this.a);
    var intersectY1 = this.a*Math.pow(intersectX1,2)+this.b * intersectX1+ this.c;
    var intersectY2 = this.a*Math.pow(intersectX2,2)+this.b * intersectX2+ this.c;

    var dist1 = Math.abs(Math.sqrt((Math.pow(intersectX1-x,2)+(Math.pow(intersectY1-y,2)))));
    var dist2 = Math.abs(Math.sqrt((Math.pow(intersectX2-x,2)+(Math.pow(intersectY2-y,2)))));

    if (dist1<dist2 || dist1 == dist2)
      {
        var newX = intersectX1;
        var newY = intersectY1;
        var perplineTheta = Math.atan(-1*(1/(2*this.a + this.b)));
        console.log(perplineTheta);
        var thetaI = theta-perplineTheta;
        console.log("incident =" + thetaI); //incident angle
        var thetaR = (((1/this.n)*Math.sin(thetaI)));
        console.log("refracted ="+ thetaR);
      }
    break;
    case "sphere":

    break;
}
//  some calculation to calculate stuff for the new refracted ray
//  will need to draw a perpendicular, find angle relative to that, then calculate refracted angle, then convert refracted into the general angle used for the program
//  var perptheta = Math.atan2(-1/m);
  //add the calculation which calculates the point of intersection



  myresults.push(newX);
  myresults.push(newY);
  console.log("x=" + newX);
  console.log("y=" + newY);
  if (x<newX){
    myresults.push(thetaR+perplineTheta);
    console.log("aaa");
  }
  else if (x == newX) {
    myresults.push(theta);
    console.log("bbb");
  }
  else if (x > newX){myresults.push(thetaR - perplineTheta);
    console.log("ccc");
  }
  console.log(myresults);
  return myresults
}
function absLENS(indexOfRefraction, length, width, shape,x,y) {
  //constructor
  this.width = width;
  this.length = length;
  this.n = indexOfRefraction; //for future purposes we will call index of refraction "n"
  this.shape = shape;
  this.equation = 0;
  this.x = x;
  this.y = y; //when drawing use -this.y
}



/*function ConvexLENS(indexOfRefraction, length, width) {
  //constructor
  this.width = width;
  this.length = length;
  this.n = indexOfRefraction; //for future purposes we will call index of refraction "n"
  this.shape = convex;
}

ConvexLENS.prototype = Object.create(absLENS.prototype)
*/
//var me = new absLENS(1.3,1,1,"parabola",150,100);
//me.testIntersect(0,0,0.5236);
//me.doLens(0,0,0.5236);
