function absLENS(indexOfRefraction, length, width, shape) {
  //constructor
  this.width = width;
  this.length = length;
  this.n = indexOfRefraction; //for future purposes we will call index of refraction "n"
  this.shape = shape;
}

absLENS.prototype.draw = function(context) { //draws lens
  return context
}

absLENS.prototype.testIntersect = function(x,y, theta) {
  var  myresults = [];
  var intersects = false;
  var distance = 0;
  /*
  ADD SOME CALCULATION TO DETERMINE if it intersects
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
  */

  myresults.append(newX);
  myresults.append(newY);
  myresults.append(newTheta);
  return myresults
}
