import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-[#f8f9fa] shadow-md flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-800 shrink-0 shadow-xs">
            <GraduationCap className="w-7 h-7 font-bold" />
          </div>
          <div className="space-y-2">
            <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest">Education & Foundation</div>
            <h3 className="text-2xl font-extrabold text-slate-950">VETA — Electronics</h3>
            <p className="text-sm font-bold text-slate-950 leading-relaxed">
              After studying Electronics at VETA, I continued learning software development independently and transitioned into Full-Stack Development. This foundational electronics background provides a deep analytical perspective for hardware-software integration, system architecture, and debugging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
