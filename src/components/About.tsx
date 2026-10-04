import { DEVELOPER_INFO } from '../data/portfolioData';
import { Cpu, Wrench, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          
          {/* Left Title */}
          <div className="md:w-1/3">
            <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest mb-2">Background & Journey</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
              About Me
            </h2>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-950">
              <span>VETA Electronics</span>
              <span aria-hidden="true">·</span>
              <span>Independent Transition</span>
              <span aria-hidden="true">·</span>
              <span>Full-Stack Engineering</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-2/3 space-y-6 text-slate-950 font-bold text-base md:text-lg leading-relaxed">
            <p>
              {DEVELOPER_INFO.bioFull}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#f8f9fa] shadow-md space-y-2">
                <div className="flex items-center gap-2 text-blue-800 font-extrabold text-sm">
                  <Cpu className="w-4 h-4 font-bold" />
                  <span>Hardware & Engineering Foundation</span>
                </div>
                <p className="text-xs font-bold text-slate-950 leading-normal">
                  Background in Electronics from VETA, providing strong analytical thinking and systematic problem-solving capabilities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f8f9fa] shadow-md space-y-2">
                <div className="flex items-center gap-2 text-indigo-800 font-extrabold text-sm">
                  <Wrench className="w-4 h-4 font-bold" />
                  <span>Practical Problem Solving</span>
                </div>
                <p className="text-xs font-bold text-slate-950 leading-normal">
                  Focused on building robust, real-world digital products that deliver tangible value to businesses and users.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-mono font-extrabold text-slate-950 uppercase tracking-wider mb-3">Core Development Philosophy</div>
              <ul className="space-y-2 text-sm font-bold text-slate-950">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 font-bold shrink-0 mt-0.5" />
                  <span>End-to-end responsibility from architecture and database design to deployment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 font-bold shrink-0 mt-0.5" />
                  <span>Pragmatic integration of AI and modern web standards where they add real utility.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 font-bold shrink-0 mt-0.5" />
                  <span>Clean, maintainable code with strict attention to performance and UX.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
