export type TagType = 'product-design' | 'ux-strategy' | 'user-research' | 'ux-ui-design';

export interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  period: string;
  tags: TagType[];
  image: string;
  workhubImage: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'sncf-dex',
    title: 'SNCF - Programme DEX+',
    description: 'Structurer la transformation numérique d\'un métier critique de la signalisation ferroviaire pour 500+ agents.',
    role: 'Lead designer',
    period: '2023-2025',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/projects/sncf_programme_dex+.png',
    workhubImage: '/images/workhub/use-case-card-img/usecase-card-sncf-dex+_1x.webp',
    featured: true,
  },
  {
    slug: 'sncf-sigurd',
    title: 'SNCF - SIGURD',
    description: 'Refondre l\'outillage métier d\'un logiciel legacy critique utilisé par 200+ agents d\'études et créer une formation clé en main.',
    role: 'Product designer',
    period: '2024-2025',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/projects/sncf_sigurd.png',
    workhubImage: '/images/workhub/use-case-card-img/usecase-card-sncf-sigurd_1x.webp',
    featured: true,
  },
  {
    slug: 'microsoft-odyssey',
    title: 'Microsoft - L\'Odyssée de Teams',
    description: 'Faire adopter Teams à centaines de milliers d\'utilisateurs en pleine crise COVID, sans formation présentielle possible.',
    role: 'UX/UI designer',
    period: '2020-2021',
    tags: ['ux-ui-design'],
    image: '/images/workhub/use-case-card-img/usecase-card-microsoft-odyssey_1x.webp',
    workhubImage: '/images/workhub/use-case-card-img/usecase-card-microsoft-odyssey_1x.webp',
    featured: false,
  },
  {
    slug: 'sncf-aegis',
    title: 'SNCF - AEGIS',
    description: 'Concevoir from scratch l\'outil de conception (CAO) des prochaines décennies, synonyme d\'un changement de paradigme.',
    role: 'Lead designer',
    period: '2023-2025',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/projects/sncf_aegis.png',
    workhubImage: '/images/workhub/use-case-card-img/usecase-card-sncf-aegis_1x.webp',
    featured: true,
  },
  {
    slug: 'loreal-esafety',
    title: 'L\'Oréal - eSafety',
    description: 'Digitaliser l\'évaluation toxicologique : du document Word au système data-driven.',
    role: 'Product designer',
    period: '2020-2022',
    tags: ['product-design', 'user-research'],
    image: '/images/homepage/projects/loreal_esafety.png',
    workhubImage: '/images/workhub/use-case-card-img/usecase-card-loreal-esafety_1x.webp',
    featured: true,
  },
  {
    slug: 'archipels',
    title: 'Archipels',
    description: 'Implanter une pratique design dans une startup de 15 développeurs avec 4 mois pour poser les bases.',
    role: 'Product designer',
    period: '2023',
    tags: ['product-design'],
    image: '/images/workhub/use-case-card-img/usecase-card-archipels_1x.webp',
    workhubImage: '/images/workhub/use-case-card-img/usecase-card-archipels_1x.webp',
    featured: false,
  },
];
