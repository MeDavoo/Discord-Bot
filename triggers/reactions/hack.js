/**
 * @file Sample Trigger command.
 * @author Naman Vrati
 * @since 2.0.0
 * @version 3.2.2
 */

// For now, the only available property is name array. Not making the name array will result in an error.

/**
 * @type {import('../../typings').TriggerCommand}
 */
module.exports = {
	name: ["hack"],

	execute(message, args) {
		// Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.

		message.reply({
			content: "Hacking your computer...please wait",
		});
		message.channel.send({
			content: "3...code:x&_-é_çéà&",
		});
		message.channel.send({
			content: "2...code:x&tpoozlens_çéà&",
		});
		message.channel.send({
			content: "1...camera:xxxd-éçéyà&",
		});
		message.channel.send({
			content: "I've hacked your camera here a picture of you right now:",
		});
		message.channel.send({
			content: "https://imgur.com/CFgn4rp",
		});
	},
};
