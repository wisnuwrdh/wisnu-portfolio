import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-surface-bright py-16 md:py-32 border-y border-outline-variant/30" id="services">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4 -tracking-[0.02em]">
            Apa yang Bisa Saya Bantu
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Tersedia untuk bisnis yang ingin membangun atau memperbaiki landing page mereka.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-10 bg-surface-container-lowest rounded-xl border border-outline shadow-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-on-surface mb-4">
                {service.title}
              </h3>
              <p className="text-on-surface-variant mb-8 flex-grow">
                {service.description}
              </p>
              <a
                href="#contact"
                className="w-full block text-center py-4 border border-outline rounded-lg font-semibold hover:bg-surface-container-low transition-colors active:scale-[0.98]"
              >
                Diskusikan Proyek
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
