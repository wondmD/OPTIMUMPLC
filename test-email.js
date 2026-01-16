const nodemailer = require('nodemailer');

async function main() {
  console.log('Starting SMTP test...');
  let transporter = nodemailer.createTransport({
    host: "mail.optimumlogisticsplc.com",
    port: 587,
    secure: false, 
    auth: {
      user: "contact@optimumlogisticsplc.com",
      pass: "eP5MgCpX1xJ^Z#3U",
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true,
    logger: true,
    connectionTimeout: 10000
  });

  try {
    console.log('Attempting to send test email...');
    let info = await transporter.sendMail({
      from: '"Test" <contact@optimumlogisticsplc.com>',
      to: "contact@optimumlogisticsplc.com",
      subject: "Test Email",
      text: "Hello, this is a test email.",
    });
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

main();
