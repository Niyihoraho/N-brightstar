"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

function CheckIcon({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Programs() {
  const { t } = useLanguage();

  return (
    <section id="programs" className="programs-section-new" aria-labelledby="programs-heading">
      {/* Imigongo Background Pattern Overlay */}
      <div className="programs-bg-overlay" aria-hidden="true" />

      <div className="programs-container">
        {/* Section Header */}
        <div className="programs-header-new">
          <div className="about-eyebrow">
            <div className="about-eyebrow-icon-wrap">
              <Image
                src="/icon-3.jpeg"
                alt="Imigongo icon"
                width={20}
                height={20}
                className="about-eyebrow-icon"
              />
            </div>
            <span className="about-eyebrow-text">{t.programs.eyebrow}</span>
            <div className="about-eyebrow-icon-wrap">
              <Image
                src="/icon-3.jpeg"
                alt="Imigongo icon"
                width={20}
                height={20}
                className="about-eyebrow-icon"
              />
            </div>
          </div>
          <h2 id="programs-heading" className="about-title" style={{ marginBottom: "0.75rem" }}>
            {t.programs.title}
          </h2>

        </div>

        {/* Smart Square Small Cards Grid */}
        <div className="prog-square-grid">
          {t.programs.items.map((prog) => {
            const theme = prog.id === "creche" ? "green" : prog.id === "nursery" ? "blue" : "yellow";
            return (
              <article
                key={prog.id}
                className="prog-square-card"
              >
                {/* Higher Opacity Topography Background Pattern Overlay */}
                <div className="prog-square-overlay" aria-hidden="true" />

                <div className="prog-square-content">
                  {/* Top Row: Age Tag */}
                  <div className="prog-square-top">
                    <span className={`prog-square-age prog-square-age--${theme}`}>
                      {prog.age}
                    </span>
                  </div>

                  {/* Card Titles */}
                  <div className="prog-square-titles">
                    <h3 className="prog-square-name">{prog.name}</h3>
                    <span className={`prog-square-level prog-square-level--${theme}`}>
                      {prog.level}
                    </span>
                  </div>

                  {/* Summarized Clean Summary */}
                  <p className="prog-square-desc">{prog.summary}</p>

                  {/* Compact Summarized Points */}
                  <div className="prog-square-points">
                    {prog.points.map((point, idx) => (
                      <div key={idx} className="prog-square-point">
                        <span className={`prog-square-dot prog-square-dot--${theme}`}>
                          <CheckIcon size={10} />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
