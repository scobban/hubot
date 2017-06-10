// Alexander Labianca	labianca
// Erica Gilbert	erica
// John W. Gennell	jgennell
// Michael Younkie	myounkie
// Oliver Gillette	oli-g
// Scott Cobban	scobban
// Trevor Albrecht	albrechs
// Tristan Cooper	tcooper

module.exports = function(kitt) {
	kitt.respond(/.*some music.*/, function(music) {
		return music.send("What kind of music? Dance? Lounge? Classical? Or would you prefer something else?");
	});
	kitt.respond(/.*[Dd]ance*/, function(dance) {
		return dance.send("Nice. I think you'll like these sweet summer dance tracks. https://soundcloud.com/arlenebr/sets/summer-dance");
		
	});
	kitt.respond(/.*[Ll]ounge*/, function(lounge) {
		return lounge.send("Lounge. Great.");
		
	});
	kitt.respond(/.*[Cc]lassical*/, function(classical) {
		return classical.send("Classical. Wonderful.");
		
	});
	kitt.respond(/.*[Ss]omething [Ee]lse*/, function(random) {
		return random.send("My choice. Wonderful.");
		
	});
}

// dance: https://soundcloud.com/arlenebr/sets/summer-dance
// lounge: https://soundcloud.com/djh2-1/sets/ds-lounge
// classical: https://soundcloud.com/hanangobran/sets/classic

// random1: Romantic Arabic Songs https://soundcloud.com/hanangobran/sets/romantic-arabic-songs
// random2: Scott's Band https://soundcloud.com/focsmusic/sets/six
// random3: Wing Sings https://soundcloud.com/rick123123/tracks


// "Hey @kitt, I want to listen to some music"

// 	"Ok @name. What kind do you want? Rock? Pop? Indie? Want me to recommend something?"

// if "Rock/Pop/Indie"

// 	Here's some (genre) for you. I hope you like it.

// if "You recommend something"

// 	Ok. You should checkout (playlist).

// if "I'm not sure"
