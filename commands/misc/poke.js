module.exports = {
	name: "poke",
	// Refer to typings.d.ts for available properties.
	async execute (message, args) {
		var linkgif = "https://projectpokemon.org/images/normal-sprite/";
		let { pg1name } = require("../../pokegen1.json")
		var score = 0
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
							message.channel.send(`${collected.first().author} **got the correct answer!**`);
							score++;
							message.channel.send("**SCORE:** " + score);
							pk();
						})
						.catch(collected => {
							message.channel.send('You lose!');
							message.channel.send("**ANSWER:** " + randpokeg1);
						});
				});
		};
		
	}

	
};