// Description:
//   Create a random band name by randomly combining
//   words from an array.

// Commands:
//   @kitt band name

// Author:
//   scobban

module.exports = function(robot) {
	robot.respond(/\bband name\b/ig, function(bandname){
		var anyword = ["Vixen", "Tugboat", "Puppet", "Saddle Bag", "Spork", "Scorpion", "Pepper Mill", "Sneaker", "Scissor", "Chauffeur", "Valet", "Referee", "Manatee", "Monkeywrench", "Skater", "Lampshade", "Cream Cheese", "Jelly Bean", "Bocce Ball", "Paper Airplane", "Tennis", "Elbow"];
		var ran1 = Math.floor(Math.random() * (anyword.length - 1)) + 1;
		var ran2 = Math.floor(Math.random() * (anyword.length - 1)) + 1;
		var rockHand = 'https://pbs.twimg.com/profile_images/1231142704/YouRockHand_02-25-57-146_normal.jpg';
		if (ran1 === ran2) {
			return bandname.send("Simple! 'The " + anyword[ran1] + " 9'. Boom! :rocket:");
		} else {
			return bandname.send("How about 'The " + anyword[ran1] + " " + anyword[ran2] + " Dilemma'. :rocket:");
		}
	});
}
