const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "http://imgur.com/a/TT1a8Ol";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*✰ 𝑬𝒅𝒘𝒊𝒏 𝑺𝒉𝒂𝒋𝒖 ✰*
*owner number wa.me/919072719401*
*instagram  : https://www.instagram.com/adwin_15?r=nametag*
githublink       https://github.com/adwin-15/Achu-Mwol*
*audio commads    https://github.com/adwin-15/Achu-Mwol/tree/master/uploads*
*sticker commads     https://github.com/adwin-15/Achu-Mwol/tree/master/uploads*
`}) 

}));
