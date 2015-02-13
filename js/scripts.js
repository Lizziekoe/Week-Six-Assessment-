var triangle = function(sideOne, sideTwo, sideThree) {
	
	if (sideOne + sideTwo <= sideThree || sideTwo + sideThree <= sideOne || sideThree + sideOne <= sideTwo) {

		return "Not a Valid Triangle";
	}
	else if (sideOne === sideTwo  && sideTwo === sideThree) {

		return "an Equilateral Triangle";
	}
	else if (sideOne === sideTwo && sideOne !== sideThree || sideTwo === sideThree && sideTwo !== sideOne || sideThree === sideOne && sideThree !== sideOne) {

		return "an Isosceles Triangle";
	}
	else {
    
		return "a Scalene Triangle"
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

