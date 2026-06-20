
export const WHATSAPP_NUMBER = "919594401718";

export function getWhatsAppUrl(message = "") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}