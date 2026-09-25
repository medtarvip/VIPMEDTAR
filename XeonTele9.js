process.on('uncaughtException', console.error);
require("./settings");
const { Telegraf, Context, Markup } = require('telegraf');
const { message, editedMessage, channelPost, editedChannelPost, callbackQuery } = require("telegraf/filters");
const { toFirstCase, isNumber, formatp, parseMention, resize, getRandom, generateProfilePicture, getCase, runtime, FileSize, h2k, makeid, kyun, randomNomor, jsonformat, isUrl, fetchJson, sleep, getBuffer } = require("./lib/myfunc2");
const { formatSize } = require("./lib/myfunc3");
const chalk = require('chalk');
const fs = require('fs');
const fetch = require('node-fetch');
const os = require('os');
const speed = require('performance-now');
const util = require('util');
const axios = require('axios');
const path = require('path');
const { simple } = require('./lib/myfunc');

global.connectLock = global.connectLock || new Set();

module.exports = XeonBotInc = async (XeonBotInc, bot) => {
    try {
        const body = XeonBotInc.message.text || XeonBotInc.message.caption || '';
        const isCmd = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#/$%^&.+-,\\\©^]/.test(body);
        const args = body.trim().split(/ +/).slice(1);
        const text = q = args.join(" ");
        const user = simple.getUserName(XeonBotInc.message.from);
        const pushname = user.full_name;
        const userId = XeonBotInc.message.from.id.toString(); 
        
        // التحقق من المالك (تأكد أن OWNER معرف في settings.js)
        const isCreator = OWNER[0].replace("https://t.me/", '') == XeonBotInc.update.message.from.username;
        const from = XeonBotInc.message.chat.id;
        const prefix = isCmd ? body[0] : '';
        const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';

        // دالة الرد
        const reply = async (teks) => {
            return XeonBotInc.reply(teks);
        }

        if (XeonBotInc.message && isCmd) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body)));
        }
        
        switch (command) {
            // --- الربط (Connect) مع الشرح ---
            case 'connect': {
                if (!text) return reply(`📌 ركز ياصاحبي عشان تفهم:\nالامر ده بيبعتلك كود ربط عشان تشغل البوت علي رقم واتساب.\n\nمثال: ${prefix}connect 2012xxxx`);
                
                if (global.connectLock.has(userId)) return reply(`⏳ طلب اتصال شغال بالفعل...`);
                
                const sanitizedNumber = text.replace(/\D/g, '');
                const Xreturn = sanitizedNumber + "@s.whatsapp.net";
                const pairingPath = `./lib2/pairing/${Xreturn}`;
                const pairingFile = `${pairingPath}/pairing.json`;

                global.connectLock.add(userId);
                try {
                    if (fs.existsSync(pairingPath)) fs.rmSync(pairingPath, { recursive: true, force: true });
                    // تفريغ الكاش لمنع تعليق الجلسة القديمة على Railway
                    delete require.cache[require.resolve('./rentbot.js')];
                    const startpairing = require('./rentbot.js');
                    await startpairing(Xreturn);

                    let waited = 0;
                    while (!fs.existsSync(pairingFile) && waited < 15000) {
                        await sleep(1000);
                        waited += 1000;
                    }

                    if (fs.existsSync(pairingFile)) {
                        const cuObj = JSON.parse(fs.readFileSync(pairingFile, 'utf-8'));
                        const pairingCode = cuObj.code;

                        // إرسال الرسالة مع زر النسخ المباشر بنقرة واحدة
                        await XeonBotInc.telegram.sendMessage(from, `✅ *تم إنشاء كود الربط بنجاح*\n\n🔑 الكود: \`${pairingCode}\`\n\n⏳ اضغط على الزر بالأسفل لنسخ الكودً:`, {
                            parse_mode: 'Markdown',
                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        { 
                                            text: "♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ ", 
                                            copy_text: { text: pairingCode } 
                                        }
                                    ]
                                ]
                            }
                        });
                    } else {
                        reply("❌ فشل إنشاء الكود، جرب مرة أخرى");
                    }
                } catch (e) {
                    console.error(e);
                    reply("❌ حدث خطأ داخلي أثناء توليد الكود");
                } finally {
                    global.connectLock.delete(userId);
                }
            }
            break;

            // --- حذف الاتصال (Disconnect) مع الشرح ---
            case 'delconnect': case 'disconnect': {
                if (!text) return reply(`📌 ركز ياصاحبي عشان تفهم:\nالامر ده بيمسح جلسة الربط لو الشخص عايز يربط رقم جديد.\n\nمثال: ${prefix}${command} 2012xxxx`);
                
                const sanitizedNumber = text.replace(/\D/g, '');
                const Xreturn = sanitizedNumber + "@s.whatsapp.net";
                const pairingPath = `./lib2/pairing/${Xreturn}`;

                if (fs.existsSync(pairingPath)) {
                    fs.rmSync(pairingPath, { recursive: true, force: true });
                    reply(`✅ تم حذف جلسة الرقم ${sanitizedNumber} بنجاح.`);
                } else {
                    reply(`⚠️ الرقم ده ملوش جلسة ربط اصلا عشان امسحها.`);
                }
            }
            break;

            // --- المنيو ---
            case 'menu': case 'start': case 'back!': {
                const totalMem = os.totalmem();
                const usedMem = totalMem - os.freemem();
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                
                const epicMenu = `
❐═══════════════════❐
║    ♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ ║
║HELLO ~ 『مرحبا تم تطويري بواسطة  ║♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡نورت شاتي 💘』
❐═══════════════════❐
┃
┃『👑 ROOT LEGENDS』
┃⚡ 『@med_tar 🔥 المالك ~   ┃♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡  』
┃⚡ 『@med_tar       💀 ♕ المطور ┃♕』
┃⚡ HELLO『تم تطويري ب احترافية BY ~  ┃♕ᬼ𝐌𝐄𝐃𝐓𝐀R♛⃝꯭⃡ 』
┃
┃📊 SYSTEM PULSE
┃RAM: ${formattedUsedMem} 
┃BYG:  ${formattedTotalMem}
❐━━━━━━━━━━━━━━━━━━━❐
┃ 𓆩 ♕ᬼ𝐌𝐄𝐃𝐓𝐀𝐑♛⃝꯭⃡ 𓆪
┃🇲🇷 OWNER MR 
❐━━━━━━━━━━━━━━━━━━━❐
┃✈️ /connect     → ربط الرقم 
┃❌ /delconnect  → حذف ربط الرقم 
┃⚠️ WARNIN اضف الرقم مع رمز الدولة ┃NUMER بدون + example 22242XX
❐━━━━━━━━━━━━━━━━━━━❐`;
                
                if (global.ppp) {
                    await XeonBotInc.replyWithPhoto(global.ppp, { caption: epicMenu });
                } else {
                    await reply(epicMenu);
                }
            }
            break;

            case 'runtime':
                reply(`🚀 البوت يعمل منذ: ${runtime(process.uptime())}`);
            break;
        }
    } catch (e) {
        console.error("CRITICAL ERROR:", e);
    }
}
