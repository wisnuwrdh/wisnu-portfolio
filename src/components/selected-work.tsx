import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section className="bg-surface-container-low py-16 md:py-32" id="work">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4 -tracking-[0.02em]">
              Beberapa Project yang Sudah Dibuat
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Dari SaaS hingga F&amp;B, setiap project dibangun dengan pendekatan yang sama: strategi dulu, desain kemudian.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.url || "#"}
              className="group cursor-pointer bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.thumbnail}
                  alt={project.title}
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-mono font-medium text-primary mb-2 uppercase tracking-widest">
                  {project.category}
                </div>
                <h3 className="font-display text-xl text-on-surface mb-2">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant mb-4">
                  {project.description}
                </p>
                <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:underline">
                  View Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
