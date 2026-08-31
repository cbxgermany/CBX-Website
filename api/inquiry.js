const nodemailer = require('nodemailer');

const SMTP_USER = 'info@cbxgermany.de';
const MAX_LEN = 4000;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { model, message } = req.body || {};

  if (typeof model !== 'string' || !model.trim() || model.length > 200) {
    res.status(400).json({ error: 'Missing or invalid creator selection.' });
    return;
  }
  if (typeof message !== 'string' || !message.trim() || message.length > MAX_LEN) {
    res.status(400).json({ error: 'Please add a short message.' });
    return;
  }
  if (!process.env.SMTP_PASSWORD) {
    res.status(500).json({ error: 'Server is not configured to send email.' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.de',
      port: 587,
      secure: false,
      auth: { user: SMTP_USER, pass: process.env.SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: SMTP_USER,
      to: SMTP_USER,
      replyTo: SMTP_USER,
      subject: 'Inquiry: ' + model,
      text: message,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('inquiry send failed', err);
    res.status(502).json({ error: 'Could not send the message. Please try again later.' });
  }
};
