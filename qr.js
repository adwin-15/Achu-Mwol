/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2123, 8]

  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('vishnu-memanakizhakathil')}${chalk.green.bold('-Meenakshi')}
${chalk.white.italic('Meenakshi code recipient')}
${chalk.blue.bold('ℹ️  Connecting Meenakshi... Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('Meenakshi QR Code: '),
      'Meenakshi;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'Meenakshi;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ Meenakshi Successfully Scanned✅️*\n*▪️Thanks For Choosing Meenakshi💞*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ Meenakshi Successfully Scanned✅️*\n*▪️Thanks For Choosing Meenakshi💞*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "QR CODE COPY CHEYAAN PATTILA DNNU THONNUNU, NINGALUDE WHATSAPP CHECK CHEYYU ATHIL NJAN QR CODE AYACHITTUND!\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
