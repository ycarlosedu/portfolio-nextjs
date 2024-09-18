"use server";

import { ContactEmailTemplate } from "@/components/email/contact";
import { Resend } from "resend";

export type ContactEmailValues = {
  name: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(values: ContactEmailValues) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${values.name} <${values.email}>`,
      to: ["silvacarlosoliveira@outlook.com"],
      subject: "Nova mensagem de contato em seu site",
      react: ContactEmailTemplate(values)
    });

    if (error) {
      return JSON.parse(JSON.stringify({ error, status: 500 }));
    }

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return JSON.parse(JSON.stringify({ error, status: 500 }));
  }
}
