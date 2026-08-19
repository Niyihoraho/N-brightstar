"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   VALUES SECTION + CTA BAND — N-BRIGHT STAR ACADEMY
   5 core values + yellow CTA strip
   ========================================================= */

function HeartIcon({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function HandshakeIcon({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88" />
      <path d="m5 7 5-2 3 3-2 2-2.5-2.5" />
      <path d="M4.24 14.24a3 3 0 0 1 0-4.24l1.76-1.76" />
      <path d="M9 11 6.5 13.5a1 1 0 1 0 3 3" />
    </svg>
  );
}

function UserCheckIcon({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function LightbulbIcon({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function ArrowRightIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function GraduationCapIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 10 3 12 0v-5" />
    </svg>
  );
}

export default function Values() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Values Section ── */}
      <section id="values" className="values-section-new" aria-labelledby="values-heading">
        <div className="values-bg-overlay" aria-hidden="true" />
        <div className="values-container">
          <div className="values-header-new">
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
              <span className="about-eyebrow-text">{t.values.eyebrow}</span>
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
            <h2 id="values-heading" className="about-title" style={{ marginBottom: "0.75rem" }}>
              {t.values.title}
            </h2>
          </div>

          <div className="values-grid-new">
            {t.values.items.map((v) => {
              const iconInfo =
                v.id === "excellence" ? { icon: <HeartIcon size={26} color="#1D5FA5" />, iconBg: "val-icon-bg--blue" } :
                v.id === "integrity" ? { icon: <ShieldCheckIcon size={26} color="#3E9B4F" />, iconBg: "val-icon-bg--green" } :
                v.id === "respect" ? { icon: <HandshakeIcon size={26} color="#D4A000" />, iconBg: "val-icon-bg--yellow" } :
                v.id === "responsibility" ? { icon: <UserCheckIcon size={26} color="#D8342F" />, iconBg: "val-icon-bg--red" } :
                { icon: <LightbulbIcon size={26} color="#9c27b0" />, iconBg: "val-icon-bg--purple" };
              return (
                <div key={v.id} className="val-card-new">
                  {/* Topography Contour Overlay like Academic Program Cards */}
                  <div className="val-card-overlay" aria-hidden="true" />

                  <div className={`val-icon-new ${iconInfo.iconBg}`}>{iconInfo.icon}</div>
                  <h3 className="val-name-new">{v.name}</h3>
                  <p className="val-desc-new">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <div className="cta-band-new" aria-label="Call to action">
        <div className="cta-band-pattern" aria-hidden="true" />
        <div className="cta-band-container">
          <div className="cta-band-text-new">
            <h2 className="cta-band-title-new">
              {t.values.ctaTitle}
            </h2>
            <p className="cta-band-sub-new">
              {t.values.ctaSub}
            </p>
          </div>
          <div className="cta-band-actions">
            <a href="#contact" className="btn btn-blue btn--lg cta-band-btn" id="values-apply-btn">
              <GraduationCapIcon size={18} color="#fff" />
              {t.values.applyBtn}
              <ArrowRightIcon size={16} color="#fff" />
            </a>
            <a
              href="/Babyeyi 2026-2027.pdf"
              className="btn btn-outline-blue btn--lg cta-band-btn"
              download="Babyeyi 2026-2027.pdf"
              id="values-tuition-btn"
            >
              {t.values.tuitionBtn}
            </a>
            <a
              href="/NBSA ADMISSION FORM.pdf"
              className="btn btn-outline-blue btn--lg cta-band-btn"
              download="NBSA ADMISSION FORM.pdf"
              id="values-admission-btn"
            >
              {t.values.formBtn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
