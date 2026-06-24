export const WHATSAPP_NUMBER = "919594401718";

/**
 * Builds a secure WhatsApp wa.me redirect URL with pre-filled messages.
 * @param message The text message to pre-populate.
 */
export function getWhatsAppUrl(message = "") {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const base = `https://wa.me/${cleanNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
