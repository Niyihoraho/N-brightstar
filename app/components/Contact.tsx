"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   CONTACT & ADMISSIONS SECTION — N-BRIGHT STAR ACADEMY
   Two clean cards: Campus Contact Info & Admission Enrolment
   ========================================================= */

function PhoneIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DownloadIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function CheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section-new" aria-labelledby="contact-heading">
      {/* Imigongo Background Pattern Overlay */}
      <div className="contact-bg-overlay" aria-hidden="true" />

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header-new">
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
            <span className="about-eyebrow-text">{t.contact.eyebrow}</span>
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
          <h2 id="contact-heading" className="about-title" style={{ marginBottom: "0.75rem" }}>
            {t.contact.title}
          </h2>
          <p className="section-lead" style={{ maxWidth: "600px", margin: "0 auto" }}>
            {t.contact.lead}
          </p>
        </div>

        {/* Two-column balanced cards grid */}
        <div className="contact-grid-new">
          {/* Card 1: Direct Contact & Campus Map */}
          <div className="contact-box-new">
            <div className="contact-box-overlay" aria-hidden="true" />
            <div className="contact-box-content">
              <div>
                <div className="contact-box-header">
                  <span className="contact-badge contact-badge--blue">DIRECT CONTACT</span>
                  <h3 className="contact-box-title">{t.contact.campusTitle}</h3>
                  <p className="contact-box-desc">
                    Call or visit our administration office in Nyagasambu during official school hours.
                  </p>
                </div>

                <div className="contact-channel-list">
                  <a href="tel:+250788123456" className="contact-channel-item">
                    <div className="contact-channel-icon">
                      <PhoneIcon size={18} color="#1D5FA5" />
                    </div>
                    <div className="contact-channel-info">
                      <span className="contact-channel-label">Phone Call & WhatsApp</span>
                      <span className="contact-channel-val">+250 788 123 456</span>
                    </div>
                  </a>

                  <a href="mailto:brightstaracademyschool@gmail.com" className="contact-channel-item">
                    <div className="contact-channel-icon">
                      <MailIcon size={18} color="#1D5FA5" />
                    </div>
                    <div className="contact-channel-info">
                      <span className="contact-channel-label">Official Email</span>
                      <span className="contact-channel-val">brightstaracademyschool@gmail.com</span>
                    </div>
                  </a>

                  <div className="contact-channel-item contact-channel-item--static">
                    <div className="contact-channel-icon">
                      <ClockIcon size={18} color="#1D5FA5" />
                    </div>
                    <div className="contact-channel-info">
                      <span className="contact-channel-label">{t.contact.hoursLabel}</span>
                      <span className="contact-channel-val">{t.contact.hoursVal}</span>
                    </div>
                  </div>

                  <div className="contact-channel-item contact-channel-item--static">
                    <div className="contact-channel-icon">
                      <MapPinIcon size={18} color="#1D5FA5" />
                    </div>
                    <div className="contact-channel-info">
                      <span className="contact-channel-label">Location</span>
                      <span className="contact-channel-val">{t.contact.campusLocation}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="contact-map-card">
                <iframe
                  title="NBSA Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.253!2d29.747!3d-2.497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNyagasambu%2C+Rwanda!5e0!3m2!1sen!2srw!4v1"
                  width="100%"
                  height="170"
                  style={{ border: 0, borderRadius: "14px", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Admissions & Enrolment */}
          <div className="contact-box-new">
            <div className="contact-box-overlay" aria-hidden="true" />
            <div className="contact-box-content">
              <div>
                <div className="contact-box-header">
                  <span className="contact-badge contact-badge--yellow">ENROLLMENT OPEN</span>
                  <h3 className="contact-box-title">{t.contact.admissionsTitle}</h3>
                  <p className="contact-box-desc">
                    Enrollment is currently open across all levels from Crèche to Primary 6.
                  </p>
                </div>

                <div className="contact-admission-highlights">
                  {t.contact.steps.map((step, idx) => (
                    <div key={idx} className="contact-highlight-item">
                      <div className="contact-highlight-dot">
                        <CheckIcon size={12} />
                      </div>
                      <div className="contact-highlight-info">
                        <h4 className="contact-highlight-title">{step.title}</h4>
                        <p className="contact-highlight-text">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-actions-wrap">
                <a
                  href="/Babyeyi 2026-2027.pdf"
                  className="btn btn-yellow btn--lg contact-btn-full"
                  download="Babyeyi 2026-2027.pdf"
                  id="contact-tuition-btn"
                >
                  <DownloadIcon size={18} color="currentColor" />
                  {t.contact.downloadTuitionBtn}
                </a>
                <a
                  href="/NBSA ADMISSION FORM.pdf"
                  className="btn btn-outline-blue btn--lg contact-btn-full"
                  download="NBSA ADMISSION FORM.pdf"
                  id="contact-download-btn"
                >
                  <DownloadIcon size={18} color="currentColor" />
                  {t.contact.downloadFormBtn}
                </a>
                <a
                  href="mailto:brightstaracademyschool@gmail.com?subject=Admission%20Enquiry%20-%20NBSA"
                  className="btn btn-outline-blue btn--lg contact-btn-full"
                  id="contact-email-btn"
                >
                  <MailIcon size={18} color="currentColor" />
                  {t.contact.emailBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
