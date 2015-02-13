describe('triangle', function() {
	it("tells if all three sides are equal", function() {
		expect(triangle(3, 3, 3)).to.equal("an Equilateral Triangle");
	});
	it("tells if the triangle is isosceles", function () {
		expect(triangle(5, 5, 2)).to.equal("an Isosceles Triangle");
	});
	it("tells if the triangle is a scalene", function () {
		expect(triangle(5, 7, 8)).to.equal("a Scalene Triangle");
	});
	it("tells if its not a valid triangle", function () {
		expect(triangle(2, 2, 8)).to.equal("Not a Valid Triangle");
	});
});
