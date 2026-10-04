import { useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Send, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${DEVELOPER_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hello Abdulkarim,\n\nMy name is ${formData.name} (${formData.email}).\n\nMessage:\n${formData.message}`);
    const whatsappUrl = `https://wa.me/255785197876?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: CTA & Details */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="text-blue-800 font-mono text-xs font-extrabold uppercase tracking-widest">Get In Touch</div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
                Have an idea, business problem, or digital product in mind?
              </h2>
              <p className="text-xl font-extrabold text-blue-800 pt-2">
                Let's build it.
              </p>
            </div>

            <div className="space-y-4 text-slate-950 font-bold">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-800">
                  <MapPin className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-950">Location</div>
                  <div className="text-sm font-extrabold text-slate-950">{DEVELOPER_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-800">
                  <Phone className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-950">Phone / WhatsApp</div>
                  <a href={`tel:${DEVELOPER_INFO.phone}`} className="text-sm font-extrabold text-slate-950 hover:text-blue-700 transition-colors">
                    {DEVELOPER_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-800">
                  <Mail className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-950">Email</div>
                  <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-sm font-extrabold text-slate-950 hover:text-blue-700 transition-colors">
                    {DEVELOPER_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-800">
                  <Github className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-950">GitHub</div>
                  <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold text-slate-950 hover:text-blue-700 transition-colors flex items-center gap-1">
                    dulyaby
                    <ArrowUpRight className="w-3.5 h-3.5 font-bold" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Badges */}
            <div className="pt-4 border-t border-slate-300">
              <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-slate-950 mb-3">Available For</div>
              <div className="flex flex-wrap gap-2">
                {DEVELOPER_INFO.availability.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-extrabold rounded-lg bg-blue-50 text-blue-950 shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form Card */}
          <div className="p-8 rounded-2xl bg-white shadow-lg">
            <h3 className="text-xl font-extrabold text-slate-950 mb-2">Send a Message</h3>
            <p className="text-xs font-bold text-slate-950 mb-6">Drop a message or project inquiry. Click to open your Email app or WhatsApp instantly.</p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-blue-50 shadow-sm text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-blue-800 font-bold mx-auto" />
                <h4 className="text-lg font-extrabold text-slate-950">Message Ready!</h4>
                <p className="text-xs font-bold text-slate-950">
                  Click below to open your Email App or WhatsApp with your message pre-filled:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleEmailDirect}
                    className="flex-1 py-3 px-4 rounded-xl bg-blue-700 text-white font-extrabold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-md cursor-pointer"
                  >
                    <Mail className="w-4 h-4 font-bold" />
                    Open Email App
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-extrabold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-xs shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 font-bold" />
                    Open WhatsApp
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs font-bold text-slate-600 hover:text-slate-900 pt-2 underline cursor-pointer"
                >
                  Edit Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-slate-950 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] shadow-inner text-slate-950 font-bold placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-slate-950 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] shadow-inner text-slate-950 font-bold placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-extrabold uppercase tracking-wider text-slate-950 mb-1.5">
                    Message / Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, idea, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f9fa] shadow-inner text-slate-950 font-bold placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-blue-700 text-white font-extrabold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 text-sm cursor-pointer"
                >
                  Send Message
                  <Send className="w-4 h-4 font-bold" />
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
