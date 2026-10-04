import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layout, Cpu, Server, Database, Sparkles, Cloud, Wrench } from 'lucide-react';

const iconMap: Record<string, any> = {
  Code,
  Layout,
  Cpu,
  Server,
  Database,
  Sparkles,
  Cloud,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest">Technical Expertise</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Technologies & Stack
          </h2>
          <p className="text-sm md:text-base font-bold text-slate-950">
            A comprehensive toolset spanning full-stack engineering, databases, AI integration, and cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.iconName] || Code;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-800 mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 font-bold" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-950 mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-bold rounded-md bg-slate-100 text-slate-950"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
