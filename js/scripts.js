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


$(document).ready(function() {
	$("form#triangleForm").submit(function(event) {
    var sideOne = parseInt($("input#side1").val());
    var sideTwo = parseInt($("input#side2").val());
    var sideThree = parseInt($("input#side3").val());

    var results = triangle(sideOne, sideTwo, sideThree)
    $("#results").show()
    $("#triangleType").text(results);


	 event.preventDefault();
	});
});