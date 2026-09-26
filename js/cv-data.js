// js/cv-data.js
// Data CV terstruktur, dua bahasa (id & en).
// Edit di sini kalau ada perubahan info, tidak perlu sentuh generator PDF-nya.

const cvData = {
  id: {
    name: "Wisnu Wardhana",
    title: "Content Marketing & Organic Growth",

    contact: {
      email: "mywisnuwardhana@gmail.com",
      linkedin: "linkedin.com/in/wisnu-wardhana-a28b34371",
      location: "Bekasi, Indonesia"
      // phone: "" // opsional — isi kalau mau ditampilkan di PDF
    },

    labels: {
      summary: "Ringkasan Profesional",
      experience: "Pengalaman",
      skills: "Keahlian",
      hardSkills: "Keahlian Teknis",
      softSkills: "Keahlian Non-Teknis",
      certifications: "Sertifikasi",
      education: "Pendidikan"
    },

    summary:
      "Digital marketer dengan fokus pada content strategy dan organic growth. " +
      "Berpengalaman menghubungkan riset audiens, strategi konten, distribusi, " +
      "dan data, dari perencanaan sampai pengukuran hasil.",

    experience: [
      {
        role: "Product Strategy & Content",
        org: "Narehat (narehat.com)",
        period: "2026 – Sekarang",
        bullets: [
          "Merancang strategi produk dan positioning untuk skin journal app",
          "Menulis copy produk yang menyeimbangkan edukasi dan empati pengguna",
          "Membangun alur daily entry berbasis riset perilaku pengguna"
        ]
      },
      {
        role: "Content Strategy & Organic Social",
        org: "PedeTanpaJerawat",
        period: "Ongoing",
        bullets: [
          "Menulis, memproduksi, dan mempublikasikan konten short-form edukasi skincare",
          "Menguji hook, format, dan angle konten berdasarkan data performa",
          "Mencapai 126.1K views pada satu konten top-performing",
          "Fokus pada metrik completion rate, saves, dan replies, bukan sekadar views"
        ]
      }
    ],

    skills: {
      hard: ["Content Marketing", "Canva", "CapCut", "Spreadsheet (Google Sheets / Excel)"],
      soft: ["Riset & analisis audiens", "Strategic thinking", "Eksperimen berbasis data", "Storytelling"]
    },

    certifications: [
      {
        name: "Content Marketing Certified",
        issuer: "HubSpot Academy",
        validity: "Jun 2026 – Jul 2028"
      }
    ],

    education: [
      {
        school: "SMK Bina Nusa",
        location: "Kota Bekasi",
        program: "Manajemen Perkantoran",
        period: "Juli 2023 – Juni 2026"
      }
    ]
  },

  en: {
    name: "Wisnu Wardhana",
    title: "Content Marketing & Organic Growth",

    contact: {
      email: "mywisnuwardhana@gmail.com",
      linkedin: "linkedin.com/in/wisnu-wardhana-a28b34371",
      location: "Bekasi, Indonesia"
      // phone: "" // optional — fill in if you want it shown on the PDF
    },

    labels: {
      summary: "Professional Summary",
      experience: "Experience",
      skills: "Skills",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
      certifications: "Certifications",
      education: "Education"
    },

    summary:
      "Digital marketer focused on content strategy and organic growth. " +
      "Experienced in connecting audience research, content strategy, " +
      "distribution, and data, from planning through measurement.",

    experience: [
      {
        role: "Product Strategy & Content",
        org: "Narehat (narehat.com)",
        period: "2026 – Present",
        bullets: [
          "Designed product strategy and positioning for a personal skin journal app",
          "Wrote product copy balancing education and user empathy",
          "Built a daily-entry flow grounded in user behavior research"
        ]
      },
      {
        role: "Content Strategy & Organic Social",
        org: "PedeTanpaJerawat",
        period: "Ongoing",
        bullets: [
          "Wrote, produced, and published short-form educational skincare content",
          "Tested hooks, formats, and angles based on performance data",
          "Reached 126.1K views on one top-performing post",
          "Focused on completion rate, saves, and replies as core metrics, not just views"
        ]
      }
    ],

    skills: {
      hard: ["Content Marketing", "Canva", "CapCut", "Spreadsheet (Google Sheets / Excel)"],
      soft: ["Audience research & analysis", "Strategic thinking", "Data-driven experimentation", "Storytelling"]
    },

    certifications: [
      {
        name: "Content Marketing Certified",
        issuer: "HubSpot Academy",
        validity: "Jun 2026 – Jul 2028"
      }
    ],

    education: [
      {
        school: "SMK Bina Nusa",
        location: "Bekasi City",
        program: "Office Administration",
        period: "July 2023 – June 2026"
      }
    ]
  }
};
