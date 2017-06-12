// Description:
//   Divide the list of classmates evenly into 2, 4, or 8 teams 
//   and then display the team groups (note: breaking them up into 8 teams
//   just lists everyone on their own team)

// Commands:
//   @kitt <integer> teams 

// Author:
//   scobban

module.exports = function(robot) {
    robot.respond(/(.*) teams?/, function(team) {

        var teamCount;
        teamCount = team.match[1];

        var classmates = ["@labianca", "@erica", "@jgennell", "@myounkie", "@oli-g", "@scobban", "@albrechs", "@tcooper"];
        var group = [];

        if (teamCount == 2 || teamCount == 4 || teamCount == 8) {
            var loops = classmates.length / teamCount;
            for (var i = 0; i < teamCount; i++) {
                group.push([]);
            }
            for (var i = 0; i < group.length; i++) {
                var currentGroup = group[i];
                for (var j = 0; j < loops; j++) {
                    var newCount = classmates.length;
                    var spot = Math.floor(Math.random() * newCount);
                    var currentPerson = classmates[spot];
                    currentGroup.push(currentPerson);
                    robot.messageRoom(currentPerson, "You're on team " + (i + 1));
                    classmates.splice(spot, 1);
                }
                team.send("*Team " + (i + 1) + "*: " + currentGroup.join(" ") + "\n");
            }
        } else {
            return team.send("I can only create 2, 4, or 8 teams. That's all that the computer can handle.");
        }
    })
}
