global.ownernomer = "22242203253"
global.dev = ["22242203253","22242203253","22242203253", "22242203253","22242203253","22242203253"]
global.ownername = "𓆩 ♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪"
global.ytname = "𓆩 ♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪"
global.socialm = "GitHub: DGXeon"
global.location = "Egypt, menofia, Mauritania"

global.ownernumber = '22242203253'  //creator number
global.ownername = '𓆩 ♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪' //owner name
global.botname = '𓆩 ♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'BODY ⚉\n\nContact: 22242203253'

//console view/theme
global.themeemoji = '🪀'
global.wm = "𓆩 ♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vb8pXI9AInPbwdJ1mi3o'
//global.idch = '120363394622944723@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nTelegram: @B_o_d_a1FR\nWhatsApp: +22242203253`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @ModyOffc\nTelegram: @B_o_d_a1FR\nWhatsApp: +22242203253`,
}

module.exports = {

    banner: [

        "201507151697@s.whatsapp.net",

        "201507151697@s.whatsapp.net",

        "201507151697@s.whatsapp.net",

        "919366316018@s.whatsapp.net",

        "919485490229@s.whatsapp.net",

        "919402104403@s.whatsapp.net"

    ]

};

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})