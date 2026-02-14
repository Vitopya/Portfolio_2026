'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { UsecaseHero } from '@/components/sections/UsecaseHero';
import { ProjectNavigation } from '@/components/sections/ProjectNavigation';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { StatCounter } from '@/components/ui/StatCounter';
import { FadeIn } from '@/components/ui/FadeIn';

const tocItems = [
  { id: 'introduction', label: 'INTRODUCTION' },
  { id: 'contexte', label: 'CONTEXTE' },
  { id: 'discovery', label: 'DISCOVERY' },
  { id: 'recadrage', label: 'RECADRAGE' },
  { id: 'conception', label: 'CONCEPTION' },
  { id: 'kit-cle-en-main', label: 'KIT CLE EN MAIN' },
  { id: 'resultats', label: 'RESULTATS' },
  { id: 'enseignements', label: 'ENSEIGNEMENTS' },
];

export default function MicrosoftOdysseyPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    for (const item of tocItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero — sticky behind scrolling content ── */}
      <div className="sticky top-0 z-0">
        <UsecaseHero
          title={`L'Odyssée de Teams :\nGamifier l'adoption\nd'un logiciel d'entreprise`}
          subtitle="Microsoft France • Mars 2020 - Novembre 2021 • Product Designer"
          bgImage="/images/usecase-microsoft-odyssey/hero-img/workhub_img_bg_fixed_1x.webp"
          breadcrumbTitle="Microsoft - L'Odyssée de Teams"
        />
      </div>

      {/* ── Content — scrolls over the sticky hero ── */}
      <div className="relative z-10 bg-[#F9F4EF]">

        {/* ── Métriques + Image ── */}
        <section className="py-10 md:py-12 bg-[#EADDCF]">
          <div className="max-w-[90rem] mx-auto px-5 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left: metrics */}
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Utilisateurs dans le monde', value: '100k+ users' },
                    { label: 'Organisations déployées', value: '35' },
                    { label: 'Satisfaction utilisateur', value: '4,6/5' },
                    { label: 'Taux de complétion', value: '68%' },
                  ].map((stat, i) => (
                    <FadeIn key={i} delay={i * 0.08}>
                      <div className="border-l border-[#8C7851] pl-4">
                        <p
                          className="text-sm font-normal text-[#716040] mb-1"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {stat.label}
                        </p>
                        <p
                          className="text-xl font-normal text-[#020826]"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {stat.value}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                <FadeIn delay={0.32}>
                  <div className="border-l border-[#8C7851] pl-4">
                    <p
                      className="text-sm font-normal text-[#716040] mb-1"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Équipe projet
                    </p>
                    <p
                      className="text-xl font-normal text-[#020826]"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      2 designers, 3 développeurs
                    </p>
                  </div>
                </FadeIn>
              </div>
              {/* Right: image */}
              <FadeIn delay={0.1}>
                <div className="relative w-full h-[20rem] md:h-full min-h-[18rem] rounded-[4px] overflow-hidden">
                  <Image
                    src="/images/usecase-microsoft-odyssey/use-case-img/odyssey-img1.webp"
                    alt="Vue d'ensemble du projet L'Odyssée de Teams"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Two-column layout: sticky TOC (left) + content (right) ── */}
        <div className="max-w-[90rem] mx-auto px-5 md:px-20 pt-12">
          <div className="md:grid md:grid-cols-[220px_1fr] md:gap-12 lg:gap-16">

            {/* Sticky sidebar — desktop only */}
            <aside className="hidden md:block">
              <nav
                className="sticky top-24 space-y-1 pb-4"
                style={{ borderBottom: '0.5px solid #EADDCF' }}
              >
                {tocItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-xs font-normal uppercase py-1.5 transition-colors ${
                      activeSection === item.id
                        ? 'text-[#020826] font-medium'
                        : 'text-[#716040] hover:text-[#020826]'
                    }`}
                    style={{ fontFamily: 'Amulya, serif' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div>

              {/* ── INTRODUCTION ── */}
              <section id="introduction" className="py-9 md:py-12 scroll-mt-28">
                <FadeIn>
                  <SectionLabel>Introduction</SectionLabel>
                </FadeIn>

                <FadeIn>
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-[#020826] leading-tight mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Mars 2020 : le brief
                  </h2>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    La France se confine et des millions de collaborateurs découvrent Microsoft Teams du jour au lendemain. L&apos;outil est puissant mais sous-exploité, car la plupart des utilisateurs se limitent à la visioconférence sans explorer les autres fonctionnalités.
                  </p>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Microsoft France souhaite accélérer l&apos;adoption et leur première idée est simple : un formulaire de quiz pour tester les connaissances.
                  </p>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-8"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    <span className="font-semibold">Le problème :</span> c&apos;est qu&apos;un quiz évalue sans former et que personne n&apos;a envie de remplir un formulaire après une journée passée en visio.
                  </p>
                </FadeIn>

                {/* Le brief — purple card */}
                <FadeIn>
                  <div className="p-6 rounded-[4px] bg-[#E9D4FF]">
                    <h3
                      className="text-lg font-semibold text-[#020826] mb-2"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Le brief
                    </h3>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Le brief tient en une phrase : créer une expérience d&apos;intégration engageante qui enseigne les fonctionnalités de Teams pendant la crise du travail à distance, et la rendre réellement plaisante.
                    </p>
                  </div>
                </FadeIn>
              </section>

              {/* ── CONTEXTE ── */}
              <section id="contexte" className="py-9 md:py-12 scroll-mt-28">
                <FadeIn>
                  <SectionLabel>Contexte</SectionLabel>
                </FadeIn>

                <FadeIn>
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-[#020826] leading-tight mb-6"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Le problème business
                  </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <FadeIn>
                    <div>
                      <p
                        className="text-base font-semibold text-[#020826] leading-relaxed mb-3"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        Le problème auquel Microsoft faisait face :
                      </p>
                      <ul className="space-y-2 list-disc list-outside pl-5">
                        <li
                          className="text-base font-normal text-[#020826] leading-relaxed"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Teams connaissait une croissance explosive mais un usage superficiel, ce qui posait un problème direct de rentabilité puisque la valeur des licences dépend de l&apos;adoption réelle des fonctionnalités.
                        </li>
                        <li
                          className="text-base font-normal text-[#020826] leading-relaxed"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Les partenaires Microsoft avaient besoin d&apos;outils concrets pour engager leurs clients et créer des opportunités commerciales, alors que la formation traditionnelle échouait systématiquement avec une participation faible et une rétention encore pire.
                        </li>
                      </ul>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <div>
                      <p
                        className="text-base font-semibold text-[#020826] leading-relaxed mb-3"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        L&apos;opportunité était pourtant là :
                      </p>
                      <p
                        className="text-base font-normal text-[#020826] leading-relaxed"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        Une audience captive coincée en télétravail, un moment culturel où les gens recherchaient de l&apos;engagement et de la connexion à distance, et un terrain vierge sur l&apos;intégration gamifiée en entreprise.
                      </p>
                    </div>
                  </FadeIn>
                </div>

                <FadeIn>
                  <h3
                    className="text-xl font-semibold text-[#020826] mb-3"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Le problème utilisateur
                  </h3>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-8"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Les utilisateurs principaux étaient des employés de bureau de tous niveaux, forcés dans la collaboration à distance sans préparation. Ils se retrouvaient submergés par un énième outil à apprendre tout en cherchant du lien social pendant l&apos;isolement. Le spectre allait de jeunes habitués au numérique jusqu&apos;à des profils qui utilisaient à peine l&apos;ordinateur avant le confinement.
                  </p>
                </FadeIn>

                {/* Question de conception — gradient orange card */}
                <FadeIn>
                  <div
                    className="p-6 md:p-8 rounded-[4px] mb-8"
                    style={{
                      background: 'linear-gradient(180deg, #FEE8CB 0%, #FFDFB8 100%)',
                      border: '1px solid #FFB86A',
                    }}
                  >
                    <h3
                      className="text-lg font-semibold text-[#020826] mb-2"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      La question de conception
                    </h3>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Comment rendre l&apos;apprentissage d&apos;un logiciel d&apos;entreprise aussi engageant qu&apos;un jeu, sans paraître puéril, sans perturber le travail et pour des populations d&apos;utilisateurs très diverses ?
                    </p>
                  </div>
                </FadeIn>

                {/* Critères de succès — neutral card */}
                <FadeIn>
                  <div className="p-6 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] mb-8">
                    <h3
                      className="text-lg font-semibold text-[#020826] mb-3"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Les critères de succès
                    </h3>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed mb-3"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Nous avons défini quatre indicateurs dès le départ :
                    </p>
                    <ul className="space-y-1.5 list-disc list-outside pl-5">
                      {[
                        'Un taux de complétion supérieur à 60% ;',
                        'Une augmentation mesurable de l\'adoption des fonctionnalités après le jeu ;',
                        'Un déploiement simple pour n\'importe quelle organisation ;',
                        'Et une satisfaction des partenaires qui pourraient utiliser l\'outil pour développer leur activité.',
                      ].map((criterion, i) => (
                        <li
                          key={i}
                          className="text-base font-normal text-[#020826]"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                {/* Contrainte technique — blue gradient card with pink stroke */}
                <FadeIn>
                  <div
                    className="p-6 rounded-[4px] mb-8"
                    style={{
                      background: 'linear-gradient(180deg, #D5E7FE 0%, #C9E1FE 100%)',
                      border: '1px solid #FDA5C1',
                    }}
                  >
                    <h3
                      className="text-lg font-semibold text-[#020826] mb-3"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      La contrainte technique structurante
                    </h3>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      L&apos;application devait s&apos;intégrer nativement à Microsoft Teams, pas un lien externe ouvrant un navigateur mais une vraie application embarquée accessible depuis l&apos;interface. Cette contrainte a structuré toute la réflexion puis la conception : les interactions devaient fonctionner dans le conteneur Teams sur ordinateur et mobile, les performances devaient rester irréprochables malgré l&apos;imbrication, et l&apos;authentification devait exploiter l&apos;identité Microsoft 365 existante.
                    </p>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Cette exigence a imposé une collaboration étroite entre les deux designers et les trois développeurs dès le premier jour. Chaque écran et chaque interaction devaient être validés techniquement avant finalisation, ce qui a éliminé le risque de maquettes impossibles à implémenter mais a aussi demandé une rigueur inhabituelle dans le processus de conception.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div className="relative w-full h-[16rem] md:h-[24rem] rounded-[4px] overflow-hidden">
                    <Image
                      src="/images/usecase-microsoft-odyssey/use-case-img/odyssey-img2.webp"
                      alt="Contexte et enjeux du projet"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                </FadeIn>
              </section>

              {/* ── DISCOVERY ── */}
              <section id="discovery" className="py-9 md:py-12 scroll-mt-28">
                <FadeIn>
                  <SectionLabel>Discovery</SectionLabel>
                </FadeIn>

                <FadeIn>
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-[#020826] leading-tight mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Une approche adaptée au contexte
                  </h2>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-8"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    L&apos;urgence COVID imposait un calendrier compressé, ce qui a conduit à une recherche ciblée plutôt qu&apos;exhaustive. Ce choix était délibéré : mieux valait des données actionnables rapidement que des insights parfaits arrivant trop tard.
                  </p>
                </FadeIn>

                {/* 3 colonnes semaines */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      week: 'Première semaine',
                      title: 'Comprendre les parties prenantes',
                      text: 'Six entretiens avec des employés Microsoft, des partenaires et des administrateurs informatiques ont révélé un constat unanime : l\'engagement envers les contenus de formation traditionnels était proche de zéro. Un participant a résumé le problème ainsi :\n\n« Les gens ne regarderont pas une vidéo de formation, même de cinq minutes. »',
                    },
                    {
                      week: 'Deuxième semaine',
                      title: 'Analyser ce qui fonctionne ailleurs',
                      text: 'L\'analyse d\'applications comme Duolingo, Kahoot et des plateformes de formation gamifiées a permis de dégager trois enseignements :\n\nles jeux fonctionnent quand la progression est visible,\n\nla dynamique sociale crée de la responsabilité mutuelle,\n\net le contenu découpé en petites unités favorise l\'engagement.',
                    },
                    {
                      week: 'Troisième semaine',
                      title: 'Tester les directions avec les utilisateurs',
                      text: 'Six ateliers d\'idéation et de co-conception ont été menés à distance avec des employés d\'entreprises différentes.\n\nTrois directions de concept ont été présentées et discutées, et c\'est le parcours narratif parsemé de défis et d\'accomplissements qui a le plus résonné.',
                    },
                  ].map((phase, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <div className="p-5 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] h-full">
                        <p
                          className="text-xs font-normal text-[#716040] uppercase mb-2"
                          style={{ fontFamily: 'Amulya, serif' }}
                        >
                          {phase.week}
                        </p>
                        <h3
                          className="text-lg font-semibold text-[#020826] mb-3"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {phase.title}
                        </h3>
                        <p
                          className="text-sm font-normal text-[#020826] leading-relaxed whitespace-pre-line"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {phase.text}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Quelques retours recueillis — insight cards with blue gradient bg */}
                <FadeIn>
                  <h3
                    className="text-xl font-semibold text-[#020826] mb-6"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Quelques retours recueillis
                  </h3>
                </FadeIn>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      stroke: '#BEDBFF',
                      title: 'La gamification en milieu pro fonctionne si elle respecte mon intelligence.',
                      text: 'Le premier insight concernait le respect de l\'intelligence des utilisateurs. Les mécaniques de jeu puériles étaient rejetées, les participants souhaitaient un engagement sophistiqué qui les traite en adultes. Cela a orienté vers un design visuel épuré, une rédaction soignée et des mécanismes de progression porteurs de sens.',
                      implication: 'Design visuel épuré, UX writing aux petits oignons et mécanisme de progression significative.',
                    },
                    {
                      stroke: '#E9D4FF',
                      title: 'La pression social peut être plus motivante que la curiosité personnelle.',
                      text: 'Le deuxième insight portait sur la pression sociale comme moteur. L\'apprentissage en solo produisait un engagement faible, mais voir la progression de ses collègues ou savoir que son équipe participait créait une dynamique de responsabilité et d\'émulation. Cela a conduit à intégrer des classements d\'équipe et des fonctionnalités de partage de progression.',
                      implication: 'Classements d\'équipe, partage de la progression et fonctionnalités "sociales" intégrées.',
                    },
                    {
                      stroke: '#A4F4CF',
                      title: 'Je passerai 10 minutes si ça me semble optionnel et 0 minute si ça me semble obligatoire.',
                      text: 'Le troisième insight touchait à la perception de l\'obligation. Les organisations qui imposaient la formation voyaient un engagement plus faible que celles qui la présentaient comme un défi amusant et optionnel. Tout le travail de communication et d\'accompagnement a été pensé pour que le jeu ressemble à une opportunité plutôt qu\'à une corvée.',
                      implication: 'Package et assets marketés pour que cela ressemble à une opportunité d\'apprentissage et non des devoirs.',
                    },
                  ].map((insight, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <div
                        className="p-6 rounded-[4px]"
                        style={{
                          background: 'linear-gradient(180deg, #D5E7FE 0%, #C9E1FE 100%)',
                          border: `1px solid ${insight.stroke}`,
                        }}
                      >
                        <div className="flex items-start gap-2 mb-3">
                          <span
                            className="text-2xl font-bold text-[#020826]/30 leading-none shrink-0 -mt-1"
                            style={{ fontFamily: 'Amulya, serif' }}
                          >
                            &ldquo;
                          </span>
                          <p
                            className="text-base font-semibold text-[#020826] italic leading-snug"
                            style={{ fontFamily: 'Synonym, sans-serif' }}
                          >
                            {insight.title}
                          </p>
                        </div>
                        <p
                          className="text-sm font-normal text-[#020826] leading-relaxed mb-4"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {insight.text}
                        </p>
                        <div className="border-t border-[#020826]/10 pt-3">
                          <p
                            className="text-xs font-normal text-[#716040] uppercase mb-1"
                            style={{ fontFamily: 'Amulya, serif' }}
                          >
                            Implication design
                          </p>
                          <p
                            className="text-sm font-normal text-[#020826]"
                            style={{ fontFamily: 'Synonym, sans-serif' }}
                          >
                            {insight.implication}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </section>

              {/* ── RECADRAGE ── */}
              <section id="recadrage" className="py-9 md:py-12 scroll-mt-28 bg-[#FAFAFA] -mx-4 px-4 md:-mx-6 md:px-6 rounded-[4px]">
                <FadeIn>
                  <SectionLabel>Recadrage</SectionLabel>
                </FadeIn>

                <FadeIn>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Nous avons challengé le brief initial parce que former des utilisateurs déjà fatigués par leur rythme en visio demandait autre chose qu&apos;un questionnaire. Il fallait créer de l&apos;engagement, de la motivation, une raison de revenir.
                  </p>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    La gamification offrait cette réponse, non pas comme un gadget mais comme un levier pédagogique documenté. Les mécaniques de jeu (progression visible, récompenses, compétition) augmentent la rétention des connaissances et l&apos;engagement quand elles sont bien conçues.
                  </p>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Notre proposition se nomme donc L&apos;Odyssée de Teams : un jeu sérieux intégré directement dans l&apos;application, avec des saisons de jeu, des avatars, des points et des classements. Apprendre en jouant plutôt qu&apos;en subissant.
                  </p>
                  <p
                    className="text-base font-semibold text-[#020826] leading-relaxed mb-8"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Microsoft a validé.
                  </p>
                </FadeIn>

                {/* 2 cards : brief initial vs recadré */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <FadeIn>
                    <div className="p-6 rounded-[4px] border border-[#EADDCF] bg-white h-full">
                      <p
                        className="text-xs font-normal text-[#716040] uppercase mb-2"
                        style={{ fontFamily: 'Amulya, serif' }}
                      >
                        Brief initial
                      </p>
                      <p
                        className="text-base font-normal text-[#020826] leading-relaxed"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        Créer une expérience d&apos;onboarding engageante qui enseigne les fonctionnalités Microsoft Teams pendant la crise du travail à distance, et la rendre réellement fun.
                      </p>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <div className="p-6 rounded-[4px] border border-[#EADDCF] bg-[#F9F4EF] h-full">
                      <p
                        className="text-xs font-normal text-[#716040] uppercase mb-2"
                        style={{ fontFamily: 'Amulya, serif' }}
                      >
                        Brief recadré
                      </p>
                      <p
                        className="text-base font-normal text-[#020826] leading-relaxed"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        Concevoir une expérience narrative qui fait en sorte que la découverte des fonctionnalités Teams ressemble à un voyage épique, transformant la formation passive en jeu actif, avec des dynamiques sociales qui stimulent l&apos;adoption organique.
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Tableau pivot stratégique */}
                <FadeIn>
                  <h3
                    className="text-xl font-semibold text-[#020826] mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Le pivot stratégique
                  </h3>
                  <div className="rounded-[4px] border border-[#EADDCF] overflow-hidden">
                    <div className="grid grid-cols-2 bg-white">
                      <div className="p-4 text-xs font-normal text-[#716040] uppercase" style={{ fontFamily: 'Amulya, serif' }}>Brief initial</div>
                      <div className="p-4 text-xs font-normal text-[#716040] uppercase" style={{ fontFamily: 'Amulya, serif' }}>Brief recadré</div>
                    </div>
                    {[
                      ['Quiz', 'Odyssée narrative avec arc de progression'],
                      ['Apprentissage individuel', 'Expérience sociale/équipe avec classements'],
                      ['Complétion unique', 'Saisons répétables (mises à jour de contenu)'],
                      ['Formation aux fonctionnalités', 'Apprentissage contextuel (apprendre en faisant dans Teams)'],
                      ['Déployé par l\'IT', 'Self-service avec un kit de déploiement et campagne clé en main'],
                    ].map((row, i) => (
                      <div key={i} className={`grid grid-cols-2 border-t border-[#EADDCF] ${i % 2 === 0 ? 'bg-[#F9F4EF]' : 'bg-white'}`}>
                        <div className="p-4 text-sm font-normal text-[#020826]" style={{ fontFamily: 'Synonym, sans-serif' }}>{row[0]}</div>
                        <div className="p-4 text-sm font-normal text-[#020826]" style={{ fontFamily: 'Synonym, sans-serif' }}>{row[1]}</div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </section>

              {/* ── CONCEPTION ── */}
              <section id="conception" className="py-9 md:py-12 scroll-mt-28">
                <FadeIn>
                  <SectionLabel>L&apos;Odyssée de Teams : Conception du jeu</SectionLabel>
                </FadeIn>

                {/* L'architecture du jeu — text left + image right */}
                <div className="mb-12">
                  <FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
                      <div>
                        <h3
                          className="text-xl font-semibold text-[#020826] mb-3"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          L&apos;architecture du jeu
                        </h3>
                        <p
                          className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Le joueur choisit un avatar puis entre dans une saison de quatre semaines. Le rythme a été calibré pour créer l&apos;habitude sans saturer : suffisamment de contenu pour maintenir l&apos;engagement, pas assez pour décourager.
                        </p>
                        <p
                          className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Les 180 questions sont réparties sur huit thématiques qui couvrent les usages concrets de Teams : réunions, conversations, fichiers, applications, personnalisation. Chaque question ancre une pratique plutôt que de tester une connaissance théorique, parce que l&apos;objectif n&apos;est pas d&apos;évaluer mais de faire adopter.
                        </p>
                        <p
                          className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Le système de points et de classements exploite la compétition comme moteur, avec des classements individuels et par équipe visibles en temps réel. Les récompenses jalonnent le parcours pour maintenir la motivation sur la durée de la saison.
                        </p>
                        <p
                          className="text-base font-normal text-[#020826] leading-relaxed"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Les avatars personnalisables peuvent sembler un détail, mais ils créent l&apos;attachement au jeu et renforcent l&apos;engagement. Un utilisateur qui a choisi et personnalisé son avatar revient plus facilement qu&apos;un utilisateur anonyme.
                        </p>
                      </div>
                      <div className="relative w-full min-h-[20rem] rounded-[4px] overflow-hidden bg-[#F9F4EF]">
                        <Image
                          src="/images/usecase-microsoft-odyssey/use-case-img/odyssey-img3.webp"
                          alt="Architecture du jeu L'Odyssée de Teams"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn>
                    <div className="relative w-full h-[16rem] md:h-[24rem] rounded-[4px] overflow-hidden">
                      <Image
                        src="/images/usecase-microsoft-odyssey/use-case-img/odyssey-img4.webp"
                        alt="Détail de l'architecture du jeu"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* L'expérience sur deux supports — single image */}
                <div className="mb-12">
                  <FadeIn>
                    <h3
                      className="text-xl font-semibold text-[#020826] mb-3"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      L&apos;expérience sur deux supports
                    </h3>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      L&apos;application existe sur ordinateur et mobile pour deux contextes d&apos;usage différents. Sur ordinateur, elle vit dans le panneau latéral de Teams et permet de jouer entre deux réunions sans changer de contexte. Sur mobile, l&apos;expérience est optimisée pour les transports et les pauses.
                    </p>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed mb-6"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Les parcours utilisateur ont été conçus pour minimiser la friction à chaque étape : connexion automatique via le compte Microsoft 365, premier contact guidé avec explication des mécaniques, progression claire avec indicateurs visuels, et retour facilité pour reprendre là où l&apos;on s&apos;était arrêté.
                    </p>
                  </FadeIn>
                  <FadeIn>
                    <div className="relative w-full rounded-[4px] overflow-hidden" style={{ height: 'auto' }}>
                      <Image
                        src="/images/usecase-microsoft-odyssey/use-case-img/odyssey-img5.webp"
                        alt="Expérience desktop et mobile"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-[4px]"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* La rédaction comme levier */}
                <div className="mb-12">
                  <FadeIn>
                    <h3
                      className="text-xl font-semibold text-[#020826] mb-3"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      La rédaction comme levier d&apos;engagement
                    </h3>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed mb-6"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      Le ton a été pensé pour être professionnel mais ludique, éducatif sans être moralisateur. Cette ligne de crête était délicate à tenir parce que trop de légèreté aurait paru déplacé en contexte professionnel, et trop de sérieux aurait tué l&apos;engagement.
                    </p>
                  </FadeIn>

                  {/* Le saviez-vous ? — yellow gradient card */}
                  <FadeIn>
                    <div
                      className="p-6 md:p-8 rounded-[4px] mb-6"
                      style={{
                        background: 'linear-gradient(180deg, #FEE8CB 0%, #FFDFB8 100%)',
                        border: '1px solid #FFB86A',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB86A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18h6" />
                          <path d="M10 22h4" />
                          <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
                        </svg>
                        <h4
                          className="text-base font-semibold text-[#020826]"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Le saviez-vous ?
                        </h4>
                      </div>
                      <p
                        className="text-base font-normal text-[#020826] leading-relaxed mb-3"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        Les notes &ldquo;Le saviez-vous ?&rdquo; illustrent cette approche : chaque bonne réponse incluait un complément qui allait au-delà de la question pour enseigner le contexte.
                      </p>
                      <p
                        className="text-base font-normal text-[#020826] leading-relaxed"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        Cette mécanique transformait chaque question en opportunité d&apos;apprentissage approfondi, même pour les utilisateurs qui répondaient correctement du premier coup.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      La différence entre une mauvaise et une bonne formulation se joue dans les détails. Une question comme &ldquo;Comment créer un canal dans Microsoft Teams ?&rdquo; teste une connaissance froide. Une question comme &ldquo;Votre équipe a besoin d&apos;un espace dédié à la mise à jour projet. Quelle est la meilleure façon d&apos;organiser cela dans Teams ?&rdquo; ancre la fonctionnalité dans un usage réel.
                    </p>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed mb-6"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      De même, un retour &ldquo;Oups, tu t&apos;es trompé&rdquo; est condescendant, alors qu&apos;un retour &ldquo;Pas tout à fait. Voici pourquoi : [explication]. Astuce : [conseil actionnable]&rdquo; fait progresser.
                    </p>
                  </FadeIn>

                  {/* Exemples feedback/question — 2 cards, each with stacked bad/good */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <FadeIn>
                      <div className="h-full">
                        <p
                          className="text-sm font-normal text-[#716040] mb-2"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Exemples de feedback :
                        </p>
                        <div className="rounded-[4px] overflow-hidden border border-[#EADDCF] h-full">
                          {/* Mauvais */}
                          <div className="p-4" style={{ background: 'linear-gradient(180deg, #FDE8EC 0%, #FDCDD6 100%)', borderBottom: '1px solid #FDA5C1' }}>
                            <div className="flex items-center gap-2 mb-2">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#020826" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                              <p className="text-sm font-semibold text-[#020826]" style={{ fontFamily: 'Synonym, sans-serif' }}>Mauvais (condescendant)</p>
                            </div>
                            <p className="text-sm text-[#020826] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>
                              &ldquo;Oups, tu t&apos;es trompé. Réessaie la prochaine fois !&rdquo;
                            </p>
                          </div>
                          {/* Bon */}
                          <div className="p-4" style={{ background: 'linear-gradient(180deg, #D4F9E4 0%, #B8F5D2 100%)' }}>
                            <div className="flex items-center gap-2 mb-2">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#020826" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <p className="text-sm font-semibold text-[#020826]" style={{ fontFamily: 'Synonym, sans-serif' }}>Bon</p>
                            </div>
                            <p className="text-sm text-[#020826] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>
                              &ldquo;Pas tout à fait. Voici pourquoi : [explication]. Astuce pro : [conseil actionnable].&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <div className="h-full">
                        <p
                          className="text-sm font-normal text-[#716040] mb-2"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Exemples de question :
                        </p>
                        <div className="rounded-[4px] overflow-hidden border border-[#EADDCF] h-full">
                          {/* Mauvais */}
                          <div className="p-4" style={{ background: 'linear-gradient(180deg, #FDE8EC 0%, #FDCDD6 100%)', borderBottom: '1px solid #FDA5C1' }}>
                            <div className="flex items-center gap-2 mb-2">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#020826" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                              <p className="text-sm font-semibold text-[#020826]" style={{ fontFamily: 'Synonym, sans-serif' }}>Mauvais (ennuyeux)</p>
                            </div>
                            <p className="text-sm text-[#020826] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>
                              &ldquo;Question 12 : Comment créer un canal dans Microsoft Teams ?&rdquo;
                            </p>
                          </div>
                          {/* Bon */}
                          <div className="p-4" style={{ background: 'linear-gradient(180deg, #D4F9E4 0%, #B8F5D2 100%)' }}>
                            <div className="flex items-center gap-2 mb-2">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#020826" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <p className="text-sm font-semibold text-[#020826]" style={{ fontFamily: 'Synonym, sans-serif' }}>Bon</p>
                            </div>
                            <p className="text-sm text-[#020826] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>
                              &ldquo;Votre équipe a besoin d&apos;un espace dédié à la mise à jour projet. Quelle est la meilleure façon d&apos;organiser cela dans Teams ?&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>

                {/* Le back office — text left + image right */}
                <div>
                  <FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <div>
                        <h3
                          className="text-xl font-semibold text-[#020826] mb-3"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Le back-office : piloter les saisons
                        </h3>
                        <p
                          className="text-base font-normal text-[#020826] leading-relaxed mb-3"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Une application ne suffit pas quand les organisations qui déploient ont besoin de contrôle, ce qui était ressorti clairement pendant la discovery.
                        </p>
                        <p
                          className="text-base font-normal text-[#020826] leading-relaxed mb-3"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Nous avons donc conçu une interface &ldquo;maître du jeu&rdquo; pour les administrateurs :
                        </p>
                        <ul className="list-disc list-outside pl-5 space-y-1 mb-3">
                          {[
                            'Lancer et clôturer les saisons ;',
                            'Suivre la participation en temps réel ;',
                            'Consulter les statistiques d\'engagement ;',
                            'Exporter les données de progression.',
                          ].map((item, i) => (
                            <li key={i} className="text-base font-normal text-[#020826] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>{item}</li>
                          ))}
                        </ul>
                        <p
                          className="text-base font-normal text-[#020826] leading-relaxed"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Ce tableau de bord transforme L&apos;Odyssée d&apos;un jeu en outil de pilotage de la formation. Les RH et les équipes SI peuvent mesurer l&apos;adoption, identifier les thématiques maîtrisées ou non, et ajuster leurs actions de communication en conséquence.
                        </p>
                      </div>
                      <div className="relative w-full min-h-[18rem] rounded-[4px] overflow-hidden bg-[#F9F4EF]">
                        <Image
                          src="/images/usecase-microsoft-odyssey/use-case-img/odyssey-img8.webp"
                          alt="Interface du back office"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </section>

              {/* ── KIT CLE EN MAIN ── */}
              <section id="kit-cle-en-main" className="py-9 md:py-12 scroll-mt-28">
                <FadeIn>
                  <SectionLabel>Le kit de déploiement</SectionLabel>
                </FadeIn>

                <FadeIn>
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-[#020826] leading-tight mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Penser au-delà de l&apos;application
                  </h2>
                </FadeIn>

                {/* Image after subtitle */}
                <FadeIn>
                  <div className="relative w-full rounded-[4px] overflow-hidden mb-8">
                    <Image
                      src="/images/usecase-microsoft-odyssey/use-case-img/odyssey-img10.webp"
                      alt="Kit de déploiement"
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-[4px]"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                </FadeIn>

                <FadeIn>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Une application non déployée est une application inutile, ce qui nous a conduits à produire un ensemble complet pour faciliter l&apos;adoption par les organisations.
                  </p>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Nous avons produit un package complet pour faciliter l&apos;adoption :
                  </p>
                  <ul className="list-disc list-outside pl-5 space-y-1 mb-4">
                    {[
                      'Guides utilisateurs : pour les joueurs, pour les administrateurs ;',
                      'Templates d\'emailings : séquences de lancement, relances, messages de célébrations ;',
                      'Assets réseaux sociaux : visuels prêts à poster sur les intranets et réseaux internes ;',
                      'Présentations : pour convaincre les décideurs, présenter aux équipes ;',
                      'Vidéos tutorielles : démonstration du fonctionnement.',
                    ].map((item, i) => (
                      <li key={i} className="text-base font-normal text-[#020826] leading-relaxed" style={{ fontFamily: 'Synonym, sans-serif' }}>{item}</li>
                    ))}
                  </ul>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    L&apos;ensemble représentait plus de trente éléments livrés en français et en anglais.
                  </p>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    L&apos;objectif était qu&apos;une organisation puisse déployer L&apos;Odyssée sans avoir besoin de produire quoi que ce soit : tout est prêt, il suffit d&apos;activer.
                  </p>
                </FadeIn>
              </section>

              {/* ── RESULTATS ── */}
              <section id="resultats" className="py-9 md:py-12 scroll-mt-28">
                <FadeIn>
                  <SectionLabel>Résultats</SectionLabel>
                </FadeIn>

                <FadeIn>
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-[#020826] leading-tight mb-6"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Résultats et impact
                  </h2>
                </FadeIn>

                <FadeIn>
                  <h3
                    className="text-xl font-semibold text-[#020826] mb-3"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    16 mois d&apos;accompagnement
                  </h3>
                  <p
                    className="text-base font-normal text-[#020826] leading-relaxed mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    La conception s&apos;est terminée en mai 2020, mais le projet ne s&apos;est pas arrêté là. De juillet 2020 à novembre 2021, nous avons accompagné le déploiement dans 35 organisations, avec un travail de terrain actif plutôt qu&apos;un support passif.
                  </p>
                  <ul className="list-disc list-outside pl-5 space-y-2 mb-8">
                    {[
                      'L\'installation et la configuration demandaient un accompagnement parce que chaque environnement Microsoft 365 a ses spécificités. Nous avons guidé les équipes informatiques dans l\'intégration de l\'application et résolu les problèmes techniques au cas par cas.',
                      'La stratégie de lancement variait selon les organisations : quand lancer la première saison, comment communiquer, quels leviers de motivation proposer. Nous avons conseillé chaque organisation sur son approche en fonction de sa culture et de ses contraintes.',
                      'Le suivi pendant les saisons a permis d\'analyser les données d\'usage, d\'identifier les points de friction et de proposer des ajustements. Les retours terrain ont nourri l\'évolution du produit avec de nouvelles fonctionnalités, des améliorations d\'expérience et des corrections.',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-base font-normal text-[#020826] leading-relaxed"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>

                {/* Stats grid — light background */}
                <FadeIn>
                  <h3
                    className="text-xl font-semibold text-[#020826] mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Les chiffres de l&apos;impact
                  </h3>
                </FadeIn>
                <div className="rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] p-6 md:p-8 mb-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      { target: 100, suffix: 'k+', label: 'Utilisateurs dans le monde' },
                      { target: 35, suffix: '', label: 'Organisations déployées\n(500 à 50 000 employés)' },
                      { target: 2, suffix: '', label: 'Langues au lancement\n(FR/EN)' },
                      { target: 68, suffix: '%', label: 'Taux de complétion' },
                      { target: 12, suffix: '', label: 'Minutes de session moyenne' },
                      { target: 46, suffix: '', label: 'Satisfaction utilisateur', isFraction: true },
                    ].map((stat, i) => (
                      <FadeIn key={i} delay={i * 0.08}>
                        <div className="text-center">
                          <span
                            className="block text-3xl md:text-4xl font-medium text-[#020826] mb-1"
                            style={{ fontFamily: 'Amulya, serif' }}
                          >
                            {stat.isFraction ? (
                              <>4,6/5</>
                            ) : (
                              <StatCounter target={stat.target} suffix={stat.suffix} />
                            )}
                          </span>
                          <span
                            className="text-sm font-normal text-[#020826] whitespace-pre-line"
                            style={{ fontFamily: 'Synonym, sans-serif' }}
                          >
                            {stat.label}
                          </span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>

                {/* Effets sur l'adoption — blue gradient cards with green stroke */}
                <FadeIn>
                  <h3
                    className="text-xl font-semibold text-[#020826] mb-4"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Les effets sur l&apos;adoption de Teams
                  </h3>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Usage des canaux Teams', value: '+43%', detail: '(Utilisateurs créant/rejoignant des canaux)', percent: 43 },
                    { label: 'Fonctionnalités réunion', value: '+28%', detail: '(usage breakout rooms, sondages, etc.)', percent: 28 },
                  ].map((metric, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <div
                        className="p-6 rounded-[4px] h-full"
                        style={{
                          background: 'linear-gradient(180deg, #D5E7FE 0%, #C9E1FE 100%)',
                          border: '1px solid #A4F4CF',
                        }}
                      >
                        <p
                          className="text-sm font-normal text-[#716040] mb-2"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {metric.label}
                        </p>
                        <span
                          className="block text-3xl md:text-4xl font-medium text-[#020826] mb-2"
                          style={{ fontFamily: 'Amulya, serif' }}
                        >
                          {metric.value}
                        </span>
                        {/* Progress bar */}
                        <div className="w-full h-2 rounded-full bg-white/50 mb-3">
                          <div
                            className="h-full rounded-full bg-[#A4F4CF]"
                            style={{ width: `${metric.percent}%` }}
                          />
                        </div>
                        <p
                          className="text-sm font-normal text-[#020826]"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {metric.detail}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* GitHub et la suite — yellow gradient card */}
                <FadeIn>
                  <div
                    className="p-6 md:p-8 rounded-[4px]"
                    style={{
                      background: 'linear-gradient(180deg, #FEE8CB 0%, #FFDFB8 100%)',
                      border: '1px solid #FFB86A',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB86A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                        <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
                      </svg>
                      <h3
                        className="text-base font-semibold text-[#020826]"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        GitHub et la suite
                      </h3>
                    </div>
                    <p
                      className="text-base font-normal text-[#020826] leading-relaxed"
                      style={{ fontFamily: 'Synonym, sans-serif' }}
                    >
                      L&apos;Odyssée a ensuite été packagée en format prêt à l&apos;emploi sur GitHub, permettant à d&apos;autres organisations de la déployer de manière autonome sans notre accompagnement.
                    </p>
                  </div>
                </FadeIn>
              </section>

              {/* ── ENSEIGNEMENTS ── */}
              <section id="enseignements" className="py-9 md:py-12 scroll-mt-28">
                <FadeIn>
                  <SectionLabel>Enseignements</SectionLabel>
                </FadeIn>

                <FadeIn>
                  <h2
                    className="text-2xl md:text-3xl font-semibold text-[#020826] leading-tight mb-6"
                    style={{ fontFamily: 'Synonym, sans-serif' }}
                  >
                    Ce que j&apos;ai fait
                  </h2>
                </FadeIn>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Challenger le brief paie quand c\'est argumenté : ',
                      text: 'Microsoft demandait un quiz et nous avons livré un jeu sérieux. La différence s\'est traduite par 100 000 utilisateurs engagés au lieu d\'un formulaire probablement abandonné. Ce recadrage n\'a été possible que parce que nous l\'avons étayé avec des données de recherche et des références pédagogiques, pas simplement avec une intuition créative ;',
                    },
                    {
                      title: 'La gamification fonctionne quand elle respecte les utilisateurs : ',
                      text: 'Le score de satisfaction de 4,6 sur 5 ne vient pas du hasard mais du travail sur le ton, les mécaniques et le respect de l\'intelligence des joueurs. Une gamification mal conçue aurait produit l\'effet inverse : rejet et désengagement ;',
                    },
                    {
                      title: 'Le produit ne suffit pas, l\'accompagnement fait partie de la conception : ',
                      text: 'Sans le kit clé en main et sans les seize mois d\'accompagnement, le déploiement aurait été laborieux et les résultats bien moindres. Penser l\'adoption dès la conception a multiplié l\'impact réel du produit ;',
                    },
                    {
                      title: 'Les contraintes techniques peuvent améliorer le design : ',
                      text: 'Travailler dans les limitations du conteneur Teams a imposé une rigueur qui a finalement amélioré le produit. Moins de fantaisie possible signifiait plus d\'efficacité dans chaque interaction, et la validation technique systématique a éliminé les allers-retours tardifs.',
                    },
                  ].map((learning, i) => (
                    <FadeIn key={i} delay={i * 0.06}>
                      <p
                        className="text-base font-normal text-[#020826] leading-relaxed"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        <span className="font-semibold text-[#716040]">{learning.title}</span>
                        {learning.text}
                      </p>
                    </FadeIn>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* ── Project Navigation ── */}
        <ProjectNavigation slug="microsoft-odyssey" />

        {/* ── CTA ── */}
        <CTABanner />

      </div>
    </>
  );
}
