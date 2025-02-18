import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _categories = [
  { label: 'Marketing', path: '' },
  { label: 'Comunidade', path: '' },
  { label: 'Tutoriais', path: '' },
  { label: 'Negócios', path: '' },
  { label: 'Gestão', path: '' },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    'Desde o lançamento do nosso novo site com a Bolt 360, nossa taxa de conversão aumentou 40%. A equipe realmente entende como gerar resultado através da presença digital!',
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
    link: 'https://www.facebook.com/bolt360assessoria',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
    link: 'https://www.instagram.com/bolt360assessoria',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
    link: 'https://br.linkedin.com/company/bolt-360',
  }
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'pensar_clube',
  'smart',
  'pegado',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [
  {
    id: _mock.id(0),
    question: 'Qual o prazo de entrega de um site?',
    answer: 'O prazo de entrega varia de acordo com a complexidade do projeto. Para landing pages e sites institucionais simples, entregamos em 15-20 dias. Projetos mais complexos, com e-commerce ou integrações específicas, podem levar de 30 a 45 dias. Todo o processo inclui fase de planejamento, design, desenvolvimento, testes e ajustes finais.'
  },
  {
    id: _mock.id(1),
    question: 'Como funciona o suporte pós-lançamento?',
    answer: 'Oferecemos 30 dias de suporte técnico gratuito após o lançamento, incluindo correções de bugs e ajustes necessários. Após esse período, disponibilizamos planos de manutenção mensal que incluem: atualizações de segurança, backup regular, monitoramento de performance, suporte por email/telefone e pequenas alterações de conteúdo. Nosso time está disponível em horário comercial para garantir o funcionamento adequado do seu site.'
  },
  {
    id: _mock.id(2),
    question: 'Meu site será otimizado para dispositivos móveis e SEO?',
    answer: 'Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em qualquer dispositivo (celulares, tablets e desktops). Quanto ao SEO, implementamos as melhores práticas, incluindo: otimização de velocidade de carregamento, estrutura de URLs amigável, meta tags otimizadas, sitemap XML, integração com Google Analytics e Search Console, e código limpo seguindo os padrões do Google.'
  },
  {
    id: _mock.id(3),
    question: 'Como a Bolt 360 garante a segurança do meu site?',
    answer: 'Nossa abordagem de segurança é multicamada: instalamos certificado SSL (HTTPS) em todos os sites, implementamos proteção contra ataques DDoS e malware, realizamos backups diários com retenção de 30 dias, e mantemos monitoramento 24/7 para detectar e prevenir tentativas de invasão. Além disso, todas as tecnologias e plugins são constantemente atualizados para corrigir vulnerabilidades. Em caso de qualquer incidente, nossa equipe de segurança está pronta para agir rapidamente.'
  },
  {
    id: _mock.id(4),
    question: 'Posso integrar o site ao meu próprio CRM',
    answer: 'Sim! Desenvolvemos integrações personalizadas com os principais CRMs do mercado, como Salesforce, HubSpot, RD Station, Pipedrive e outros. A integração pode incluir: sincronização automática de leads, acompanhamento de jornada do cliente, automação de marketing e relatórios personalizados. Também podemos criar APIs específicas para conectar com sistemas proprietários. Todo o processo é documentado e testado para garantir uma integração segura e eficiente.'
  }
];

export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));
