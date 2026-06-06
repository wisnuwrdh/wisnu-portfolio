const tools = ["Next.js", "TypeScript", "Tailwind CSS", "Git", "Vercel"];

export default function About() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center">
        <div className="order-1 md:order-1">
          <div className="relative w-full aspect-square md:aspect-[3/4] overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              src="/images/about-wisnu.webp"
              alt="Wisnu Wardhana di ruang kerja"
            />
          </div>
        </div>
        <div className="order-2 md:order-2">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-6 -tracking-[0.02em]">
            Sedikit tentang Saya
          </h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            Saya Wisnu Wardhana, seorang Landing Page Designer &amp; Developer. Saya tertarik pada landing page karena satu alasan sederhana: halaman yang dirancang dengan baik bisa menjadi aset bisnis yang benar-benar bekerja.
          </p>
          <p className="text-on-surface-variant mb-10 leading-relaxed">
            Pendekatan saya selalu dimulai dari memahami bisnis, bukan dari memilih template. Saya percaya bahwa desain yang baik adalah desain yang punya alasan di balik setiap keputusannya.
          </p>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-on-surface-variant">
              Teknologi yang Saya Gunakan
            </h4>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-surface-container-high rounded-full font-mono text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
