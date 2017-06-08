module.exports = function(robot) {
	robot.hear(/Hello!/, function(res) {
		return res.send("Hi there!");
	});
	robot.hear(/Pizza\?/, function(res) {
		return res.send("No thanks. I'm full.");
	});
}
