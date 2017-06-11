// Description:
//   Basic script to say hi/hello to @kitt
//   and get a response back of "Hi there!"
//
//   Basic script where Kitt responds if it hears
//   the word "pizza".

// Commands:
//   @kitt hi
//   @kitt hello
//
//   "pizza"

// Author:
//   scobban

module.exports = function(robot) {
	// say Hello! to Kitt
	robot.respond(/hi|hello/i, function(hi) {
		return hi.send("Hi there!");
	});
	// ask Kitt "Pizza?"
	robot.hear(/\bpizza\b/i, function(res) {
		var donut = "https://static.simpsonswiki.com/images/thumb/9/9b/Donut.png/40px-Donut.png";
		return res.send("No thanks. I'm full. \n " + donut);
	});
}
