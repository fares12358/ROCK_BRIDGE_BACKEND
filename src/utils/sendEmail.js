// src/utils/sendEmail.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // or use your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // use your gmail sender
      pass: process.env.EMAIL_PASS, //use password app key
    },
  });

  await transporter.sendMail({
    from: `"sender name" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};

export default sendEmail;

