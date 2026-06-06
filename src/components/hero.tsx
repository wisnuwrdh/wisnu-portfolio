export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 pt-32 pb-16 md:py-40 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
      <div>
        <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-medium tracking-widest mb-6 uppercase">
          OPEN FOR NEW PROJECTS
        </div>
        <h1 className="font-display text-4xl md:text-6xl md:leading-[1.1] text-on-surface mb-6 -tracking-[0.04em] leading-tight">
          Saya Bantu Bisnis Kamu Tampil Profesional di Web.
        </h1>
        <p className="text-lg text-on-surface-variant mb-4">
          Landing page yang dirancang dari strategi, bukan sekadar dari estetika.
        </p>
        <p className="text-on-surface-variant/80 mb-10 max-w-lg">
          Nama saya Wisnu Wardhana. Saya merancang dan membangun landing page untuk bisnis yang ingin tampil kredibel, menarik perhatian, dan mendorong pengunjung mengambil tindakan.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-container transition-all active:scale-95 inline-flex items-center gap-2"
          >
            Diskusikan Proyek
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#work"
            className="bg-transparent text-primary border border-outline px-8 py-4 rounded-xl font-semibold hover:bg-surface-container-low transition-all"
          >
            Lihat Portfolio
          </a>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />
        <div className="relative overflow-hidden rounded-3xl aspect-[3/4] shadow-xl">
          <img
            className="w-full h-full object-cover"
            src="https://placehold.co/600x750/e6e8ea/434655?text=Foto+Wisnu"
            alt="Wisnu Wardhana — Landing Page Designer & Developer"
          />
        </div>
      </div>
    </section>
  );
}
