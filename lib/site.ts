export const siteConfig = {
  name: 'Instituto Aliança e Renovação',
  shortName: 'IAR',
  description:
    'A serviço da minha, da sua, das nossas comunidades. Promovemos solidariedade, acolhimento e apoio a famílias em situação de vulnerabilidade.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://institutoiar.org.br',
  ogImage: '/og-image.svg',
  locale: 'pt_BR',
  phone: '(11) 95609-7375',
  email: 'contato@institutoiar.org.br',
  addressLine: 'Rua das Comunidades, 120 - Vila Mariana',
  city: 'São Paulo',
  state: 'SP',
  country: 'BR',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511956097375',
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/iarinstituto',
  facebook:
    process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/iarinstituto',
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre o Instituto' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/impacto', label: 'Impacto e Ações' },
  { href: '/como-ajudar', label: 'Como Ajudar' },
  { href: '/transparencia', label: 'Transparência' },
  { href: '/contato', label: 'Contato' },
];

export const impactStats = [
  { value: '320+', label: 'Famílias apoiadas' },
  { value: '1.850+', label: 'Cestas básicas distribuídas' },
  { value: '74', label: 'Ações sociais realizadas' },
];
