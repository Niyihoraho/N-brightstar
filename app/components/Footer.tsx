import Image from "next/image";
import Link from "next/link";

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

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Academic Pathway", href: "/#programs" },
  { label: "Student Life", href: "/#activities" },
  { label: "Core Values", href: "/#values" },
  { label: "Contact & Admissions", href: "/#contact" },
];

const programLinks = [
  { label: "Crèche (3 Mos – 2 Yrs)", href: "/#programs" },
  { label: "Nursery 1 – 3 (Maternelle)", href: "/#programs" },
  { label: "Primary (P1 – P6)", href: "/#programs" },
  { label: "Trilingual Curriculum", href: "/#about" },
  { label: "Co-Curricular Activities", href: "/#activities" },
  { label: "Secondary (Future Growth)", href: "/#programs" },
];

export default function Footer() {
  const year = new Date().getFullYear();

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
              Nurturing young minds from Crèche to Primary with Rwandan moral values,
              trilingual immersion, and world-class foundational learning in Nyagasambu.
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
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-links-col">
            <h3 className="footer-col-title">Academic Sections</h3>
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
            <h3 className="footer-col-title">Campus Information</h3>
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
                <span>Mon–Fri: 7:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider-new" />

        {/* Bottom bar */}
        <div className="footer-bottom-new">
          <p className="footer-copyright">
            © {year} Nyagasambu Bright Star Academy (NBSA). All rights reserved.
          </p>
          <p className="footer-made-with">
            Nyagasambu, Rwanda 🇷🇼
          </p>
        </div>
      </div>
    </footer>
  );
}
