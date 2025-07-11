export const generateWhatsAppMessage = (message: string): string => {
  return encodeURIComponent(message);
};

export const openWhatsApp = (number: string, message: string): void => {
  const whatsappUrl = `https://wa.me/${number}?text=${generateWhatsAppMessage(message)}`;
  window.open(whatsappUrl, "_blank");
};
