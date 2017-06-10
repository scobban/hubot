// Alexander Labianca	labianca
// Erica Gilbert	erica
// John W. Gennell	jgennell
// Michael Younkie	myounkie
// Oliver Gillette	oli-g
// Scott Cobban	scobban
// Trevor Albrecht	albrechs
// Tristan Cooper	tcooper

module.exports = function(robot) {
    robot.respond(/(.*) teams?/, function(team) {
        var teamCount;
        teamCount = team.match[1];

        var classmates = ["Alx", "Erca", "Jhn", "Michl", "Olivr", "Scott", "Trvor", "Trstan"];
        var group = [];

        if (teamCount < 2 || teamCount > classmates.length) {

        	return team.send("Please enter a number between 2 and " + classmates.length + ".");

        } else if (teamCount % 2 == 0 && teamCount % 3 !== 0) {

            var loops = classmates.length / teamCount;

            for (var i = 0; i < teamCount; i++) {
                group.push([]);
            }

            for (var i = 0; i < group.length; i++) {
                var currentGroup = group[i];

                for (var j = 0; j < loops; j++) {
                    var newCount = classmates.length;
                    var spot = Math.floor(Math.random() * newCount);
                    currentGroup.push(classmates[spot]);
                    classmates.splice(spot, 1);
                }

                team.send("*Team " + (i + 1) + "*: " + currentGroup.join(" ") + "\n");
            }
        } else {
            return team.send("");
        }
    })
}
