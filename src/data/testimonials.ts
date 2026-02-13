export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Un réel plaisir de travailler avec Joseph : très à l\'écoute, force de proposition et de rechallenge. Joseph est très réactif et appliqué, il s\'intéresse et comprend rapidement les problématiques spécifiques pour y répondre au mieux.',
    name: 'Pauline Galeron',
    role: 'Initiative Owner',
    company: 'L\'Oréal R&I',
  },
  {
    quote: 'Joseph a contribué à créer from scratch Tailored Insights by GL, notre plateforme data. L\'enjeu : un outil "utile et utilisable". Résultat : une UX permettant d\'accéder à une donnée complexe en 3 clics, avec un design futuriste et énergique qui a fait adhérer les utilisateurs.',
    name: 'Alexandre Brebant',
    role: 'Product Director',
    company: 'Galeries Lafayette',
  },
  {
    quote: 'J\'ai eu la chance de travailler avec Joseph sur 2 projets. Très à l\'écoute des besoins du client et de l\'entreprise, il nous a permis de proposer rapidement des solutions adaptées au niveau technique et design. Des qualités humaines et professionnelles, un profil dont il faut suivre l\'évolution...',
    name: 'Celine Rickwood',
    role: 'CEO',
    company: 'Astec Bronze France',
  },
];

export const clientLogos = [
  { name: 'SNCF',                src: '/images/homepage/clients/logo_sncf.png' },
  { name: 'Microsoft',           src: '/images/homepage/clients/logo_microsoft.png' },
  { name: "L'Oréal",            src: '/images/homepage/clients/logo_loreal.png' },
  { name: 'OCP',                 src: '/images/homepage/clients/logo_ocp.png' },
  { name: 'Brico Dépôt',        src: '/images/homepage/clients/logo_bricodepot.png' },
  { name: 'Saint-Gobain',        src: '/images/homepage/clients/logo_saintgobain.png' },
  { name: 'Galeries Lafayette',  src: '/images/homepage/clients/logo_galerieslafayette.png' },
  { name: 'Astec',               src: '/images/homepage/clients/logo_astec.png' },
  { name: 'Archipels',           src: '/images/homepage/clients/logo_archipels.png' },
];

export const quoteIconSrc = '/images/homepage/icons/client_quote_icon.png';
