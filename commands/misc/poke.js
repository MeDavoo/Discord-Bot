module.exports = {
	name: "poke",
	// Refer to typings.d.ts for available properties.
	async execute (message, args) {
		let { pg1name } = require("../../pokegen1.json")
		var linkgif = "https://projectpokemon.org/images/normal-sprite/";
		var randpokeg1 = pg1name[Math.floor( Math.random() * pg1name.length)];
        var correctAnswer = randpokeg1;
        var randpickg1 = linkgif + randpokeg1 + ".gif";
        message.channel.send(randpickg1);
		const filter = m => m.author.id === message.author.id;
        await message.channel.awaitMessages(filter, { max: 1, time: 5000, errors: ['time', 'max']});
		message.channel.send(correctAnswer);
	},
};