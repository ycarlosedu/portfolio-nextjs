"use server";
import { ContactEmailValues } from "@/server/sendContactEmail";

export function ContactEmailTemplate({
  name,
  email,
  message
}: ContactEmailValues) {
  return (
    <div>
      <h1>Olá Carlos!</h1>
      <p>
        Você recebeu uma nova mensagem de {name} ({email}):
      </p>
      <p>{message}</p>
    </div>
  );
}
