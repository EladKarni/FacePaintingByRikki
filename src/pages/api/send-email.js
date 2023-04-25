import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, phone, date, eventType, email, location, time, textOk, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // format email message
  let formattedMessage = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Neighborhood/Town:</strong> ${location}</p>
    <p><strong>Event Type:</strong> ${eventType}</p>
    <p><strong>Is it OK to Text?:</strong> ${textOk}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    to: process.env.RECIPIENT_EMAIL, // list of receivers
    subject: "New Message from Contact Form", // Subject line
    html: formattedMessage, // html body
  });

  res.status(200).json({ message: "Email sent successfully" });
}
