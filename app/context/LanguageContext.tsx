"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "EN" | "FR";

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    programs: string;
    activities: string;
    values: string;
    board: string;
    contact: string;
    applyNow: string;
    topHours: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    applyBtn: string;
    exploreBtn: string;
    badge1: string;
    badge2: string;
    badge3: string;
    statYearsNum: string;
    statYearsLabel: string;
    statStudentsNum: string;
    statStudentsLabel: string;
    statLangNum: string;
    statLangLabel: string;
    statGradeNum: string;
    statGradeLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    desc: string;
    ctaBtn: string;
  };
  mission: {
    missionTitle: string;
    missionDesc: string;
    valuesTitle: string;
    values: {
      title: string;
      desc: string;
    }[];
  };
  programs: {
    eyebrow: string;
    title: string;
    items: {
      id: string;
      name: string;
      level: string;
      age: string;
      summary: string;
      points: string[];
    }[];
  };
  activities: {
    eyebrow: string;
    title: string;
    lead: string;
    items: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
  values: {
    eyebrow: string;
    title: string;
    items: {
      id: string;
      name: string;
      desc: string;
    }[];
    ctaTitle: string;
    ctaSub: string;
    applyBtn: string;
    tuitionBtn: string;
    formBtn: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    campusTitle: string;
    campusLocation: string;
    hoursLabel: string;
    hoursVal: string;
    admissionsTitle: string;
    steps: {
      title: string;
      text: string;
    }[];
    downloadTuitionBtn: string;
    downloadFormBtn: string;
    emailBtn: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    academicTitle: string;
    campusTitle: string;
    hours: string;
    copyright: string;
    country: string;
    links: {
      home: string;
      about: string;
      programs: string;
      board: string;
      tuition: string;
      form: string;
      contact: string;
    };
    sections: {
      creche: string;
      nursery: string;
      primary: string;
      trilingual: string;
      activities: string;
      secondary: string;
    };
  };
  board: {
    backHome: string;
    applyNow: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSub: string;
    stats: {
      years: string;
      members: string;
      students: string;
      commitment: string;
    };
    teamEyebrow: string;
    teamTitle: string;
    teamLead: string;
    keyRespTitle: string;
    governanceEyebrow: string;
    governanceTitle: string;
    principles: {
      title: string;
      desc: string;
    }[];
    ctaTitle: string;
    ctaSub: string;
    applyBtn: string;
    backBtn: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  EN: {
    nav: {
      home: "Home",
      about: "About Us",
      programs: "Programs",
      activities: "Activities",
      values: "Values",
      board: "Board",
      contact: "Contact",
      applyNow: "Apply Now",
      topHours: "Mon–Fri: 7:00 AM – 5:00 PM",
    },
    hero: {
      eyebrow: "Crèche · Nursery · Primary — Nyagasambu, Rwanda",
      title: "Excellence Begins With You!",
      subtitle:
        "Premier trilingual education in Rwanda from Crèche to Primary. Empowering students with academic rigor, moral character, and lifelong curiosity.",
      applyBtn: "Apply for Admission",
      exploreBtn: "Explore Programs",
      badge1: "Trilingual: EN · FR · RW",
      badge2: "Crèche to Primary",
      badge3: "Rwandan Values",
      statYearsNum: "5+",
      statYearsLabel: "Years of Excellence",
      statStudentsNum: "300+",
      statStudentsLabel: "Thriving Learners",
      statLangNum: "3",
      statLangLabel: "Languages (EN, FR, RW)",
      statGradeNum: "P1–P6",
      statGradeLabel: "Crèche to Primary",
    },
    about: {
      eyebrow: "ABOUT US",
      title: "A World-Class Education For Every Learner",
      desc: "Nyagasambu Bright Star Academy (NBSA) provides premier Crèche to Primary education in Rwanda, empowering young learners through trilingual fluency, academic excellence, and strong moral character in a safe, inspiring environment.",
      ctaBtn: "Learn More About Us",
    },
    mission: {
      missionTitle: "Mission",
      missionDesc:
        "Nyagasambu Bright Star Academy provides an outstanding educational experience that fosters intellectual, social, emotional, and physical growth in a safe, inspiring, and inclusive environment.",
      valuesTitle: "Core Values",
      values: [
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
      ],
    },
    programs: {
      eyebrow: "ACADEMIC PATHWAY",
      title: "World-Class Learning for Every Age",
      items: [
        {
          id: "creche",
          name: "Crèche",
          level: "Day Care Section",
          age: "3 Mos – 2 Yrs",
          summary:
            "Safe, loving infant care focused on sensory discovery, motor skills, and nurturing daily routines.",
          points: ["Certified Caregivers", "Sensory & Play Care", "Safe & Monitored"],
        },
        {
          id: "nursery",
          name: "Nursery",
          level: "Maternelle Section",
          age: "2 – 6 Years",
          summary:
            "Trilingual immersion in English, French & Kinyarwanda fostering literacy, numeracy, and creativity.",
          points: ["Trilingual Immersion", "Phonics & Numbers", "Creative Arts & Play"],
        },
        {
          id: "primary",
          name: "Primary",
          level: "Primary Section (P1–P6)",
          age: "6 – 13 Years",
          summary:
            "National REB curriculum excellence fostering academic mastery, digital literacy, and leadership.",
          points: ["P1 to P6 REB Standard", "STEM & ICT Literacy", "Clubs & Sports"],
        },
      ],
    },
    activities: {
      eyebrow: "STUDENT LIFE",
      title: "Beyond the Classroom",
      lead: "At NBSA, learning extends far beyond textbooks. Our rich co-curricular programme nurtures talent, builds character, and celebrates Rwandan culture.",
      items: [
        {
          id: "sports",
          title: "Sports & Athletics",
          desc: "Competitive football, basketball, and volleyball fostering discipline, coordination, and team sportsmanship.",
        },
        {
          id: "arts",
          title: "Creative Arts & Music",
          desc: "Exploration of vocal music, traditional instruments, painting, and authentic Rwandan Imigongo art.",
        },
        {
          id: "culture",
          title: "Traditional Dance & Culture",
          desc: "Intore cultural dance and heritage storytelling preserving Rwandan values and national pride.",
        },
        {
          id: "leadership",
          title: "Scout Movement & Clubs",
          desc: "Character development through scouting, community leadership, and trilingual literacy reading clubs.",
        },
      ],
    },
    values: {
      eyebrow: "OUR CORE VALUES",
      title: "What We Stand For",
      items: [
        {
          id: "excellence",
          name: "Excellence",
          desc: "We pursue the highest academic and personal standards in everything we do.",
        },
        {
          id: "integrity",
          name: "Integrity",
          desc: "Honesty, transparency, and ethical conduct guide every member of our community.",
        },
        {
          id: "respect",
          name: "Respect",
          desc: "We value each individual — student, parent, teacher — with dignity and care.",
        },
        {
          id: "responsibility",
          name: "Responsibility",
          desc: "Students learn to own their actions, their learning, and their community.",
        },
        {
          id: "creativity",
          name: "Creativity",
          desc: "We nurture curiosity, imagination, and innovative thinking in every child.",
        },
      ],
      ctaTitle: "Ready to Give Your Child the Best Start?",
      ctaSub: "Applications are open for 2026/2027. Download the tuition fee structure or apply today.",
      applyBtn: "Apply for Admission",
      tuitionBtn: "Tuition Fees",
      formBtn: "Download Form",
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      title: "Contact & Admissions",
      lead: "We are always here to answer questions about admissions, our curriculum, or scheduling a campus visit.",
      campusTitle: "Campus & Admissions Office",
      campusLocation: "Nyagasambu, Rwanda",
      hoursLabel: "Office Hours",
      hoursVal: "Mon–Fri: 7:00 AM – 5:00 PM",
      admissionsTitle: "Simple 4-Step Admission",
      steps: [
        {
          title: "1. Download or Collect Form",
          text: "Obtain the official NBSA admission application form online or from our front desk.",
        },
        {
          title: "2. Submit Documents",
          text: "Provide birth certificate, previous school report, and 2 passport photos.",
        },
        {
          title: "3. Learner Assessment",
          text: "A friendly age-appropriate evaluation to understand your child's learning stage.",
        },
        {
          title: "4. Enrolment Confirmation",
          text: "Receive welcome package, school calendar, and uniform fitting details.",
        },
      ],
      downloadTuitionBtn: "Download Tuition Fees 2026–2027 (PDF)",
      downloadFormBtn: "Download Admission Form (PDF)",
      emailBtn: "Email Admissions Office",
    },
    footer: {
      tagline:
        "Nurturing young minds from Crèche to Primary with Rwandan moral values, trilingual immersion, and world-class foundational learning in Nyagasambu.",
      quickLinksTitle: "Quick Links",
      academicTitle: "Academic Sections",
      campusTitle: "Campus Information",
      hours: "Mon–Fri: 7:00 AM – 5:00 PM",
      copyright: "Nyagasambu Bright Star Academy (NBSA). All rights reserved.",
      country: "Nyagasambu, Rwanda 🇷🇼",
      links: {
        home: "Home",
        about: "About Us",
        programs: "Academic Pathway",
        board: "Board of Governors",
        tuition: "Tuition Fees 2026–2027 (PDF)",
        form: "Admission Form (PDF)",
        contact: "Contact & Admissions",
      },
      sections: {
        creche: "Crèche (3 Mos – 2 Yrs)",
        nursery: "Nursery 1 – 3 (Maternelle)",
        primary: "Primary (P1 – P6)",
        trilingual: "Trilingual Curriculum",
        activities: "Co-Curricular Activities",
        secondary: "Secondary (Future Growth)",
      },
    },
    board: {
      backHome: "Back to Home",
      applyNow: "Apply Now",
      heroEyebrow: "GOVERNANCE & LEADERSHIP",
      heroTitle: "Board of Governors",
      heroSub:
        "Meet the dedicated leaders who guide N-Bright Star Academy toward educational excellence, integrity, and a bright future for every child in Nyagasambu.",
      stats: {
        years: "Years of Leadership",
        members: "Board Members",
        students: "Students Served",
        commitment: "Committed to Excellence",
      },
      teamEyebrow: "LEADERSHIP TEAM",
      teamTitle: "The People Behind NBSA",
      teamLead:
        "Our board members bring diverse expertise — from education and administration to finance and student welfare — all united by a shared mission.",
      keyRespTitle: "Key Responsibilities",
      governanceEyebrow: "OUR GOVERNANCE COMMITMENT",
      governanceTitle: "How We Lead",
      principles: [
        {
          title: "Transparency",
          desc: "Regular reporting to parents, staff, and the community on academic performance, finances, and school policies.",
        },
        {
          title: "Accountability",
          desc: "Every board member is accountable to the school community and to the children in our care.",
        },
        {
          title: "Inclusivity",
          desc: "We listen to parents, teachers, and students — all voices shape our decisions and school direction.",
        },
        {
          title: "Continuous Improvement",
          desc: "We benchmark against national and international standards to constantly raise the bar for our students.",
        },
      ],
      ctaTitle: "Ready to Join Our School Family?",
      ctaSub: "Applications for 2025/2026 and 2026/2027 are open now.",
      applyBtn: "Apply for Admission",
      backBtn: "Back to Home",
    },
  },

  FR: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      programs: "Programmes",
      activities: "Activités",
      values: "Valeurs",
      board: "Conseil",
      contact: "Contact",
      applyNow: "Postuler",
      topHours: "Lun–Ven : 7h00 – 17h00",
    },
    hero: {
      eyebrow: "Crèche · Maternelle · Primaire — Nyagasambu, Rwanda",
      title: "L'Excellence Commence Avec Vous !",
      subtitle:
        "Éducation trilingue d'excellence au Rwanda de la Crèche au Primaire. Former les élèves avec rigueur académique, intégrité morale et curiosité permanente.",
      applyBtn: "Inscrire Votre Enfant",
      exploreBtn: "Découvrir nos Programmes",
      badge1: "Trilingue : Français · Anglais · Kinyarwanda",
      badge2: "De la Crèche au Primaire",
      badge3: "Valeurs Rwandaises",
      statYearsNum: "5+",
      statYearsLabel: "Années d'Excellence",
      statStudentsNum: "300+",
      statStudentsLabel: "Élèves Épanouis",
      statLangNum: "3",
      statLangLabel: "Langues (FR, EN, RW)",
      statGradeNum: "P1–P6",
      statGradeLabel: "Crèche au Primaire",
    },
    about: {
      eyebrow: "À PROPOS DE NOUS",
      title: "Une Éducation de Classe Mondiale Pour Chaque Élève",
      desc: "Nyagasambu Bright Star Academy (NBSA) offre un enseignement d'excellence de la Crèche au Primaire au Rwanda, favorisant la maîtrise trilingue, la réussite académique et un caractère moral fort dans un environnement sain et inspirant.",
      ctaBtn: "En Savoir Plus",
    },
    mission: {
      missionTitle: "Mission",
      missionDesc:
        "Nyagasambu Bright Star Academy offre une expérience éducative remarquable qui favorise le développement intellectuel, social, émotionnel et physique dans un cadre sûr, stimulant et inclusif.",
      valuesTitle: "Valeurs Fondamentales",
      values: [
        {
          title: "Intégrité & Éthique",
          desc: "Responsable, respectueux et guidé par des principes moraux solides.",
        },
        {
          title: "Curiosité Intellectuelle",
          desc: "Esprit critique, créatif, innovant et réfléchi.",
        },
        {
          title: "Inclusion & Respect",
          desc: "Bienveillant, collaboratif et ouvert à la diversité.",
        },
        {
          title: "Excellence",
          desc: "Recherche des normes académiques et personnelles les plus élevées.",
        },
      ],
    },
    programs: {
      eyebrow: "PARCOURS ACADÉMIQUE",
      title: "Un Apprentissage de Classe Mondiale Pour Chaque Âge",
      items: [
        {
          id: "creche",
          name: "Crèche",
          level: "Section Garderie",
          age: "3 Mois – 2 Ans",
          summary:
            "Soins attentifs et bienveillants pour nourrissons axés sur l'éveil sensoriel, la motricité et des routines quotidiennes rassurantes.",
          points: ["Éducateurs Qualifiés", "Éveil & Soins Sensoriels", "Sécurité & Surveillance"],
        },
        {
          id: "nursery",
          name: "Maternelle",
          level: "Section Maternelle",
          age: "2 – 6 Ans",
          summary:
            "Immersion trilingue en français, anglais et kinyarwanda favorisant l'alphabétisation précoce, les chiffres et la créativité.",
          points: ["Immersion Trilingue", "Phonétique & Nombres", "Arts Créatifs & Jeux"],
        },
        {
          id: "primary",
          name: "Primaire",
          level: "Section Primaire (P1–P6)",
          age: "6 – 13 Ans",
          summary:
            "Excellence du programme national REB favorisant la maîtrise académique, les compétences numériques et le leadership.",
          points: ["Norme REB P1 à P6", "Informatique & Sciences (STEM)", "Clubs & Sports"],
        },
      ],
    },
    activities: {
      eyebrow: "VIE SCOLAIRE",
      title: "Au-delà de la Classe",
      lead: "À NBSA, l'apprentissage va bien au-delà des manuels scolaires. Notre programme parascolaire nourrit les talents, forge le caractère et célèbre la culture rwandaise.",
      items: [
        {
          id: "sports",
          title: "Sports & Athlétisme",
          desc: "Football, basketball et volleyball compétitifs développant la discipline, la coordination et l'esprit d'équipe.",
        },
        {
          id: "arts",
          title: "Arts Créatifs & Musique",
          desc: "Pratique du chant, instruments traditionnels, peinture et art authentique de l'Imigongo rwandais.",
        },
        {
          id: "culture",
          title: "Danse Traditionnelle & Culture",
          desc: "Danse culturelle Intore et contes patrimoniaux préservant les valeurs et la fierté nationale rwandaise.",
        },
        {
          id: "leadership",
          title: "Mouvement Scout & Clubs",
          desc: "Développement du caractère par le scoutisme, le leadership communautaire et les clubs de lecture trilingues.",
        },
      ],
    },
    values: {
      eyebrow: "NOS VALEURS FONDAMENTALES",
      title: "Ce Que Nous Défendons",
      items: [
        {
          id: "excellence",
          name: "Excellence",
          desc: "Nous visons les normes académiques et personnelles les plus élevées dans tout ce que nous faisons.",
        },
        {
          id: "integrity",
          name: "Intégrité",
          desc: "L'honnêteté, la transparence et la conduite éthique guident chaque membre de notre communauté.",
        },
        {
          id: "respect",
          name: "Respect",
          desc: "Nous valorisons chaque individu — élève, parent, enseignant — avec dignité et bienveillance.",
        },
        {
          id: "responsibility",
          name: "Responsabilité",
          desc: "Les élèves apprennent à assumer leurs actions, leur apprentissage et leur communauté.",
        },
        {
          id: "creativity",
          name: "Créativité",
          desc: "Nous nourrissons la curiosité, l'imagination et la pensée innovante chez chaque enfant.",
        },
      ],
      ctaTitle: "Prêt à Offrir le Meilleur Départ à Votre Enfant ?",
      ctaSub: "Les inscriptions 2026/2027 sont ouvertes. Téléchargez les frais de scolarité ou postulez dès aujourd'hui.",
      applyBtn: "Postuler à l'Admission",
      tuitionBtn: "Frais de Scolarité",
      formBtn: "Télécharger le Formulaire",
    },
    contact: {
      eyebrow: "CONTACTEZ-NOUS",
      title: "Contact & Admissions",
      lead: "Nous sommes toujours disponibles pour répondre à vos questions concernant les admissions, le programme ou pour planifier une visite du campus.",
      campusTitle: "Bureau du Campus & Admissions",
      campusLocation: "Nyagasambu, Rwanda",
      hoursLabel: "Heures d'Ouverture",
      hoursVal: "Lun–Ven : 7h00 – 17h00",
      admissionsTitle: "Admission en 4 Étapes Simples",
      steps: [
        {
          title: "1. Télécharger ou Retirer le Formulaire",
          text: "Obtenez le formulaire officiel d'admission NBSA en ligne ou à l'accueil de l'école.",
        },
        {
          title: "2. Soumettre les Documents",
          text: "Fournissez l'acte de naissance, le bulletin scolaire précédent et 2 photos d'identité.",
        },
        {
          title: "3. Évaluation de l'Élève",
          text: "Une évaluation bienveillante et adaptée à l'âge pour situer le niveau de l'enfant.",
        },
        {
          title: "4. Confirmation d'Inscription",
          text: "Recevez le dossier de bienvenue, le calendrier scolaire et l'essayage de l'uniforme.",
        },
      ],
      downloadTuitionBtn: "Télécharger les Frais de Scolarité 2026–2027 (PDF)",
      downloadFormBtn: "Télécharger le Formulaire d'Admission (PDF)",
      emailBtn: "Écrire au Bureau des Admissions",
    },
    footer: {
      tagline:
        "Nourrir les jeunes esprits de la Crèche au Primaire avec les valeurs rwandaises, l'immersion trilingue et un enseignement fondamental d'excellence à Nyagasambu.",
      quickLinksTitle: "Liens Rapides",
      academicTitle: "Sections Académiques",
      campusTitle: "Informations du Campus",
      hours: "Lun–Ven : 7h00 – 17h00",
      copyright: "Nyagasambu Bright Star Academy (NBSA). Tous droits réservés.",
      country: "Nyagasambu, Rwanda 🇷🇼",
      links: {
        home: "Accueil",
        about: "À Propos",
        programs: "Parcours Académique",
        board: "Conseil d'Administration",
        tuition: "Frais de Scolarité 2026–2027 (PDF)",
        form: "Formulaire d'Admission (PDF)",
        contact: "Contact & Admissions",
      },
      sections: {
        creche: "Crèche (3 Mois – 2 Ans)",
        nursery: "Maternelle 1 – 3",
        primary: "Primaire (P1 – P6)",
        trilingual: "Curriculum Trilingue",
        activities: "Activités Parascolaires",
        secondary: "Secondaire (Croissance Future)",
      },
    },
    board: {
      backHome: "Retour à l'Accueil",
      applyNow: "Postuler",
      heroEyebrow: "GOUVERNANCE & DIRECTION",
      heroTitle: "Conseil d'Administration",
      heroSub:
        "Découvrez les dirigeants dévoués qui guident N-Bright Star Academy vers l'excellence éducative, l'intégrité et un avenir prometteur pour chaque enfant de Nyagasambu.",
      stats: {
        years: "Années de Leadership",
        members: "Membres du Conseil",
        students: "Élèves Accompagnés",
        commitment: "Dédié à l'Excellence",
      },
      teamEyebrow: "ÉQUIPE DE DIRECTION",
      teamTitle: "L'Équipe Derrière NBSA",
      teamLead:
        "Nos administrateurs apportent une riche expertise — éducation, gestion, finances et bien-être étudiant — unis par une même mission d'excellence.",
      keyRespTitle: "Responsabilités Principales",
      governanceEyebrow: "NOTRE ENGAGEMENT DE GOUVERNANCE",
      governanceTitle: "Notre Vision du Leadership",
      principles: [
        {
          title: "Transparence",
          desc: "Rapports réguliers aux parents, au personnel et à la communauté sur la réussite scolaire, les finances et les politiques de l'école.",
        },
        {
          title: "Responsabilité",
          desc: "Chaque administrateur est responsable envers la communauté scolaire et envers les enfants qui nous sont confiés.",
        },
        {
          title: "Inclusion",
          desc: "Nous écoutons les parents, les enseignants et les élèves — toutes les voix participent aux décisions et aux orientations de l'école.",
        },
        {
          title: "Amélioration Continue",
          desc: "Nous nous alignons sur les meilleures normes nationales et internationales pour élever constamment le niveau de nos élèves.",
        },
      ],
      ctaTitle: "Prêt à Rejoindre la Famille NBSA ?",
      ctaSub: "Les inscriptions 2025/2026 et 2026/2027 sont ouvertes dès maintenant.",
      applyBtn: "Postuler à l'Admission",
      backBtn: "Retour à l'Accueil",
    },
  },
};


interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "EN",
  setLang: () => {},
  t: translations.EN,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("EN");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nbsa_lang") as Language;
      if (saved && (saved === "EN" || saved === "FR")) {
        setLangState(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("nbsa_lang", newLang);
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
