module.exports = function(robot) {
	robot.respond(/\b(band|name)\b/ig, function(bandname){
		var anyword = ["Vixen", "Tugboat", "Puppet", "Saddle Bag", "Spork", "Adapter", "Pepper Mill", "Calzone", "Waterslide", "Chauffeur", "Valet", "Referee", "Manatee", "Monkeywrench", "Carabiner", "Lampshade", "Cream Cheese", "Jelly Bean", "Bocce Ball", "Paper Airplane", "Eucalyptus", "Telephone Booth"];
		var ran1 = Math.floor(Math.random() * (anyword.length - 1)) + 1;
		var ran2 = Math.floor(Math.random() * (anyword.length - 1)) + 1;
		if (ran1 === ran2) {
			return bandname.send("Simple! '" + anyword[ran1] + "s 7'. Boom!");
		} else {
			return bandname.send("How about 'The " + anyword[ran1] + " " + anyword[ran2] + " Dilemma'.");
		}
	});
}
