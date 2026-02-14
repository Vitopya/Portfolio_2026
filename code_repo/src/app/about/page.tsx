import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { StatCounter } from '@/components/ui/StatCounter';
import { AboutHero } from '@/components/sections/AboutHero';

/* ─── Data ──────────────────────────────────────────────────────── */

const stats = [
  { label: "Années d'expérience", value: 8,  suffix: '+', descriptor: "A travailler en m'émerveillant" },
  { label: 'Missions réalisées',   value: 17, suffix: '',  descriptor: 'Ferroviaire, pharma, finance, tech...' },
  { label: 'Ateliers menés',       value: 96, suffix: '+', descriptor: 'Cadrage, idéation, coconstruction, revue...' },
  { label: 'Langues parlées',      value: 3,  suffix: '',  descriptor: 'Français, anglais, espagnol' },
];

const experiences = [
  { role: 'Lead Product Designer',              company: 'SNCF Réseau (via Swood Partners)', period: 'Janvier 2023 – Présent',     duration: '3 ans'  },
  { role: 'Product Designer',                   company: 'Archipels (via Swood Partners)',   period: 'Septembre – Décembre 2022',  duration: '3 mois' },
  { role: 'UX/UI Designer',                     company: 'Galeries Lafayette (via Saegus)',  period: 'Juin – Septembre 2022',      duration: '4 mois' },
  { role: 'User Researcher & UX/UI Designer',   company: 'OCP Link (via Saegus)',            period: 'Septembre – Décembre 2021',  duration: '4 mois' },
  { role: 'Product Designer & User Researcher', company: "L'Oréal R&I (via Saegus)",         period: 'Août 2019 – Septembre 2022', duration: '3 ans'  },
  { role: 'UX/UI Designer',                     company: 'Saint-Gobain',                     period: 'Février – Mai 2021',         duration: '4 mois' },
  { role: 'UX/UI Designer',                     company: 'Microsoft (via Saegus)',            period: 'Juin 2019 – Septembre 2021', duration: '2 ans'  },
];

const education = [
  { title: 'Certificat Entrepreneuriat',               institution: 'ESCP Europe',             description: 'Formation de 4 mois',                             year: '2018' },
  { title: 'Master en design',                         institution: 'Strate School of Design', description: 'Master en UX | Design industriel | Branding',     year: '2018' },
  { title: "Baccalauréat S Sciences de l'Ingénieur",   institution: 'Enseignement secondaire', description: '',                                                 year: '2013' },
];

const certifications = [
  { title: 'Certification Design Ops',            institution: 'LeLaptop',  description: 'Leadership development · Processus optimization · Knowledge Management', year: '2025' },
  { title: 'Certification UX Strategy',           institution: 'LeLaptop',  description: 'UX Strategy · Leadership development · OKR Methodology',                 year: '2024' },
  { title: 'Certification Opquast',               institution: 'Opquast',   description: 'Web Quality Assurance',                                                   year: '2021' },
  { title: 'Professional Scrum Master I (PSM I)', institution: 'Scrum.org', description: '',                                                                         year: '2021' },
];

const pillars = [
  {
    icon: '/images/about/Icons/Microscope.svg',
    title: 'Discovery & Recherche utilisateur',
    what: "Je vais là où les utilisateurs travaillent. Pas en salle de réunion avec un guide d'entretien formaté mais dans leurs bureaux, leurs labos, leurs postes de travail. J'observe avant de questionner. Je questionne avant de proposer.",
    why: "Mes utilisateurs ont 5, 10, 20 ans de métier. Ils détectent le pipeau en 30 secondes. La seule façon de gagner leur confiance, c'est de montrer qu'on cherche à comprendre leur réalité, pas à leur vendre une solution préconçue.",
    results: [
      "4 mois d'immersion solo avant de produire la moindre solution (SNCF)",
      "14 entretiens en laboratoire avec des toxicologues qui n'avaient jamais vu un designer (L'Oréal)",
      "50+ documents d'études consolidés en référentiel réutilisable par toute l'équipe (SNCF)",
    ],
  },
  {
    icon: '/images/about/Icons/Compass.svg',
    title: 'Stratégie & Vision',
    what: "Je structure quand personne ne sait par où commencer. Je pose les questions qui fâchent en début de projet plutôt qu'en fin. Je fais le lien entre ce que veut le business, ce que permet la tech et ce dont les utilisateurs ont réellement besoin.",
    why: "Les projets B2B complexes meurent rarement par manque de talent. Ils meurent par flou stratégique, mauvais cadrage ou politique interne. Mon job, c'est de clarifier avant que ça déraille.",
    results: [
      "Structuration d'un programme de transformation sur 3 ans à partir de zéro puis de ses projets (SNCF)",
      "Navigation d'une gouvernance hostile pour préserver l'accès direct aux utilisateurs (SNCF)",
    ],
  },
  {
    icon: '/images/about/Icons/Design.svg',
    title: 'Design & Delivery',
    what: "Je conçois des solutions pour des gens qui passent 6 à 8 heures par jour dessus. Pas des écrans jolis pour des démos mais de véritables outils de travail qui tiennent la route dans la durée, avec les contraintes techniques réelles.",
    why: "Un écran Figma, ça ne prouve rien. Ce qui compte, c'est l'outil déployé, utilisé et adopté. Je travaille avec les devs, je comprends les contraintes du legacy, je fais des compromis intelligents plutôt que des maquettes idéales.",
    results: [
      "Refonte d'un outil critique utilisé quotidiennement par 200+ agents, codebase de 15 ans (SNCF)",
      "180+ cas d'usage spécifiés et prêts à la conception (SNCF)",
      "Mise en conformité RGAA d'interfaces métier complexes (SNCF)",
    ],
  },
  {
    icon: '/images/about/Icons/People.svg',
    title: 'Leadership et Design opérationnel',
    what: "Je construis des pratiques qui survivent à mon départ. Je suis capable de recruter, former, mettre en place les rituels et la documentation. Je fais en sorte que le design ne repose pas sur une seule personne.",
    why: "Un bon designer résout des problèmes. Un lead designer fait en sorte que l'équipe puisse résoudre des problèmes sans lui. L'un de mes objectifs est de me rendre progressivement inutile.",
    results: [
      "Équipe passée de 1 à 4 designers (UX, UI, Research, Writer) sur un programme multi projets (SNCF)",
      "Référentiel de recherche, répertoire, templates, rituels d'équipe toujours utilisés après mon départ",
    ],
  },
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── 1. Hero — sticky behind scrolling content ── */}
      <div className="sticky top-0 z-0">
        <AboutHero />
      </div>

      {/* ── Sections 2–7 — scroll over the sticky hero ── */}
      <div className="relative z-10 bg-[#F9F4EF]">

      {/* ── 2. En quelques mots — #FAFAFA band, portrait chevauchant hero ── */}
      <section className="bg-[#FAFAFA] py-16 md:py-20">
        <div className="px-5 md:px-20 max-w-[80rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_22rem] lg:grid-cols-[1fr_26rem] gap-8 md:gap-14 items-start">

            {/* Left — section label + text + CTA */}
            <div className="flex flex-col gap-6">
              <FadeIn>
                <SectionLabel>En quelques mots</SectionLabel>
              </FadeIn>

              {/* Portrait — mobile only, between label and text */}
              <FadeIn delay={0.05} className="md:hidden relative z-10">
                <div className="relative w-full aspect-square overflow-hidden rounded-[4px] bg-[#EADDCF]">
                  <Image
                    src="/images/about/Joseph/img_1x.webp"
                    alt="Joseph Deffayet"
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="flex flex-col gap-4">
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Mes utilisateurs sont toxicologues, agents de signalisation ferroviaire,
                    pharmaciens, analystes financiers. Des gens avec 15, 20, 30 ans de métier.
                    Ils en ont vu passer des consultants et savent donc quand on leur vend du vent.
                  </p>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Alors je ne vends pas : je vais sur le terrain, j&apos;observe, je questionne.
                    Et seulement après, je propose. Parfois ils disent non. Et souvent on
                    (re)construit ensemble. À la fin, ils utilisent ce qu&apos;on a fait, parce que
                    c&apos;est le leur et la solution qu&apos;ils attendaient.
                  </p>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    8 ans que je fais ça. Dans des environnements où l&apos;approximation coûte
                    cher : rail, pharma, finance. Des contextes où "l&apos;utilisateur au centre"
                    n&apos;est pas un slide de présentation, c&apos;est une nécessité opérationnelle.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://www.linkedin.com/in/joseph-deffayet/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#8C7851] text-[#FFFFFE] text-sm font-medium px-5 py-2.5 hover:bg-[#716040] transition-colors rounded-[4px]"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Me contacter
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — square portrait desktop only, pulled up to slightly overlap hero */}
            <FadeIn delay={0.1} className="hidden md:block relative z-10 md:-mt-20 lg:-mt-28">
              <div className="relative w-full aspect-square overflow-hidden rounded-[4px] bg-[#EADDCF]">
                <Image
                  src="/images/about/Joseph/img_1x.webp"
                  alt="Joseph Deffayet"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 26rem"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3. Stats Band ─────────────────────────────────────────── */}
      <div className="bg-[#020826] py-12 md:py-16">
        <div className="px-5 md:px-20 max-w-[80rem] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-xs font-normal text-[#FAFAFA] uppercase tracking-widest leading-snug"
                    style={{ fontFamily: 'Amulya, serif' }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="font-bold text-[#F9F4EF] leading-none"
                    style={{
                      fontFamily: 'Amulya, serif',
                      fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                    }}
                  >
                    <StatCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p
                    className="text-sm font-normal text-[#FAFAFA] leading-snug"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    {stat.descriptor}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. Expériences ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-5 md:px-20 max-w-[80rem] mx-auto w-full">
        <FadeIn>
          <SectionLabel>Expériences</SectionLabel>
        </FadeIn>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            /* Faster stagger: 20ms between each row to keep reading rhythm */
            <FadeIn key={exp.role + exp.company} delay={i * 0.02}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 md:gap-8 py-5 border-t border-[#EADDCF] last:border-b items-baseline">
                <div className="flex flex-col gap-0.5">
                  <p
                    className="text-base font-semibold text-[#020826]"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-sm font-normal text-[#716040]"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <p
                    className="text-sm font-normal text-[#716040] whitespace-nowrap"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    {exp.period}
                  </p>
                  <span className="text-[#EADDCF] select-none">•</span>
                  <p
                    className="text-sm font-normal text-[#716040] whitespace-nowrap"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    {exp.duration}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-8 flex justify-end">
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-[#8C7851] text-[#8C7851] text-sm font-medium px-5 py-2 hover:bg-[#8C7851] hover:text-[#FFFFFE] transition-colors rounded-[4px]"
              style={{ fontFamily: 'Synonym, sans-serif' }}
            >
              Télécharger mon CV
              <Download size={14} strokeWidth={2} />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── 5. Formations & Certifications ────────────────────────── */}
      <section className="py-16 md:py-20 px-5 md:px-20 max-w-[80rem] mx-auto w-full">
        <FadeIn>
          <SectionLabel>Formations &amp; Certifications</SectionLabel>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <FadeIn delay={0.05}>
            <div className="flex flex-col divide-y divide-[#EADDCF]">
              {education.map((item) => (
                <div key={item.title} className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <p
                      className="text-base font-semibold text-[#020826] leading-snug"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm font-normal text-[#716040] shrink-0"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      {item.year}
                    </p>
                  </div>
                  <p
                    className="text-sm font-medium text-[#716040]"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    {item.institution}
                  </p>
                  {item.description && (
                    <p
                      className="text-xs font-normal text-[#716040] leading-snug"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col divide-y divide-[#EADDCF]">
              {certifications.map((item) => (
                <div key={item.title} className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <p
                      className="text-base font-semibold text-[#020826] leading-snug"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm font-normal text-[#716040] shrink-0"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      {item.year}
                    </p>
                  </div>
                  <p
                    className="text-sm font-medium text-[#716040]"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    {item.institution}
                  </p>
                  {item.description && (
                    <p
                      className="text-xs font-normal text-[#716040] leading-snug"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 6. Approach ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-5 md:px-20 max-w-[80rem] mx-auto w-full">
        <FadeIn>
          <h2
            className="font-bold text-[#020826] leading-tight mb-3"
            style={{
              fontFamily: 'Amulya, serif',
              fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
            }}
          >
            Je ne conçois pas que des interfaces&nbsp;:<br />
            je structure des pratiques design
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p
            className="text-base font-normal text-[#716040] mb-12 max-w-[52rem]"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            Je couvre la chaîne de valeur complète du design, de la discovery à
            l&apos;impact livré et à la maturité organisationnelle.
          </p>
        </FadeIn>

        {/* Row 1: [0, 0.07] — Row 2: [0.12, 0.19] keeps both rows close */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const delays = [0, 0.07, 0.12, 0.19];
            return (
              <FadeIn key={pillar.title} delay={delays[i]}>
                <div className="flex flex-col gap-5 p-6 rounded-[4px] bg-[#FAFAFA] border border-[#EADDCF] h-full">
                  <div className="flex items-start gap-3">
                    <div className="relative w-8 h-8 shrink-0 mt-0.5">
                      <Image src={pillar.icon} alt="" fill className="object-contain" sizes="2rem" />
                    </div>
                    <h3
                      className="text-base font-semibold text-[#020826] leading-snug"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[0.6875rem] font-semibold text-[#020826] uppercase tracking-widest" style={{ fontFamily: 'Amulya, serif' }}>Ce que je fais</p>
                      <p className="text-sm font-normal text-[#716040] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>{pillar.what}</p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[0.6875rem] font-semibold text-[#020826] uppercase tracking-widest" style={{ fontFamily: 'Amulya, serif' }}>Pourquoi ça compte</p>
                      <p className="text-sm font-normal text-[#716040] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>{pillar.why}</p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[0.6875rem] font-semibold text-[#020826] uppercase tracking-widest" style={{ fontFamily: 'Amulya, serif' }}>Résultats concrets</p>
                      <ul className="flex flex-col gap-1.5">
                        {pillar.results.map((result, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm font-normal text-[#716040] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>
                            <span className="mt-2 w-1 h-1 rounded-full bg-[#716040] shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── 7. CTA ────────────────────────────────────────────────── */}
      <CTABanner />

      </div>{/* /relative z-10 */}
    </>
  );
}
