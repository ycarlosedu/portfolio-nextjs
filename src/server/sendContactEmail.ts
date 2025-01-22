"use server";
import nodemailer from "nodemailer";

export type ContactEmailValues = {
  name: string;
  email: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: process.env.SMTP_SERVER_USERNAME,
    pass: process.env.SMTP_SERVER_PASSWORD
  }
});

export async function sendContactEmail(values: ContactEmailValues) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      process.env.SMTP_SERVER_USERNAME,
      process.env.SMTP_SERVER_PASSWORD,
      error
    );
    return JSON.parse(JSON.stringify({ error, status: 500 }));
  }

  try {
    const info = await transporter.sendMail({
      from: `${values.name} <${values.email}>`,
      to: [process.env.SITE_MAIL_RECEIVER!],
      subject: "Nova mensagem de contato em seu site",
      html: `<div>
      <h1>Olá Carlos!</h1>
      <p>
        Você recebeu uma nova mensagem de ${values.name} (${values.email}):
      </p>
      <p>${values.message}</p>
    </div>`
    });

    return JSON.parse(JSON.stringify(info));
  } catch (error) {
    return JSON.parse(JSON.stringify({ error, status: 500 }));
  }
}
