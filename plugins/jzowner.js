const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://avatars.githubusercontent.com/u/87913417?v=4";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Vishnu Mkz*
*owner number wa.me/14402226666*
*instagram  : https://www.instagram.com/jz_mods?r=nametag*
*JZ MODS : https://youtube.com/c/JZMODS*
*githublink       https://github.com/Jasimjz/Alexa*
*audio commads    https://github.com/Jasimjz/Alexa/tree/master/uploads*
*sticker commads  https://github.com/Jasimjz/Alexa/tree/master/uploads*
`}) 

}));
