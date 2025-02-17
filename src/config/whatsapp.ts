export const WHATSAPP_CONFIG = {
  phoneNumber: '+558431901700',
  messages: {
    default: 'Olá! Gostaria de entrar em contato para saber mais sobre os serviços.',
    budget: 'Olá! Gostaria de solicitar um orçamento gratuito para um site.',
    plans: {
      mei: (price: number) => `Olá! Gostaria de saber mais sobre o plano MEI de R$${price}/mês`,
      pro: (price: number) => `Olá! Tenho interesse no plano PRO de R$${price}/mês. Podem me ajudar?`,
      seo: (price: number) => `Olá! Quero conhecer melhor o plano SEO de R$${price}/mês. Aguardo mais informações!`,
    },
  },
};

export const sendWhatsAppMessage = (message: string) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, '_blank');
};
