import { DEVELOPMENT_APPROACH } from '../data/portfolioData';

export default function Approach() {
  return (
    <section id="approach" className="py-24 px-6 md:px-12 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest">Workflow & Methodology</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Development Approach
          </h2>
          <p className="text-sm md:text-base font-bold text-slate-950">
            A structured six-step process from initial understanding to production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVELOPMENT_APPROACH.map((item) => (
            <div
              key={item.step}
              className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-3xl font-extrabold font-mono text-blue-800 mb-4 group-hover:scale-105 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-slate-950 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
