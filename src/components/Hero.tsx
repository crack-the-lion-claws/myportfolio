import { ArrowRight, MapPin } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import profileImage from '../assets/images/developer_avatar_1791145242486.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE — TEXT (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
                {DEVELOPER_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl font-extrabold text-blue-800 tracking-wide">
                {DEVELOPER_INFO.title}
              </p>
            </div>

            <p className="text-base md:text-lg font-bold text-slate-950 leading-relaxed max-w-xl">
              I build modern web applications, business systems, AI-powered products, and real-time digital solutions — from concept to deployment.
            </p>

            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-950 pt-1">
              <MapPin className="w-4 h-4 text-blue-700 font-bold shrink-0" />
              <span>{DEVELOPER_INFO.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-blue-700 text-white font-extrabold hover:bg-blue-800 transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 group text-sm"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform font-bold" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-[#f8f9fa] shadow-md text-slate-950 font-extrabold hover:bg-slate-100 transition-all text-sm border border-slate-200"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — PROFILE IMAGE (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Premium Glow / Shadow Background Accent */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-sm opacity-30"></div>
              
              {/* Framed Container */}
              <div className="relative p-3 bg-white rounded-2xl shadow-xl border border-slate-200">
                <div className="overflow-hidden rounded-xl bg-slate-100 aspect-[4/5] flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt={DEVELOPER_INFO.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
