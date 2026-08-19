"use client";

import Image from "next/image";

/* =========================================================
   MISSION & CORE VALUES SECTION — N-BRIGHT STAR ACADEMY
   Two-card side-by-side layout with school Primary Blue,
   topography overlay, Imigongo background texture, and
   integrated student imagery.
   ========================================================= */

function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5B800"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const coreValues = [
  {
    title: "Integrity & Ethics",
    desc: "Responsible, respectful, and guided by strong moral principles.",
  },
  {
    title: "Intellectual Curiosity",
    desc: "Critical thinker, creative, innovative, and reflective.",
  },
  {
    title: "Inclusivity & Respect",
    desc: "Caring, collaborative, and welcoming of diversity.",
  },
  {
    title: "Excellence",
    desc: "Pursuing the highest academic and personal standards.",
  },
];

export default function MissionVision() {
  return (
    <section id="mission-values" className="mission-section" aria-labelledby="mission-card-heading">
      {/* Imigongo Background Pattern Overlay (matching AboutUs opacity) */}
      <div className="mission-bg-overlay" aria-hidden="true" />

      <div className="mission-container">
        <div className="mission-cards-grid">
          {/* ── CARD 1: MISSION ── */}
          <article className="mission-card mission-card--mission">
            {/* Topography Contour Overlay */}
            <div className="mission-card-topography" aria-hidden="true" />

            <div className="mission-card-body">
              <div className="mission-card-content">
                <h2 id="mission-card-heading" className="mission-card-title">
                  Mission
                </h2>
                <p className="mission-card-text">
                  Nyagasambu Bright Star Academy provides an outstanding educational experience
                  that fosters intellectual, social, emotional, and physical growth in a safe,
                  inspiring, and inclusive environment.
                </p>

              </div>

              <div className="mission-card-image-col">
                <div className="mission-card-image-frame">
                  <Image
                    src="/Gemini_Generated_Image_ovqh3wovqh3wovqh.png"
                    alt="Students in NBSA uniforms engaged in classroom learning at Nyagasambu Bright Star Academy"
                    fill
                    className="mission-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 280px"
                  />
                  <div className="mission-card-image-overlay" aria-hidden="true" />
                </div>
              </div>
            </div>
          </article>

          {/* ── CARD 2: CORE VALUES ── */}
          <article className="mission-card mission-card--values">
            {/* Topography Contour Overlay */}
            <div className="mission-card-topography" aria-hidden="true" />

            <div className="mission-card-body">
              <div className="mission-card-content">
                <h2 className="mission-card-title">Core Values</h2>
                <ul className="mission-values-list">
                  {coreValues.map((val, idx) => (
                    <li key={idx} className="mission-value-item">
                      <div className="mission-val-icon-wrap">
                        <CheckIcon size={18} />
                      </div>
                      <p className="mission-val-text">
                        <strong className="mission-val-strong">{val.title}:</strong>{" "}
                        {val.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mission-card-image-col">
                <div className="mission-card-image-frame">
                  <Image
                    src="/Gemini_Generated_Image_kzfsjwkzfsjwkzfs.png"
                    alt="Bright student raising hand enthusiastically in classroom"
                    fill
                    className="mission-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 280px"
                  />
                  <div className="mission-card-image-overlay" aria-hidden="true" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
