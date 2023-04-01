module.exports = {
	name: "pokeg1",
	// Refer to typings.d.ts for available properties.
	async execute (message, args) {
		var linkgif = "https://projectpokemon.org/images/normal-sprite/";
		let { pg1name } = require("../../pokegen1.json")
		var scores = {}; // initialize an empty scores object
		pk();
		
		function pk()
		{
			randpokeg1 = pg1name[Math.floor(Math.random() * pg1name.length)];
			var randpickg1 = linkgif + randpokeg1 + ".gif";
	
			message.reply(randpickg1)
				.then(() => {
					const filter = response => {return randpokeg1 === response.content.toLowerCase()};
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
							message.channel.send("**ANSWER:** " + randpokeg1);
						});
				});
		};

		
		
	}

	
};