export type TagType = 'product-design' | 'ux-strategy' | 'user-research';

export interface Article {
  title: string;
  excerpt: string;
  tags: TagType[];
  image: string;
  url: string;
}

export const articles: Article[] = [
  {
    title: 'YouTube : étude de cas (...)',
    excerpt: 'YouTube déploie des dark patterns pour forcer Premium : 60s de pubs, pause ads, manipulation. Étude de cas et responsabilité collective design',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/articles/article_youtube.png',
    url: 'https://medium.com',
  },
  {
    title: 'Design Ops : au delà des outils',
    excerpt: 'Ouvrez n\'importe quel article sur le Design Ops et vous y trouverez des captures d\'écran de design systems bien rangés, des schémas de processus...',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/articles/article_designops.png',
    url: 'https://medium.com',
  },
  {
    title: 'A venir, un jour, j\'espère',
    excerpt: 'En tant que designer, il me tient à cœur de concilier compréhension des utilisateurs et exigences business à travers une démarche Produit complète.',
    tags: ['product-design', 'ux-strategy', 'user-research'],
    image: '/images/homepage/articles/article_a-venir.png',
    url: 'https://medium.com',
  },
];
