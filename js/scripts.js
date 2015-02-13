var triangle = function(sideOne, sideTwo, sideThree) {
	
	if (sideOne + sideTwo <= sideThree ||
		sideTwo + sideThree <= sideOne ||
		sideThree + sideOne <= sideTwo) {
		return "not a valid triangle";
	}
	else if (sideOne === sideTwo  && sideTwo === sideThree) {
		return "equilateral";
	}
	else if (sideOne === sideTwo && sideOne !== sideThree ||
		sideTwo === sideThree && sideTwo !== sideOne ||
		sideThree === sideOne && sideThree !== sideOne) {
		return "isosceles";
	}
	else if (sideOne !== sideTwo && sideOne !== sideThree) {
		return "scalene"
	}
};
