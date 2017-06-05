import * as algebra from algebra-0.2.6.min
function absLENS(indexOfRefraction, length, width, shape) {
  //constructor
  this.width = width;
  this.length = length;
  this.n = indexOfRefraction; //for future purposes we will call index of refraction "n"
  this.shape = shape;
  var equation = 0;

}

absLENS.prototype.draw = function(context) { //draws lens
  return context
}

absLENS.prototype.testIntersect = function(x,y, theta) {
  var  myresults = [];
  var intersects = false;
  var distance = 0;

  ADD SOME CALCULATION TO DETERMINE if it intersects
  switch (this.shape) {
    case parabola:
      if (denominator === 0){intersects = false;};
      else {x = 1;}//solve for x}
      break;
    case sphere:
      if hi {return hi}
      break;
    default:
  }



  */

  if (intersects) {
    myresults.append(intersects);
    //add some calculation

    myresults.append(distance)
    return myresults //a[1] should be the exact distance away from the starting point of ray to the point of intersection
  }
  myresults.append(intersects);
  myresults.append(distance);
  return myresults //myresults[0] tells if it intersects, myresults[1] tells the distance
}

absLENS.prototype.doLens = function(x,y,theta) {
  var myresults = [];
  var newX = 0;
  var newY = 0;
  var newTheta = 0;

  /*
  some calculation to calculate stuff for the new refracted ray
  will need to draw a perpendicular, find angle relative to that, then calculate refracted angle, then convert refracted into the general angle used for the program
  */

  myresults.append(newX);
  myresults.append(newY);
  myresults.append(newTheta);
  return myresults
}

function ConvexLENS(indexOfRefraction, length, width) {
  //constructor
  this.width = width;
  this.length = length;
  this.n = indexOfRefraction; //for future purposes we will call index of refraction "n"
  this.shape = convex;
}

ConvexLENS.prototype = Object.create(absLENS.prototype)
