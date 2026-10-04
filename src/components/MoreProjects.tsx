import { PROJECTS, GITHUB_REPOS, DEVELOPER_INFO } from '../data/portfolioData';
import { ExternalLink, Github, Terminal } from 'lucide-react';

export default function MoreProjects() {
  const secondaryProjects = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-3">
          <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest">Additional Work</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            More Projects & Experiments
          </h2>
          <p className="text-sm md:text-base font-bold text-slate-950 max-w-xl">
            Real-time trading analytics, e-commerce MVPs, and team architectural contributions.
          </p>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-extrabold text-blue-800">{project.category}</span>
                  <span className="text-xs font-mono font-bold text-slate-950">{project.status}</span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-950 mb-2">{project.title}</h3>
                <p className="text-xs font-bold text-slate-950 leading-relaxed mb-4">{project.description}</p>
                <div className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="text-xs font-bold text-slate-950 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[11px] font-bold rounded bg-slate-100 text-slate-950">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-950">{project.role}</span>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-950 transition-colors font-bold shadow-2xs"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4 font-bold" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Section */}
        <div className="p-8 rounded-2xl bg-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest mb-1">Open Source</div>
              <h3 className="text-2xl font-extrabold text-slate-950">GitHub Repositories</h3>
              <p className="text-sm font-bold text-slate-950">Public repositories and development toolsets.</p>
            </div>
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#f8f9fa] text-slate-950 hover:bg-slate-100 transition-colors flex items-center gap-2 text-xs font-bold w-fit shadow-xs"
            >
              <Github className="w-4 h-4" />
              View GitHub Profile
              <ExternalLink className="w-3.5 h-3.5 font-bold" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GITHUB_REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#f8f9fa] shadow-sm hover:shadow-md transition-all flex items-start justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-950 font-extrabold group-hover:text-blue-700 transition-colors">
                    <Terminal className="w-4 h-4 text-blue-700 font-bold" />
                    <span>{repo.name}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-950">{repo.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-950 group-hover:text-blue-700 transition-colors shrink-0 font-bold" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
