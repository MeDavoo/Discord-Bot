module.exports = {
	name: "poke",
	// Refer to typings.d.ts for available properties.
	async execute(message, args) {
	  const validGenerations = ["gen1", "gen2", "gen3"]; // list of valid generation inputs
	  const generationPrompt = `**Which generation of Pokemon would you like to play with?** [${validGenerations.join(", ")}]`;
	  var linkgif = "https://projectpokemon.org/images/normal-sprite/";
	  let { pg1name } = require("../../pokegen1.json")
	  let { pg2name } = require("../../pokegen2.json")
	  let { pg3name } = require("../../pokegen3.json")
	  var scores = {};
	  var scores2 = {};
	  var scores3 = {};
  
	  // prompt the user to choose the generation
	  message.reply(generationPrompt)
		.then(() => {
		  const filter = response => validGenerations.includes(response.content.toLowerCase());
		  message.channel.awaitMessages({ filter, max: 1, time: 5000, errors: ['time'] })
			.then(collected => {
			  const chosenGeneration = collected.first().content.toLowerCase(); // get the chosen generation
			  gameInProgress = true; // mark game as in progress
  
			  // start the corresponding game based on chosen generation
			  if (chosenGeneration === "gen1") {
				pk1();
			  } else if (chosenGeneration === "gen2") {
				pk2();
			  } else if (chosenGeneration === "gen3") {
				pk3();
			  }
			})
			.catch(() => {
			  message.reply("You didn't chose dummy! Try Again.");
			});
		});
  
	  function pk1() {
		randpokeg1 = pg1name[Math.floor(Math.random() * pg1name.length)];
		var randpickg1 = linkgif + randpokeg1 + ".gif";
  
		message.reply(randpickg1)
		  .then(() => {
			const filter = response => {
			  return randpokeg1 === response.content.toLowerCase();
			};
			message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
			  .then(collected => {
				const player = collected.first().author; // get the player who got the correct answer
				if (!scores[player]) {
				  // if the player's score is not yet initialized, set it to 0
				  scores2[player] = 0;
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
				pk1();
			  })
			  .catch(collected => {
				message.channel.send('**Loser! :x:**');
				message.channel.send("**ANSWER:** " + randpokeg1);
			  });
		  });
	  };

	  function pk2() {
		randpokeg2 = pg1name[Math.floor(Math.random() * pg2name.length)];
		var randpickg2 = linkgif + randpokeg2 + ".gif";
  
		message.reply(randpickg2)
		  .then(() => {
			const filter = response => {
			  return randpokeg2 === response.content.toLowerCase();
			};
			message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
			  .then(collected => {
				const player = collected.first().author; // get the player who got the correct answer
				if (!scores2[player]) {
				  // if the player's score is not yet initialized, set it to 0
				  scores2[player] = 0;
				}
				scores2[player]++; // increment the player's score
				message.channel.send(
				  `${collected.first().author} **got the correct answer! :white_check_mark:**`
				);
				message.channel.send(
				  `**SCORES:** ${Object.entries(scores2)
					.map(([key, value]) => `${key}: ${value}`)
					.join(", ")}`
				); // display the scores of all players
				pk2();
			  })
			  .catch(collected => {
				message.channel.send('**Loser! :x:**');
				message.channel.send("**ANSWER:** " + randpokeg2);
			  });
		  });
	  };

	  function pk3() {
		randpokeg3 = pg3name[Math.floor(Math.random() * pg3name.length)];
		var randpickg3 = linkgif + randpokeg3 + ".gif";
  
		message.reply(randpickg3)
		  .then(() => {
			const filter = response => {
			  return randpokeg3 === response.content.toLowerCase();
			};
			message.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })
			  .then(collected => {
				const player = collected.first().author; // get the player who got the correct answer
				if (!scores3[player]) {
				  // if the player's score is not yet initialized, set it to 0
				  scores3[player] = 0;
				}
				scores3[player]++; // increment the player's score
				message.channel.send(
				  `${collected.first().author} **got the correct answer! :white_check_mark:**`
				);
				message.channel.send(
				  `**SCORES:** ${Object.entries(scores3)
					.map(([key, value]) => `${key}: ${value}`)
					.join(", ")}`
				); // display the scores of all players
				pk3();
			  })
			  .catch(collected => {
				message.channel.send('**Loser! :x:**');
				message.channel.send("**ANSWER:** " + randpokeg3);
			  });
		  });
	  };

		
		
	}

	
};