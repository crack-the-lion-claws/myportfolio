import { DEVELOPER_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-white border-t border-slate-200 text-center text-xs text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-900">{DEVELOPER_INFO.name}</span> — {DEVELOPER_INFO.title}
        </div>
        <div>
          Based in {DEVELOPER_INFO.location} · {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
