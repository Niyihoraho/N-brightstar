"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   ACTIVITIES SECTION — N-BRIGHT STAR ACADEMY
   Header on White BG + Blue Container with 2 Divisions
   ========================================================= */

function TrophyIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
      <path d="M6 4h12v7a6 6 0 0 1-12 0V4z" />
    </svg>
  );
}

function MusicIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function SparklesIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function Activities() {
  const { t } = useLanguage();

  return (
    <section id="activities" className="activities-section-new" aria-labelledby="activities-heading">
      <div className="activities-container">
        {/* Section Header on White Background */}
        <div className="activities-header-new">
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
            <span className="about-eyebrow-text">{t.activities.eyebrow}</span>
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
          <h2 id="activities-heading" className="about-title" style={{ marginBottom: "0.75rem" }}>
            {t.activities.title}
          </h2>
          <p className="section-lead" style={{ maxWidth: "640px", margin: "0 auto 2.5rem" }}>
            {t.activities.lead}
          </p>
        </div>

        {/* Blue Container with Topography Overlay & Two-Division Split */}
        <div className="activities-blue-box">
          <div className="activities-topography-overlay" aria-hidden="true" />

          <div className="activities-two-col">
            {/* Left Division: Framed Image */}
            <div className="activities-image-col">
              <div className="activities-image-frame">
                <Image
                  src="/game-1.png"
                  alt="N-Bright Star Academy students engaged in active campus life"
                  width={680}
                  height={540}
                  className="activities-image-clean"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                />
              </div>
            </div>

            {/* Right Division: Activities List with Background None */}
            <div className="activities-content-col">
              <div className="activities-clean-list">
                {t.activities.items.map((item) => {
                  const icon =
                    item.id === "sports" ? <TrophyIcon size={22} color="#F5B800" /> :
                    item.id === "arts" ? <MusicIcon size={22} color="#F5B800" /> :
                    item.id === "culture" ? <SparklesIcon size={22} color="#F5B800" /> :
                    <ShieldCheckIcon size={22} color="#F5B800" />;
                  return (
                    <div key={item.id} className="activity-clean-row">
                      <div className="activity-clean-icon">
                        {icon}
                      </div>
                      <div className="activity-clean-info">
                        <h3 className="activity-clean-title">{item.title}</h3>
                        <p className="activity-clean-desc">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
