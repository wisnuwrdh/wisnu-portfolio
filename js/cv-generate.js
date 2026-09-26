// js/cv-generate.js
// Generate CV sebagai PDF dari cvData, format ATS-friendly:
// 1 kolom, teks selectable, font standar, tanpa tabel/gambar/ikon.
// Otomatis pakai bahasa yang lagi aktif di toggle EN/ID situs
// (membaca tombol .lang__btn.is-active yang sudah ada di header).
// Butuh jsPDF dan cv-data.js dimuat lebih dulu.

function getActiveLang() {
  const activeBtn = document.querySelector(".lang__btn.is-active");
  const lang = activeBtn ? activeBtn.dataset.lang : "en";
  return cvData[lang] ? lang : "en";
}

function generateCvPdf(lang) {
  const data = cvData[lang || getActiveLang()];
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const marginLeft = 48;
  const marginRight = 48;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - marginLeft - marginRight;

  let y = 56;

  function ensureSpace(nextLineHeight) {
    if (y + nextLineHeight > pageHeight - 48) {
      doc.addPage();
      y = 56;
    }
  }

  function addSpacer(h) {
    y += h;
  }

  function addHeading(text) {
    ensureSpace(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(text.toUpperCase(), marginLeft, y);
    y += 4;
    doc.setDrawColor(0);
    doc.line(marginLeft, y, pageWidth - marginRight, y);
    y += 16;
  }

  function addParagraph(text, opts = {}) {
    const size = opts.size || 10;
    const style = opts.style || "normal";
    const lineHeight = opts.lineHeight || size * 1.35;
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach((line) => {
      ensureSpace(lineHeight);
      doc.text(line, marginLeft, y);
      y += lineHeight;
    });
  }

  function addBullet(text) {
    const size = 10;
    const lineHeight = size * 1.35;
    const indent = 14;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    lines.forEach((line, i) => {
      ensureSpace(lineHeight);
      doc.text(i === 0 ? "- " + line : line, marginLeft + indent, y);
      y += lineHeight;
    });
  }

  // ---- Header: Nama & Judul ----
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(data.name, marginLeft, y);
  y += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(data.title, marginLeft, y);
  y += 18;

  // ---- Contact line ----
  const contactParts = [
    data.contact.email,
    data.contact.linkedin,
    data.contact.location
  ];
  if (data.contact.phone) contactParts.splice(1, 0, data.contact.phone);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text(contactParts.join("   |   "), marginLeft, y);
  y += 22;

  // ---- Summary ----
  addHeading(data.labels.summary);
  addParagraph(data.summary);
  addSpacer(10);

  // ---- Experience ----
  addHeading(data.labels.experience);
  data.experience.forEach((job, idx) => {
    addParagraph(`${job.role} — ${job.org}`, { style: "bold", size: 10.5 });
    addParagraph(job.period, { style: "italic", size: 9.5 });
    addSpacer(2);
    job.bullets.forEach((b) => addBullet(b));
    if (idx < data.experience.length - 1) addSpacer(10);
  });
  addSpacer(10);

  // ---- Skills ----
  addHeading(data.labels.skills);
  addParagraph(`${data.labels.hardSkills}: ` + data.skills.hard.join(", "));
  addSpacer(4);
  addParagraph(`${data.labels.softSkills}: ` + data.skills.soft.join(", "));
  addSpacer(10);

  // ---- Certifications ----
  addHeading(data.labels.certifications);
  data.certifications.forEach((cert) => {
    addParagraph(`${cert.name} — ${cert.issuer} (${cert.validity})`);
  });
  addSpacer(10);

  // ---- Education ----
  addHeading(data.labels.education);
  data.education.forEach((ed) => {
    addParagraph(`${ed.school}, ${ed.location}`, { style: "bold", size: 10.5 });
    addParagraph(`${ed.program} — ${ed.period}`, { style: "normal", size: 10 });
  });

  // ---- Simpan file ----
  const suffix = (lang || getActiveLang()) === "id" ? "CV_ID" : "CV_EN";
  const fileName = data.name.replace(/\s+/g, "_") + "_" + suffix + ".pdf";
  doc.save(fileName);
}

// Hubungkan ke tombol "Download CV" di halaman.
// Pastikan ada elemen <button id="downloadCvBtn">Download CV</button>
// Bahasa PDF otomatis ikut tombol EN/ID yang lagi aktif saat tombol diklik.
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("downloadCvBtn");
  if (btn) {
    btn.addEventListener("click", () => generateCvPdf());
  }
});
