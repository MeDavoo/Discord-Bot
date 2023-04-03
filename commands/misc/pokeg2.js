module.exports = {
	name: "pokeg2",
	// Refer to typings.d.ts for available properties.
	async execute (message, args) {
		var linkgif = "https://projectpokemon.org/images/normal-sprite/";
		let { pg2name } = require("../../pokegen2.json")
		var scores = {}; // initialize an empty scores object
		pk();
		
		function pk()
		{
			randpokeg2 = pg2name[Math.floor(Math.random() * pg2name.length)];
			var randpickg2 = linkgif + randpokeg2 + ".gif";
	
			message.reply(randpickg2)
				.then(() => {
					const filter = response => {return randpokeg2 === response.content.toLowerCase()};
					message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
						.then(collected => {

							const player = collected.first().author; // get the player who got the correct answer
							if (!scores[player]) {
							  // if the player's score is not yet initialized, set it to 0
							  scores[player] = 0;
							}
							scores[player]++; // increment the player's score
							message.channel.send(
								`${collected.first().author} **got the correct answer! :white_check_mark:**`
							);
							message.channel.send(
							  `**SCORES:** ${Object.entries(scores)
								.map(([key, value]) => `${key}: ${value}`)
								.join(", ")}`
							); // display the scores of all players
							pk();
						})
						.catch(collected => {
							message.channel.send('**Loser! :x:**');
							message.channel.send("**ANSWER:** " + randpokeg2);
						});
				});
		};

		
		
	}

	
};