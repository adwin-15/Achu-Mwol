const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'help', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://avatars.githubusercontent.com/u/87913417?v=4";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Meenakshi Message❤*

*Hi I am Meenakshi,a whatsapp chat bot! Since i'm a chat bot,don't try to call me WhatsApp or send me spam messages! Or if you get noticed by the Bot admin you will be prevented from using this whatsapp Bot.Sending your photo and video to make stickers is at your own risk! We are not responsible for any misuse of this bot*

`}) 

}));
