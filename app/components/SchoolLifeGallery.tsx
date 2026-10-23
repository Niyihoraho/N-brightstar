"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   SCHOOL LIFE GALLERY COMPONENT — N-BRIGHT STAR ACADEMY
   Solid, clean, authentic gallery displaying full photos
   without clipping or dark gradient overlays.
   ========================================================= */

function ExpandIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}

function CloseIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ArrowLeftIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ArrowRightIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CameraIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

type FilterKey = "all" | "students" | "teachers";

const imageSrcMap: Record<string, { src: string; width: number; height: number }> = {
  "community-panorama": {
    src: "/school-life/community-panorama.jpeg",
    width: 1280,
    height: 794,
  },
  "team-staircase": {
    src: "/school-life/team-staircase.jpeg",
    width: 720,
    height: 1280,
  },
  "students-play": {
    src: "/school-life/students-play.jpeg",
    width: 1280,
    height: 960,
  },
  "teachers-motto": {
    src: "/school-life/teachers-motto.jpeg",
    width: 1280,
    height: 720,
  },
  "campus-terrace": {
    src: "/school-life/campus-terrace.jpeg",
    width: 1280,
    height: 720,
  },
  "staff-meeting": {
    src: "/school-life/staff-meeting.jpeg",
    width: 1280,
    height: 720,
  },
};

export default function SchoolLifeGallery() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = t.gallery.items;

  // Filtered list
  const filteredItems = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((item) => item.categoryKey === filter);
  }, [galleryItems, filter]);

  // Open Lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const currentAsset = currentItem ? imageSrcMap[currentItem.id] : null;

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-heading">
      {/* Imigongo Background Pattern Overlay */}
      <div className="gallery-bg-overlay" aria-hidden="true" />

      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
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
            <span className="about-eyebrow-text">{t.gallery.eyebrow}</span>
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

          <h2 id="gallery-heading" className="about-title" style={{ marginBottom: "0.75rem" }}>
            {t.gallery.title}
          </h2>
          <p className="section-lead" style={{ maxWidth: "680px", margin: "0 auto 2.25rem" }}>
            {t.gallery.lead}
          </p>

          {/* Filter Pills */}
          <div className="gallery-filter-wrap" role="tablist" aria-label="Filter gallery moments">
            <button
              type="button"
              role="tab"
              aria-selected={filter === "all"}
              className={`gallery-filter-btn${filter === "all" ? " gallery-filter-btn--active" : ""}`}
              onClick={() => setFilter("all")}
            >
              <CameraIcon size={16} />
              <span>{t.gallery.filterAll}</span>
              <span className="gallery-filter-count">{galleryItems.length}</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={filter === "students"}
              className={`gallery-filter-btn${filter === "students" ? " gallery-filter-btn--active" : ""}`}
              onClick={() => setFilter("students")}
            >
              <span>{t.gallery.filterStudents}</span>
              <span className="gallery-filter-count">
                {galleryItems.filter((i) => i.categoryKey === "students").length}
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={filter === "teachers"}
              className={`gallery-filter-btn${filter === "teachers" ? " gallery-filter-btn--active" : ""}`}
              onClick={() => setFilter("teachers")}
            >
              <span>{t.gallery.filterTeachers}</span>
              <span className="gallery-filter-count">
                {galleryItems.filter((i) => i.categoryKey === "teachers").length}
              </span>
            </button>
          </div>
        </div>

        {/* Solid Editorial Masonry Grid — Every Photo Shown Whole */}
        <div className="gallery-masonry-grid">
          {filteredItems.map((item, index) => {
            const asset = imageSrcMap[item.id];
            if (!asset) return null;

            return (
              <article
                key={item.id}
                className={`gallery-card gallery-card--${item.accentColor}`}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View full photo: ${item.title}`}
              >
                {/* Photo Frame (Full native aspect ratio, zero crop) */}
                <div className="gallery-card-media">
                  <Image
                    src={asset.src}
                    alt={item.title}
                    width={asset.width}
                    height={asset.height}
                    className="gallery-card-photo"
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px"
                  />

                  {/* Clean Hover Action Button */}
                  <div className="gallery-card-hover-hint">
                    <ExpandIcon size={16} />
                    <span>{t.gallery.viewFull}</span>
                  </div>
                </div>

                {/* Solid Card Body (Clean white background, clear typography below photo) */}
                <div className="gallery-card-body">
                  <div className="gallery-card-meta">
                    <span className={`gallery-badge gallery-badge--${item.accentColor}`}>
                      <span className="gallery-badge-dot" aria-hidden="true" />
                      {item.category}
                    </span>
                    <span className="gallery-card-expand-icon" aria-hidden="true">
                      <ExpandIcon size={16} color="var(--blue)" />
                    </span>
                  </div>

                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-desc">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && currentAsset && (
        <div
          className="gallery-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          onClick={closeLightbox}
        >
          <div
            className="gallery-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header Bar */}
            <div className="gallery-lightbox-header">
              <div className="gallery-lightbox-meta">
                <span className={`gallery-badge gallery-badge--${currentItem.accentColor}`}>
                  <span className="gallery-badge-dot" aria-hidden="true" />
                  {currentItem.category}
                </span>
                <span className="gallery-lightbox-counter">
                  {lightboxIndex !== null ? lightboxIndex + 1 : 1} / {filteredItems.length}
                </span>
              </div>
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={closeLightbox}
                aria-label={t.gallery.modalClose}
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {/* Media Area with Prev/Next Controls */}
            <div className="gallery-lightbox-media-wrap">
              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-nav--prev"
                onClick={showPrev}
                aria-label={t.gallery.modalPrev}
              >
                <ArrowLeftIcon size={24} />
              </button>

              <div className="gallery-lightbox-img-box">
                <Image
                  src={currentAsset.src}
                  alt={currentItem.title}
                  width={currentAsset.width}
                  height={currentAsset.height}
                  className="gallery-lightbox-img"
                  priority
                />
              </div>

              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-nav--next"
                onClick={showNext}
                aria-label={t.gallery.modalNext}
              >
                <ArrowRightIcon size={24} />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="gallery-lightbox-caption">
              <h3 className="gallery-lightbox-title">{currentItem.title}</h3>
              <p className="gallery-lightbox-desc">{currentItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
