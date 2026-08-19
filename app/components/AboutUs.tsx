"use client";

import Image from "next/image";

/* =========================================================
   ABOUT US COMPONENT
   N-BRIGHT STAR ACADEMY — Enhanced with highlights + stat badge
   ========================================================= */

const highlights = [
  "Trilingual Education",
  "Crèche to Primary",
  "Rwandan Values",
  "Safe & Nurturing",
];

export default function AboutUs() {
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
              <span className="about-eyebrow-text">ABOUT US</span>
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
              A World-Class Education <br className="about-title-br" />
              For Every Learner
            </h2>

            {/* Summarized Paragraph */}
            <p className="about-desc">
              Nyagasambu Bright Star Academy (NBSA) provides premier Crèche to Primary
              education in Rwanda, empowering young learners through trilingual fluency,
              academic excellence, and strong moral character in a safe, inspiring environment.
            </p>

            {/* CTA Button */}
            <div className="about-actions">
              <a href="#contact" className="btn btn-yellow btn--lg" id="about-learn-more-btn">
                Learn More About Us
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
