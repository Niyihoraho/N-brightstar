"use client";

import { useState } from "react";

/* =========================================================
   GUIDELINES SECTION — N-BRIGHT STAR ACADEMY
   Trilingual school guidelines with language toggle
   ========================================================= */

type Lang = "EN" | "FR" | "RW";

const guidelines: Record<Lang, { title: string; subtitle: string; rules: string[] }> = {
  EN: {
    title: "School Guidelines",
    subtitle: "Standards that shape great character.",
    rules: [
      "Arrive at school by 7:30 AM. Late arrival requires a signed note from a parent.",
      "Students must wear the correct NBSA uniform, neat and complete, at all times.",
      "Respectful conduct toward teachers, fellow students, and all school staff is mandatory.",
      "Mobile phones and electronic devices are prohibited during school hours.",
      "Students are responsible for the care of school property and learning materials.",
      "Fighting, bullying, or any form of harassment will result in disciplinary action.",
      "Parents must attend all scheduled parent-teacher meetings.",
      "Completed homework must be submitted on the assigned date.",
    ],
  },
  FR: {
    title: "Règlement Scolaire",
    subtitle: "Des normes qui façonnent un grand caractère.",
    rules: [
      "Arriver à l'école avant 7h30. Un retard nécessite une note signée d'un parent.",
      "Les élèves doivent porter l'uniforme NBSA complet et propre en tout temps.",
      "Le respect envers les enseignants, les élèves et le personnel est obligatoire.",
      "Les téléphones portables et appareils électroniques sont interdits pendant les cours.",
      "Les élèves sont responsables du matériel scolaire mis à leur disposition.",
      "La bagarre, le harcèlement ou toute forme de violence entraîne une sanction disciplinaire.",
      "Les parents doivent assister à toutes les réunions parents-enseignants prévues.",
      "Les devoirs doivent être remis à la date fixée par l'enseignant.",
    ],
  },
  RW: {
    title: "Amategeko y'Ishuri",
    subtitle: "Amahame ashinga umuntu w'akili.",
    rules: [
      "Aza ku ishuri mbere ya saa moya n'igice. Ugeze inyuma agomba kuzana inzandiko y'umubyeyi.",
      "Abanyeshuri bagomba kwambara imyambaro y'ishuri NBSA neza no mu buryo bwuzuye.",
      "Gukurikirana abarimu, inshuti n'abakozi b'ishuri biragomba, nta mpaka.",
      "Telefoni n'ibyuma by'ikoranabuhanga birabujijwe mu masomo.",
      "Abanyeshuri bagomba kurinda ibintu by'ishuri n'ibitabo by'kwiga.",
      "Kurwana, guhonyora cyangwa gutera ubwoba bigabanya inkurikizi z'imyifatire.",
      "Ababyeyi bagomba gutunga inama zose z'ababyeyi n'abarimu.",
      "Imirimo y'urugo igomba guhabwa ku itariki iteganyijwe n'umwarimu.",
    ],
  },
};

const langLabels: { code: Lang; label: string; flag: string }[] = [
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
  { code: "RW", label: "Kinyarwanda", flag: "🇷🇼" },
];

function NumberBadge({ n }: { n: number }) {
  return (
    <span className="guideline-num-badge">{n}</span>
  );
}

function ScaleIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

export default function Guidelines() {
  const [lang, setLang] = useState<Lang>("EN");
  const content = guidelines[lang];

  return (
    <section id="guidelines" className="guidelines-section-new" aria-labelledby="guidelines-heading">
      <div className="guidelines-bg-pattern" aria-hidden="true" />

      <div className="guidelines-container">
        {/* Left: header + language switcher */}
        <div className="guidelines-left">
          <div className="eyebrow eyebrow--white">
            <span className="eyebrow-dot eyebrow-dot--yellow" />
            Governance
          </div>

          <div className="guidelines-icon-wrap">
            <ScaleIcon size={36} color="var(--yellow)" />
          </div>

          <h2 id="guidelines-heading" className="guidelines-title">
            {content.title}
          </h2>
          <p className="guidelines-subtitle">{content.subtitle}</p>

          {/* Language Toggle */}
          <div className="guidelines-lang-toggle" role="group" aria-label="Select language">
            {langLabels.map(({ code, label, flag }) => (
              <button
                key={code}
                type="button"
                className={`guidelines-lang-btn${lang === code ? " guidelines-lang-btn--active" : ""}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
              >
                <span>{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          <p className="guidelines-lang-note">
            Tap a language to view the guidelines in English, French, or Kinyarwanda.
          </p>
        </div>

        {/* Right: rules list */}
        <div className="guidelines-right">
          <ol className="guidelines-list" key={lang}>
            {content.rules.map((rule, i) => (
              <li key={i} className="guideline-item">
                <NumberBadge n={i + 1} />
                <span className="guideline-text">{rule}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
