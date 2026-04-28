"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function subscribe(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const honeypot = String(formData.get("website") ?? "");

  if (honeypot) {
    return { status: "success", message: "Merci, on te tient au courant." };
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return {
      status: "error",
      message: "On a besoin d'un e-mail valide pour t'envoyer l'invitation.",
    };
  }

  try {
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: "28997603-c40a-4493-a401-53b90684abf2",
    });

    console.log("[freshflow:beta-signup]", {
      email,
      at: new Date().toISOString(),
    });

    return {
      status: "success",
      message: "C'est noté. On t'envoie ton accès dès l'ouverture de la bêta.",
    };
  } catch (error) {
    console.error("[freshflow:beta-signup-error]", error);
    return {
      status: "error",
      message: "Une erreur s'est produite. Réessaie dans un instant.",
    };
  }
}