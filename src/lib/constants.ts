export const SITE_CONFIG = {
  name: 'Client Name',
  description: 'Client Description',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
};

export const NAV_ITEMS = [
  { label: 'בית', href: '/' },
  { label: 'אודות', href: '/about' },
  { label: 'שירותים', href: '/services' },
  { label: 'צור קשר', href: '/contact' },
];