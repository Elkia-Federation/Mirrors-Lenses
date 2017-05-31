# Mirrors-Lenses
Coordinate system:
The upper left corner is 0,0
X is left-right
Y isup-down
Angles
	In radians
	0 is perfectly horizontal point to the right side of screen
	Positive angles go counterclockwise and negative angles go clockwise (𝜋/2 is perfectly 
vertical point straight up and is the same as -3𝜋/2)

Public Variables:
W: width of the html canvas
H: height of the html canvas
Note: You may not create any public variables. Punishable by expulsion from the project and death.

Lense object requirements:

Function 1, draw:
In:
context
The context of the canvas element on which everything it drawn
Out:
context
The new modified context element that now includes this lens
Notes:
Greg can help with this part

Function 2, testIntersect:
In:
Int, Int, Int
		X coordinate of the starting point of a ray, Y coordinate of the starting point of that 
same ray, Angle of that ray.
Out:
Bool, Int
True if the ray intersects with the lens at any point and false if it does not, The 
Exact distance away from the starting point of the ray to the point where it 
intersects the lens

Function 3, doLens:
	In:
Int, Int, Int
		X coordinate of the starting point of a ray, Y coordinate of the starting point of that 
same ray, Angle of that ray.
Out:
	Int, Int, Int
	X coordinate of the new (refracted) ray where it exits the lens, Y coordinate at 
that same point, angle of the new ray
