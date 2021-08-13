
const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'findhodson', fromMe: true, desc: 'random anime image'}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.hizliresim.com/j2c880s.jpg";
    r_text[1] = "https://i.hizliresim.com/jj0bzrl.jpg";
    r_text[2] = "https://i.hizliresim.com/55g6n2t.jpg";
    r_text[3] = "https://i.hizliresim.com/bt67w23.jpg";
    

    var i = Math.floor(79*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Anime downloaded by Meenooty💁🏻‍♀️'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'anime', fromMe: false, desc:'random anime image '}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.hizliresim.com/j2c880s.jpg";
    r_text[1] = "https://i.hizliresim.com/jj0bzrl.jpg";
    r_text[2] = "https://i.hizliresim.com/55g6n2t.jpg";
    r_text[3] = "https://i.hizliresim.com/bt67w23.jpg";
    

    var i = Math.floor(79*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Anime downloaded by Meenooty💁🏻‍♀️'})

    }));
}
