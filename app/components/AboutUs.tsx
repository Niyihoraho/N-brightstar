"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   ABOUT US COMPONENT
   N-BRIGHT STAR ACADEMY — Enhanced with highlights + stat badge
   ========================================================= */

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      {/* Imigongo Background Pattern Overlay */}
      <div className="about-bg-overlay" aria-hidden="true" />

      <div className="about-container">
        <div className="about-grid">
          {/* Left Column: Text & Content */}
          <div className="about-content">
            {/* Eyebrow with Left & Right Imigongo Diamond Icons */}
            <div className="about-eyebrow">
              <div className="about-eyebrow-icon-wrap">
                <Image
                  src="/icon-3.jpeg"
                  alt="Imigongo icon"
                  width={22}
                  height={22}
                  className="about-eyebrow-icon"
                />
              </div>
              <span className="about-eyebrow-text">{t.about.eyebrow}</span>
              <div className="about-eyebrow-icon-wrap">
                <Image
                  src="/icon-3.jpeg"
                  alt="Imigongo icon"
                  width={22}
                  height={22}
                  className="about-eyebrow-icon"
                />
              </div>
            </div>

            {/* Main Headline */}
            <h2 id="about-heading" className="about-title">
              {t.about.title}
            </h2>

            {/* Summarized Paragraph */}
            <p className="about-desc">
              {t.about.desc}
            </p>

            {/* CTA Button */}
            <div className="about-actions">
              <a href="#contact" className="btn btn-yellow btn--lg" id="about-learn-more-btn">
                {t.about.ctaBtn}
              </a>
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className="about-image-col">
            <div className="about-image-card">
              <div className="about-image-wrap">
                <Image
                  src="/Gemini_Generated_Image_ovqh3wovqh3wovqh.png"
                  alt="Students in NBSA uniforms engaged in classroom learning at Nyagasambu Bright Star Academy"
                  width={720}
                  height={480}
                  className="about-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
