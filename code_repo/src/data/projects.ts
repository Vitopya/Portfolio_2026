export type TagType = 'product-design' | 'ux-strategy' | 'user-research';

export interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  period: string;
  tags: TagType[];
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'sncf-dex',
    title: 'SNCF - Programme DEX+',
    description: 'Structurer la transformation numérique d\'un métier critique de la signalisation ferroviaire pour des centaines d\'agents.',
    role: 'Lead Designer',
    period: '2023-2025',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/projects/sncf_programme_dex+.png',
    featured: true,
  },
  {
    slug: 'sncf-sigurd',
    title: 'SNCF - SIGURD',
    description: 'Refondre l\'outillage métier d\'un logiciel legacy critique utilisé par 200+ agents d\'études et créer une formation clé en main.',
    role: 'Product Designer',
    period: '2024-2025',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/projects/sncf_sigurd.png',
    featured: true,
  },
  {
    slug: 'sncf-aegis',
    title: 'SNCF - AEGIS',
    description: 'Concevoir from scratch l\'outil de conception (CAO) des prochaines décennies, synonyme d\'un changement de paradigme.',
    role: 'Lead Designer',
    period: '2023-2025',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/projects/sncf_aegis.png',
    featured: true,
  },
  {
    slug: 'loreal-esafety',
    title: 'L\'Oréal - eSafety',
    description: 'Digitaliser l\'évaluation toxicologique : des documents Word et Excel au système data-driven.',
    role: 'Product Designer',
    period: '2020-2022',
    tags: ['product-design', 'ux-strategy'],
    image: '/images/homepage/projects/loreal_esafety.png',
    featured: true,
  },
];
