import { approachSteps } from "@/data/approach";

export default function Approach() {
  return (
    <section className="py-16 md:py-32" id="approach">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4 -tracking-[0.02em]">
            Landing Page yang Baik Dimulai dari Memahami Bisnis Kamu.
          </h2>
          <p className="text-lg font-semibold text-on-surface-variant mb-4">
            Bukan template. Bukan tebak-tebakan.
          </p>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Setiap project saya kerjakan dengan alur yang sama karena urutan ini yang memastikan hasilnya relevan, bukan sekadar terlihat bagus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {approachSteps.map((step, index) => (
            <div
              key={step.number}
              className="p-8 bg-surface-container rounded-xl border border-outline-variant/30 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-on-primary font-display font-bold text-lg mb-6">
                {step.number}
              </div>
              <h4 className="font-bold mb-3">{step.title}</h4>
              <p className="text-sm text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#work"
            className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-container transition-all active:scale-95 inline-flex items-center gap-2"
          >
            Explore Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
