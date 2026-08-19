import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

/* =========================================================
   BOARD PAGE — N-BRIGHT STAR ACADEMY
   Board of Governors / School Leadership
   ========================================================= */

export const metadata: Metadata = {
  title: "Board of Governors | N-Bright Star Academy",
  description:
    "Meet the Board of Governors and school leadership team at Nyagasambu Bright Star Academy — dedicated individuals guiding NBSA toward educational excellence in Rwanda.",
};

function ArrowLeftIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function ShieldIcon({ size = 36, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function UserCircleIcon({ size = 64, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  );
}

function StarIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ── Board data ── */
const boardMembers = [
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
    role: "School Principal",
    badge: "principal",
    badgeLabel: "Academic Leadership",
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
  return (
    <>
      {/* ── Sticky top nav echo ── */}
      <header className="board-topbar">
        <div className="board-topbar-inner">
          <Link href="/" className="board-back-link">
            <ArrowLeftIcon />
            Back to Home
          </Link>
          <Link href="/" className="board-topbar-logo">
            <Image src="/logo.png" alt="NBSA Logo" width={36} height={36} />
            <span>N-Bright Star Academy</span>
          </Link>
          <Link href="/#contact" className="btn btn-blue btn--sm board-topbar-cta">
            Apply Now
          </Link>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="board-hero">
          <div className="board-hero-bg-overlay" aria-hidden="true" />
          <div className="board-hero-content">
            <div className="board-hero-icon">
              <ShieldIcon size={44} color="var(--yellow)" />
            </div>
            <div className="eyebrow eyebrow--white">
              <span className="eyebrow-dot eyebrow-dot--yellow" />
              Governance &amp; Leadership
            </div>
            <h1 className="board-hero-title">
              Board of Governors
            </h1>
            <p className="board-hero-sub">
              Meet the dedicated leaders who guide N-Bright Star Academy toward educational
              excellence, integrity, and a bright future for every child in Nyagasambu.
            </p>
          </div>
        </section>

        {/* ── Mission Strip ── */}
        <div className="board-mission-strip">
          <div className="board-mission-inner">
            <div className="board-mission-item">
              <span className="board-mission-num">5+</span>
              <span className="board-mission-label">Years of Leadership</span>
            </div>
            <div className="board-mission-divider" />
            <div className="board-mission-item">
              <span className="board-mission-num">6</span>
              <span className="board-mission-label">Board Members</span>
            </div>
            <div className="board-mission-divider" />
            <div className="board-mission-item">
              <span className="board-mission-num">300+</span>
              <span className="board-mission-label">Students Served</span>
            </div>
            <div className="board-mission-divider" />
            <div className="board-mission-item">
              <span className="board-mission-num">100%</span>
              <span className="board-mission-label">Committed to Excellence</span>
            </div>
          </div>
        </div>

        {/* ── Board members grid ── */}
        <section className="board-members-section">
          <div className="board-members-container">
            <div className="board-section-header">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Leadership Team
              </div>
              <h2 className="section-title">The People Behind NBSA</h2>
              <p className="section-lead">
                Our board members bring diverse expertise — from education and administration
                to finance and student welfare — all united by a shared mission.
              </p>
            </div>

            <div className="board-grid">
              {boardMembers.map((member) => {
                const colors = badgeColors[member.badge];
                return (
                  <article key={member.id} className="board-card">
                    {/* Avatar */}
                    <div className="board-card-avatar" style={{ background: `${colors.bg}15` }}>
                      <UserCircleIcon size={64} color={colors.bg} />
                    </div>

                    {/* Badge */}
                    <span
                      className="board-card-badge"
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {member.badgeLabel}
                    </span>

                    {/* Name + role */}
                    <h3 className="board-card-name">{member.name}</h3>
                    <p className="board-card-role">{member.role}</p>

                    {/* Bio */}
                    <p className="board-card-bio">{member.bio}</p>

                    {/* Responsibilities */}
                    <div className="board-card-responsibilities">
                      <p className="board-resp-title">Key Responsibilities</p>
                      <ul className="board-resp-list">
                        {member.responsibilities.map((r) => (
                          <li key={r} className="board-resp-item">
                            <StarIcon size={10} color={colors.bg} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Governance Principles ── */}
        <section className="board-principles-section">
          <div className="board-principles-container">
            <div className="board-section-header">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Our Governance Commitment
              </div>
              <h2 className="section-title">How We Lead</h2>
            </div>
            <div className="board-principles-grid">
              {[
                { title: "Transparency", desc: "Regular reporting to parents, staff, and the community on academic performance, finances, and school policies." },
                { title: "Accountability", desc: "Every board member is accountable to the school community and to the children in our care." },
                { title: "Inclusivity", desc: "We listen to parents, teachers, and students — all voices shape our decisions and school direction." },
                { title: "Continuous Improvement", desc: "We benchmark against national and international standards to constantly raise the bar for our students." },
              ].map((p) => (
                <div key={p.title} className="board-principle-card">
                  <h3 className="board-principle-title">{p.title}</h3>
                  <p className="board-principle-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <div className="board-cta-band">
          <div className="board-cta-inner">
            <div>
              <h2 className="board-cta-title">Ready to Join Our School Family?</h2>
              <p className="board-cta-sub">Applications for 2025/2026 are open now.</p>
            </div>
            <div className="board-cta-actions">
              <Link href="/#contact" className="btn btn-blue btn--lg">
                Apply for Admission
              </Link>
              <Link href="/" className="btn btn-outline-blue btn--lg">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
