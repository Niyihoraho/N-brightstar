"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { useLanguage, type Language } from "../context/LanguageContext";

/* =========================================================
   BOARD PAGE — N-BRIGHT STAR ACADEMY
   Board of Governors / School Leadership
   ========================================================= */

function ArrowLeftIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function UserCircleIcon({ size = 32, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  );
}

function CheckIcon({ size = 10, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
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

function TranslateIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
    </svg>
  );
}

function ChevronDownIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const languages = [
  { code: "EN", name: "English", flag: "🇬🇧" },
  { code: "FR", name: "Français", flag: "🇫🇷" },
];


/* ── Board data ── */
interface BoardMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  badgeLabel: string;
  image?: string;
  bio: string;
  responsibilities: string[];
}

const boardMembers: BoardMember[] = [
  {
    id: "md",
    name: "Mr. NTWARI Rugazura Yannick",
    role: "Managing Director",
    badge: "md",
    badgeLabel: "Management",
    bio: "The visionary founder and Managing Director of N-Bright Star Academy. Mr. Ntwari brings strategic leadership and a deep commitment to accessible, quality education in Nyaruguru District and across Rwanda.",
    responsibilities: [
      "Strategic vision and school direction",
      "Community partnerships and relations",
      "Financial oversight and sustainability",
      "Policy development and governance",
    ],
  },
  {
    id: "principal",
    name: "Mrs. UWIMANA Claudette",
    role: "School Principal / Head Teacher",
    badge: "principal",
    badgeLabel: "Academic Leadership",
    image: "/school head teacher.jpg",
    bio: "A dedicated educator with over a decade of teaching experience, Mrs. Uwimana oversees day-to-day academic operations, ensuring excellence in learning outcomes from Crèche through Primary Six.",
    responsibilities: [
      "Academic curriculum oversight",
      "Teacher recruitment and mentorship",
      "Student welfare and discipline",
      "Parent-school communication",
    ],
  },
  {
    id: "dep-principal",
    name: "Mr. HABIMANA Jean-Pierre",
    role: "Deputy Principal",
    badge: "deputy",
    badgeLabel: "Administration",
    bio: "Mr. Habimana supports the Principal in daily school management, coordinating staff schedules, student affairs, and co-curricular programs that make NBSA a vibrant learning community.",
    responsibilities: [
      "Staff coordination and scheduling",
      "Co-curricular programme management",
      "Student admissions coordination",
      "School events and activities",
    ],
  },
  {
    id: "academic-head",
    name: "Mrs. MUKAMANA Sandrine",
    role: "Head of Academics",
    badge: "academic",
    badgeLabel: "Curriculum",
    bio: "Mrs. Mukamana leads curriculum development and quality assurance, aligning NBSA's teaching practices with Rwanda Education Board standards and best international practices.",
    responsibilities: [
      "Curriculum design and alignment",
      "Assessment and examination oversight",
      "Teacher professional development",
      "Academic performance reporting",
    ],
  },
  {
    id: "finance",
    name: "Mr. NIYONKURU Emmanuel",
    role: "Finance & Operations Director",
    badge: "finance",
    badgeLabel: "Finance",
    bio: "Mr. Niyonkuru manages the school's financial health and operational infrastructure, ensuring that resources are effectively allocated to deliver the best possible learning environment.",
    responsibilities: [
      "Budget planning and management",
      "Fee collection and financial reporting",
      "Infrastructure maintenance oversight",
      "Procurement and resource allocation",
    ],
  },
  {
    id: "welfare",
    name: "Mrs. INGABIRE Félicité",
    role: "Student Welfare Officer",
    badge: "welfare",
    badgeLabel: "Welfare",
    bio: "Mrs. Ingabire is the heart of student care at NBSA, overseeing health, nutrition, emotional well-being, and the supportive environment that every child deserves.",
    responsibilities: [
      "Student health and safety",
      "Nutrition and feeding programme",
      "Counselling and emotional support",
      "Special needs coordination",
    ],
  },
];

const badgeColors: Record<string, { bg: string; text: string }> = {
  md: { bg: "var(--blue)", text: "#fff" },
  principal: { bg: "var(--yellow)", text: "var(--ink)" },
  deputy: { bg: "var(--green)", text: "#fff" },
  academic: { bg: "#7c3aed", text: "#fff" },
  finance: { bg: "var(--blue-dark)", text: "#fff" },
  welfare: { bg: "#D8342F", text: "#fff" },
};

export default function BoardPage() {
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const selectedLang = languages.find((l) => l.code === lang) || languages[0];

  // Close language dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ── Sticky top nav ── */}
      <header className="board-topbar">
        <div className="board-topbar-inner">
          <Link href="/" className="board-back-link">
            <ArrowLeftIcon />
            {t.board.backHome}
          </Link>
          <Link href="/" className="board-topbar-logo">
            <Image src="/logo.png" alt="NBSA Logo" width={36} height={36} />
            <span>N-Bright Star Academy</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Language Dropdown — same design as main navbar */}
            <div className="lang-switcher-wrap" ref={langDropdownRef}>
              <button
                type="button"
                className="lang-switcher-btn"
                onClick={() => setLangOpen((prev) => !prev)}
                aria-expanded={langOpen}
                aria-haspopup="true"
                aria-label="Change language"
              >
                <TranslateIcon size={16} color="var(--blue)" />
                <span className="lang-code">{selectedLang.code}</span>
                <span className="lang-chevron">
                  <ChevronDownIcon size={12} />
                </span>
              </button>

              {langOpen && (
                <div className="lang-dropdown" role="menu">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      className={`lang-option${l.code === selectedLang.code ? " lang-option--active" : ""}`}
                      onClick={() => {
                        setLang(l.code as Language);
                        setLangOpen(false);
                      }}
                      role="menuitem"
                    >
                      <div className="lang-option-left">
                        <span className="lang-flag">{l.flag}</span>
                        <span className="lang-name">{l.name}</span>
                      </div>
                      <span className="lang-tag">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#contact" className="btn btn-blue btn--sm board-topbar-cta">
              {t.board.applyNow}
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="board-hero">
          <div className="board-hero-bg-overlay" aria-hidden="true" />
          <div className="board-hero-content">
            {/* Eyebrow with Left & Right Imigongo Diamond Icons matching AboutUs */}
            <div className="about-eyebrow" style={{ justifyContent: "center" }}>

              <span className="about-eyebrow-text" style={{ color: "var(--yellow)" }}>
                {t.board.heroEyebrow}
              </span>

            </div>

            {/* Main Headline */}
            <h1 className="board-hero-title">
              {t.board.heroTitle}
            </h1>

            <p className="board-hero-sub">
              {t.board.heroSub}
            </p>
          </div>
        </section>

        {/* ── Mission / Metric Strip ── */}
        <div className="board-mission-strip">
          <div className="board-mission-inner">
            <div className="board-mission-item">
              <span className="board-mission-num">5+</span>
              <span className="board-mission-label">{t.board.stats.years}</span>
            </div>
            <div className="board-mission-divider" />
            <div className="board-mission-item">
              <span className="board-mission-num">6</span>
              <span className="board-mission-label">{t.board.stats.members}</span>
            </div>
            <div className="board-mission-divider" />
            <div className="board-mission-item">
              <span className="board-mission-num">300+</span>
              <span className="board-mission-label">{t.board.stats.students}</span>
            </div>
            <div className="board-mission-divider" />
            <div className="board-mission-item">
              <span className="board-mission-num">100%</span>
              <span className="board-mission-label">{t.board.stats.commitment}</span>
            </div>
          </div>
        </div>

        {/* ── Board members grid ── */}
        <section className="board-members-section">
          <div className="board-members-bg-overlay" aria-hidden="true" />
          <div className="board-members-container">
            {/* Section Header with Left & Right Imigongo Icons */}
            <div className="board-section-header">
              <div className="about-eyebrow" style={{ justifyContent: "center" }}>
                <div className="about-eyebrow-icon-wrap">
                  <Image
                    src="/icon-3.jpeg"
                    alt="Imigongo icon"
                    width={20}
                    height={20}
                    className="about-eyebrow-icon"
                  />
                </div>
                <span className="about-eyebrow-text">{t.board.teamEyebrow}</span>
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
              <h2 className="about-title" style={{ marginBottom: "0.75rem" }}>
                {t.board.teamTitle}
              </h2>
              <p className="section-lead" style={{ maxWidth: "640px", margin: "0 auto" }}>
                {t.board.teamLead}
              </p>
            </div>

            {/* Board Cards Grid with Topography Overlay */}
            <div className="board-grid">
              {boardMembers.map((member) => {
                const colors = badgeColors[member.badge];
                return (
                  <article key={member.id} className="board-card">
                    {/* Topography Contour Background Overlay */}
                    <div className="board-card-overlay" aria-hidden="true" />

                    <div className="board-card-content">
                      {/* Top Header: Avatar & Category Badge */}
                      <div className="board-card-header">
                        <div className="board-card-avatar-wrap">
                          <div className="board-card-avatar" style={{ background: `${colors.bg}14` }}>
                            {member.image ? (
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={58}
                                height={58}
                                className="board-card-avatar-img"
                              />
                            ) : (
                              <UserCircleIcon size={34} color={colors.bg} />
                            )}
                          </div>
                        </div>
                        <span
                          className="board-card-badge"
                          style={{ background: colors.bg, color: colors.text }}
                        >
                          {member.badgeLabel}
                        </span>
                      </div>

                      {/* Name + Role */}
                      <div className="board-card-titles">
                        <h3 className="board-card-name">{member.name}</h3>
                        <span className="board-card-role" style={{ color: colors.bg }}>
                          {member.role}
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="board-card-bio">{member.bio}</p>

                      {/* Responsibilities Box */}
                      <div className="board-card-responsibilities">
                        <p className="board-resp-title">{t.board.keyRespTitle}</p>
                        <ul className="board-resp-list">
                          {member.responsibilities.map((r, idx) => (
                            <li key={idx} className="board-resp-item">
                              <span
                                className="board-resp-dot"
                                style={{ background: `${colors.bg}15`, color: colors.bg }}
                              >
                                <CheckIcon size={10} color={colors.bg} />
                              </span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Governance Principles ── */}
        <section className="board-principles-section">
          <div className="board-principles-bg-overlay" aria-hidden="true" />
          <div className="board-principles-container">
            {/* Section Header with Left & Right Imigongo Icons */}
            <div className="board-section-header">
              <div className="about-eyebrow" style={{ justifyContent: "center" }}>
                <div className="about-eyebrow-icon-wrap">
                  <Image
                    src="/icon-3.jpeg"
                    alt="Imigongo icon"
                    width={20}
                    height={20}
                    className="about-eyebrow-icon"
                  />
                </div>
                <span className="about-eyebrow-text">{t.board.governanceEyebrow}</span>
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
              <h2 className="about-title" style={{ marginBottom: "0.75rem" }}>
                {t.board.governanceTitle}
              </h2>
            </div>

            {/* Principle Cards with Topography Overlay */}
            <div className="board-principles-grid">
              {t.board.principles.map((p) => (
                <div key={p.title} className="board-principle-card">
                  <div className="board-principle-overlay" aria-hidden="true" />
                  <div className="board-principle-content">
                    <h3 className="board-principle-title">{p.title}</h3>
                    <p className="board-principle-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <div className="board-cta-band" aria-label="Call to action">
          <div className="board-cta-inner">
            <div>
              <h2 className="board-cta-title">{t.board.ctaTitle}</h2>
              <p className="board-cta-sub">{t.board.ctaSub}</p>
            </div>
            <div className="board-cta-actions">
              <Link href="/#contact" className="btn btn-yellow btn--lg">
                <GraduationCapIcon size={18} color="var(--ink)" />
                {t.board.applyBtn}
                <ArrowRightIcon size={16} color="var(--ink)" />
              </Link>
              <Link href="/" className="btn btn-outline-blue btn--lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}>
                {t.board.backBtn}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
