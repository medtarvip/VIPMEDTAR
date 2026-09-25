function escapeMarkdownV2(text) {
    return text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1'); 
}

exports.noToken = "The bot token cannot be empty, please create a bot via https://t.me/BotFather";

exports.first_chat = (botname, pushname) => {
    return escapeMarkdownV2(`Hi bro ${pushname}, 𓆩♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪
مرحبا بك في بوت كراش واتساب الخاص بي @med_tar
➤ 𓆩🪀𓆪『قوه』 『تدمير』👨‍💻 🇲🇷
➤ 𓆩🪀𓆪 مطور البوت 『𓆩♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪』

اضغط على /menu للوصول 🦠👨‍💻

Welcome to my WhatsApp crash bot @med_tar
The strongest and best WhatsApp crash (burn) version 🔥 𓆩♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪

To access the menu, click on…

/menu `);
};