const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1203010633:AAEHRM6vkLvK_uA9ZqWICdtXWryl5rqqX7c';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/start[whatever]"
bot.onText(/\/start?(.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    bot.sendMessage(msg.chat.id, 'Hi, I\'m Ready...');
});

// Matches "/about"
bot.onText(/\/about?(.+)/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'I\'m Tajriy Robot Asistant');
});

// Listen for any kind of message.
// There are different kinds of messages
bot.on('message', (msg) => {
    const msgText = msg.text.toString().toLowerCase();
    let replyMsg = null;

    // send a message to the chat acknowledging receipt of their message

    // say HI
    if (msgText.includes('hi')) {
        replyMsg = `Hello ${msg.from.first_name}...`;
    }

    // say how are you
    if (msgText.includes('how are you')) {
        replyMsg = "I'm fine and you?";
    }

    // say thanks
    if (msgText.includes('thank')) {
        replyMsg = "Your Welcome";
    }

    // say good
    if (msgText.includes('fine')) {
        replyMsg = "Good...!";
    }

    if (replyMsg) {
        bot.sendMessage(msg.chat.id, replyMsg);
    }
});
