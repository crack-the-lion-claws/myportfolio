import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, Layers } from 'lucide-react';

export default function FeaturedProjects() {
  const featuredProjects = PROJECTS.filter((p) => p.isFeatured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest">Selected Works</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
              Featured Projects
            </h2>
            <p className="text-sm md:text-base font-bold text-slate-950 max-w-xl">
              Production-ready applications, business systems, and AI-powered products built from scratch to deployment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-2xl bg-[#f8f9fa] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category & Status */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-extrabold text-blue-800 mb-3">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-950 font-bold">{project.status}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-950 group-hover:text-blue-700 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-sm font-bold text-slate-950 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Important features */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-slate-950">Key Features</div>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-950">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 font-bold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Role */}
                <div className="mb-6 p-3.5 rounded-xl bg-white shadow-xs text-xs font-bold text-slate-950">
                  <span className="font-extrabold text-slate-950">My Role:</span> {project.role}
                </div>
              </div>

              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-bold rounded-md bg-white text-slate-950 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo button */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-950">
                    <Layers className="w-3.5 h-3.5 text-blue-700 font-bold" />
                    <span>Verified Production Build</span>
                  </div>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-extrabold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    Live Demo
                    <ExternalLink className="w-3.5 h-3.5 font-bold" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
