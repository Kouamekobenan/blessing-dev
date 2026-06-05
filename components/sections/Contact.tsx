'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

const CONTACT_INFO = [
  { icon: Mail,    label: 'Email',       value: 'contact@blessingdev.com' },
  { icon: Phone,   label: 'Téléphone',   value: '+225 XX XX XX XX XX' },
  { icon: MapPin,  label: 'Localisation', value: "Abidjan, Côte d'Ivoire" },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full bg-white dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/30';

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white dark:bg-background overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-600 rounded-full blur-[130px] opacity-[0.04] dark:opacity-[0.1] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-400 rounded-full blur-[100px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50 border border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/20 rounded-full text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Contact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Discutons de{' '}
              <span className="bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                votre projet
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base lg:text-lg">
              Prêt à lancer votre projet ? Contactez-nous et démarrons ensemble.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── Info ── */}
          <Reveal direction="left">
            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold text-xl mb-6">Nos coordonnées</h3>

              <div className="space-y-3 mb-8">
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-slate-800 rounded-xl"
                  >
                    <div className="w-9 h-9 bg-pink-50 dark:bg-pink-500/15 border border-pink-200 dark:border-pink-500/25 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-pink-500 dark:text-pink-400" />
                    </div>
                    <div>
                      <div className="text-slate-400 dark:text-slate-500 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-slate-700 dark:text-white text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slogan card */}
              <div className="p-6 bg-linear-to-br from-pink-50 to-pink-50/30 dark:from-pink-500/10 dark:to-pink-600/5 border border-pink-200 dark:border-pink-500/20 rounded-2xl">
                <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed">
                  &ldquo;BlessingDev : Nous transformons vos idées en solutions
                  digitales performantes et innovantes.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Form ── */}
          <Reveal direction="right">
            <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2">
                  Votre nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={inputBase}
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2">
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={inputBase}
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2">
                  Votre message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  required
                  rows={5}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 px-4 py-3 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm">
                  <CheckCircle2 size={16} className="shrink-0" />
                  Message envoyé avec succès !
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 px-4 py-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-xl text-red-600 dark:text-red-400 text-sm">
                  <AlertCircle size={16} className="shrink-0" />
                  Une erreur est survenue. Veuillez réessayer.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-pink-500 hover:bg-pink-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] hover:-translate-y-0.5"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
