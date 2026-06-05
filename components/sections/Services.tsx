import { Globe, AppWindow, Wrench, Rocket } from 'lucide-react';
import { SERVICES } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';

const SERVICE_ICONS = [Globe, AppWindow, Wrench, Rocket];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#080C13]">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-[140px] opacity-[0.04] dark:opacity-[0.09] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50 border border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/20 rounded-full text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Nos{' '}
              <span className="bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base lg:text-lg">
              Des solutions complètes pour votre transformation digitale.
            </p>
          </div>
        </Reveal>

        {/* Cards — zoom stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <Reveal key={service.title} direction="zoom" delay={i * 100}>
                <div className="group relative p-6 bg-white dark:bg-white/4 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-pink-400/60 dark:hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm dark:shadow-none overflow-hidden h-full">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-pink-50 dark:bg-pink-500/15 border border-pink-200 dark:border-pink-500/25 rounded-xl flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.25)] transition-shadow duration-300">
                      <Icon size={22} className="text-pink-500 dark:text-pink-400" />
                    </div>
                    <h3 className="text-slate-800 dark:text-white font-semibold text-base mb-2.5 group-hover:text-pink-600 dark:group-hover:text-pink-100 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
