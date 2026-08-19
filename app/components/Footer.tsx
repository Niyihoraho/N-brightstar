"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   FOOTER — N-BRIGHT STAR ACADEMY
   Redesigned footer with /imigongo-5.png background pattern
   and clean 4-column modern architecture.
   ========================================================= */

function MailIcon({ size = 15, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ size = 15, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ size = 15, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon({ size = 15, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.footer.links.home, href: "/#home", download: false },
    { label: t.footer.links.about, href: "/#about", download: false },
    { label: t.footer.links.programs, href: "/#programs", download: false },
    { label: t.footer.links.board, href: "/board", download: false },
    { label: t.footer.links.tuition, href: "/Babyeyi 2026-2027.pdf", download: true },
    { label: t.footer.links.form, href: "/NBSA ADMISSION FORM.pdf", download: true },
    { label: t.footer.links.contact, href: "/#contact", download: false },
  ];

  const programLinks = [
    { label: t.footer.sections.creche, href: "/#programs" },
    { label: t.footer.sections.nursery, href: "/#programs" },
    { label: t.footer.sections.primary, href: "/#programs" },
    { label: t.footer.sections.trilingual, href: "/#about" },
    { label: t.footer.sections.activities, href: "/#activities" },
    { label: t.footer.sections.secondary, href: "/#programs" },
  ];

  return (
    <footer className="footer-new" aria-label="Site footer">
      {/* Imigongo Background Pattern Overlay */}
      <div className="footer-bg-overlay" aria-hidden="true" />

      <div className="footer-body-new">
        <div className="footer-grid-new">
          {/* Brand column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/logo.png"
                alt="NBSA Logo"
                width={52}
                height={52}
                className="footer-logo-img"
              />
              <div className="footer-brand-text">
                <div className="footer-brand-name">N-Bright Star Academy</div>
                <div className="footer-brand-sub">Nyagasambu · Excellence Begins Here</div>
              </div>
            </Link>
            <p className="footer-tagline">
              {t.footer.tagline}
            </p>

            {/* School House Color Indicators */}
            <div className="footer-house-colors">
              <span className="footer-house-dot footer-house-dot--blue" title="Blue House" />
              <span className="footer-house-dot footer-house-dot--yellow" title="Yellow House" />
              <span className="footer-house-dot footer-house-dot--green" title="Green House" />
              <span className="footer-house-dot footer-house-dot--red" title="Red House" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">{t.footer.quickLinksTitle}</h3>
            <ul className="footer-links-list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  {l.download ? (
                    <a href={l.href} className="footer-link" download>
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="footer-link">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">{t.footer.academicTitle}</h3>
            <ul className="footer-links-list">
              {programLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">{t.footer.campusTitle}</h3>
            <div className="footer-contact-list">
              <a href="tel:+250788123456" className="footer-contact-item">
                <span className="footer-contact-icon">
                  <PhoneIcon size={15} color="var(--yellow)" />
                </span>
                <span>+250 788 123 456</span>
              </a>
              <a href="mailto:brightstaracademyschool@gmail.com" className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MailIcon size={15} color="var(--yellow)" />
                </span>
                <span>brightstaracademyschool@gmail.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=Nyagasambu+Rwanda"
                className="footer-contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-contact-icon">
                  <MapPinIcon size={15} color="var(--yellow)" />
                </span>
                <span>Nyagasambu, Rwanda</span>
              </a>
              <div className="footer-contact-item footer-contact-item--static">
                <span className="footer-contact-icon">
                  <ClockIcon size={15} color="var(--yellow)" />
                </span>
                <span>{t.footer.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider-new" />

        {/* Bottom bar */}
        <div className="footer-bottom-new">
          <p className="footer-copyright">
            © {year} {t.footer.copyright}
          </p>
          <p className="footer-made-with">
            {t.footer.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
