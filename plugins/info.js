let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 INFO BOT 〙
*▌║*
*▌║✙* Dibuat dengan bahasa javascript via NodeJs
*▌║✙* Rec: maslent yt
*▌║✙* Script: @Nurotomo
*▌║✙* Instagram: @maslent11
*▌║✙* YouTube: Maslent YT
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 Thanks To 〙
*▌║✙* Nurotomo
*▌║✙* MfarelS
*▌║✙* ST4RZ
*▌║✙* MASLENT
*▌║✙* Dan kawan yang lain :)
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 DONASI 〙 ═
*▌║✙* Indosat: 0816-5466-368
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*
*▌║*>Request? Wa.me/62816546638
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 ICHI BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

