import { WHAT_I_BUILD } from '../data/portfolioData';
import { Layers, Cpu, Server, Cloud, Sparkles } from 'lucide-react';

const icons = [Layers, Sparkles, Server, Cpu, Cloud];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest">Capabilities</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            What I Build
          </h2>
          <p className="text-sm md:text-base font-bold text-slate-950">
            Practical technology solutions designed for scale, reliability, and real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WHAT_I_BUILD.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#f8f9fa] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-800 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 font-bold" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-950 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
