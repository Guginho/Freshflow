"use server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  console.log("[freshflow:beta-signup]", {
    email,
    at: new Date().toISOString(),
  });

  return {
    status: "success",
    message: "C'est noté. On t'envoie ton accès dès l'ouverture de la bêta.",
  };
}
