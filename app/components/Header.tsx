"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import { useLanguage, type Language } from "../context/LanguageContext";

/* =========================================================
   SVG Icon Components — replacing emojis with clean SVGs
   ========================================================= */

function TranslateIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
    </svg>
  );
}

const languages = [
  { code: "EN", name: "English", flag: "🇬🇧" },
  { code: "FR", name: "Français", flag: "🇫🇷" },
];


function PhoneIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GraduationCapIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 10 3 12 0v-5" />
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

function ArrowRightIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PlayIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function UsersIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GlobeIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function HeartPulseIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}

function BookOpenIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}


/* =========================================================
   HERO IMAGE CAROUSEL DATA
   ========================================================= */
const heroImages = [
  {
    src: "/Gemini_Generated_Image_kzfsjwkzfsjwkzfs.png",
    alt: "A young N-Bright Star Academy student enthusiastically raising hand in class",
  },
  {
    src: "/Gemini_Generated_Image_ovqh3wovqh3wovqh.png",
    alt: "Students in NBSA uniforms engaged in classroom learning",
  },
  {
    src: "/Gemini_Generated_Image_poius8poius8poiu.png",
    alt: "Teacher leading an interactive classroom session at NBSA",
  },
];

/* =========================================================
   NAVBAR
   ========================================================= */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const selectedLang = languages.find((l) => l.code === lang) || languages[0];
  const langDropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  const navItems = [
    { label: t.nav.home, href: "#home", external: false },
    { label: t.nav.about, href: "#about", external: false },
    { label: t.nav.programs, href: "#programs", external: false },
    { label: t.nav.activities, href: "#activities", external: false },
    { label: t.nav.values, href: "#values", external: false },
    { label: t.nav.board, href: "/board", external: true },
    { label: t.nav.contact, href: "#contact", external: false },
  ];

  return (
    <>
      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`} role="banner" id="site-navbar">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="nav-logo" aria-label="N-Bright Star Academy — Home" onClick={closeMenu}>
            <div className="nav-logo-img-wrap">
              <Image src="/logo.png" alt="NBSA Logo" width={44} height={44} priority />
            </div>
            <div className="nav-logo-text">
              <div className="nav-logo-name">N-Bright Star Academy</div>
            </div>
          </a>

          {/* Desktop Nav links */}
          <nav aria-label="Main menu" className="nav-desktop">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="nav-cta-wrap">
            {/* Rectangular Language Switcher */}
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

            <a href="#contact" className="btn btn-blue btn--sm" id="nav-apply-btn">
              {t.nav.applyNow}
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${mobileOpen ? " nav-hamburger--open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-overlay${mobileOpen ? " mobile-overlay--visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav
        className={`mobile-drawer${mobileOpen ? " mobile-drawer--open" : ""}`}
        aria-label="Mobile menu"
      >
        <div className="mobile-drawer-top">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <div className="nav-logo-img-wrap">
              <Image src="/logo.png" alt="NBSA Logo" width={40} height={40} />
            </div>
            <div className="nav-logo-text">
              <div className="nav-logo-name">N-Bright Star Academy</div>
            </div>
          </a>
        </div>

        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.external ? (
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-ctas">
          <div className="mobile-drawer-lang-wrap">
            <div className="mobile-drawer-lang-label">
              <TranslateIcon size={14} color="var(--blue)" />
              <span>Language:</span>
            </div>
            <div className="mobile-drawer-lang">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={`mobile-lang-btn${l.code === selectedLang.code ? " mobile-lang-btn--active" : ""}`}
                  onClick={() => setLang(l.code as Language)}
                >
                  <span>{l.flag}</span>
                  <span>{l.code}</span>
                </button>
              ))}
            </div>
          </div>

          <a href="#contact" className="btn btn-blue btn--full" onClick={closeMenu}>
            <GraduationCapIcon size={16} color="#fff" />
            {t.nav.applyNow}
          </a>
        </div>

        <div className="mobile-drawer-contact">
          <div className="mobile-contact-item">
            <MailIcon size={14} color="var(--blue)" />
            <a href="mailto:brightstaracademyschool@gmail.com">brightstaracademyschool@gmail.com</a>
          </div>
          <div className="mobile-contact-item">
            <MapPinIcon size={14} color="var(--blue)" />
            <span>477J+PW, Nyagasambu, Rwanda</span>
          </div>
        </div>
      </nav>
    </>
  );
}

/* =========================================================
   HERO SECTION — Full-width photo carousel with text overlay
   ========================================================= */
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useLanguage();

  // Auto-advance carousel (10 seconds per slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 600);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      {/* Background Image Carousel */}
      <div className="hero-bg" aria-hidden="true">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className={`hero-bg-slide${i === currentSlide ? " hero-bg-slide--active" : ""}${isTransitioning && i === currentSlide ? " hero-bg-slide--exiting" : ""}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover" }}
              quality={90}
            />
          </div>
        ))}
        {/* Dark overlay for text legibility */}
        <div className="hero-overlay" />
        {/* Gradient overlay from bottom */}
        <div className="hero-gradient-bottom" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text-col">
          <h1 id="hero-heading" className="hero-title anim-up d1">
            {t.hero.title}
          </h1>

          <p className="hero-body anim-up d2">
            {t.hero.subtitle}
          </p>

          <div className="hero-actions anim-up d3">
            <a href="#contact" className="btn btn-yellow btn--lg" id="hero-apply-btn">
              <GraduationCapIcon size={18} color="var(--ink)" />
              {t.hero.applyBtn}
              <ArrowRightIcon size={16} color="var(--ink)" />
            </a>
          </div>

          {/* Carousel indicators */}
          <div className="hero-dots anim-up d4" role="tablist" aria-label="Hero image carousel">
            {heroImages.map((img, i) => (
              <button
                key={img.src}
                className={`hero-dot${i === currentSlide ? " hero-dot--active" : ""}`}
                onClick={() => goToSlide(i)}
                role="tab"
                aria-selected={i === currentSlide}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HEADER — Composed Export
   ========================================================= */
export default function Header() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
