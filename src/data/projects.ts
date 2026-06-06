import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "saas-project",
    title: "SaaS Project",
    category: "SAAS",
    description: "Landing page untuk platform SaaS dengan fokus konversi dan pengalaman pengguna.",
    thumbnail: "/images/project-saas.jpg",
    url: "https://hesych.com",
  },
  {
    id: "healthyfoods",
    title: "HealthyFooDs",
    category: "E-COMMERCE",
    description: "Landing page fokus konversi untuk layanan katering sehat.",
    thumbnail: "/images/project-healthyfoods.jpg",
    url: "https://healthyfoods-landing.vercel.app/",
  },
  {
    id: "brew-haven",
    title: "Brew Haven Coffee",
    category: "F&B",
    description: "Menyampaikan aroma dan suasana kedai kopi melalui visual yang hangat.",
    thumbnail: "/images/project-brew-haven.jpg",
    url: "https://brew-haven-rouge.vercel.app/",
  },
  {
    id: "roti-bahagia",
    title: "Roti Bahagia Bakery",
    category: "LIFESTYLE",
    description: "Membangun kehadiran digital untuk toko roti legendaris.",
    thumbnail: "/images/project-roti-bahagia.jpg",
    url: "https://roti-bahagia.vercel.app/",
  },
];
