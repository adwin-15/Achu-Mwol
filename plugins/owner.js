const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://avatars.githubusercontent.com/u/87895173?v=4";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ```Alexa by Muhammed Jasim```
*owner number wa.me/911111111111*
*for bot related videos: https://youtube.com/Jzmods*
*instagram  : https://www.instagram.com/jz_mods*
*githublink       https://github.com/Jasimjz/Alexa*
*audio commads    https://github.com/Jazimjz/Alexa/tree/master/uploads*
*sticker commads  https://github.com/Jazimjz/Alexa/tree/master/uploads*
`}) 

}));
