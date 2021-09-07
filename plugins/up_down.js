const { MessageType, Mimetype } = require("@adiwajshing/baileys");
const Asena = require("../Utilis/events");
// const config = require('../config');
const moment = require("moment");
const {
  getName,
  getBuffer,
  getJson,
  IdentifySong,
} = require("../Utilis/download");
const { emoji } = require("../Utilis/Misc");
const { audioCut } = require("../Utilis/fFmpeg");

Asena.addCommand(
  { pattern: "find", fromMe: true, desc: "Identify song." },
  async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.audio && !message.reply_message.video)
    )
      return await message.sendMessage("*Reply to a audio.*");
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "find"
    );
    let buff = await audioCut(location, 0, 15, "findo");
    const data = await IdentifySong(buff);
    if (!data) return;
    if (!data.status) return await message.sendMessage("*Not Found*");
    let result =
      "```" +
      `Title    : ${data.data.title}\nArtists  : ${data.data.artists}
Genre    : ${data.data.genre}\nAlbum    : ${data.data.album}\nReleased : ${data.data.release_date}` +
      "```";
    return await message.sendMessage(result, { quoted: message.quoted });
  }
);
