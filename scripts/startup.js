module.exports = function(robot) {
	// say Hello! to Kitt
	robot.hear(/Hello!/, function(res) {
		return res.send("Hi there!");
	});
	// ask Kitt "Pizza?"
	robot.hear(/Pizza\?/, function(res) {
		return res.send("No thanks. I'm full.");
	});
}
