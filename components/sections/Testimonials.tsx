import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#080C13]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-pink-600 rounded-full blur-[150px] opacity-[0.04] dark:opacity-[0.07] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50 border border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/20 rounded-full text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Témoignages
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Ce que disent{' '}
              <span className="bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                nos clients
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base lg:text-lg">
              La satisfaction de nos clients est notre plus grande récompense.
            </p>
          </div>
        </Reveal>

        {/* Cards — fade-up stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={index} direction="up" delay={index * 120}>
              <div className="group relative flex flex-col p-6 bg-white dark:bg-white/4 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-pink-300/50 dark:hover:border-pink-500/35 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.08)] shadow-sm dark:shadow-none h-full">
                <div className="w-9 h-9 bg-pink-50 dark:bg-pink-500/15 border border-pink-200 dark:border-pink-500/25 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-100 dark:group-hover:bg-pink-500/25 transition-colors duration-300">
                  <Quote size={16} className="text-pink-500 dark:text-pink-400" />
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-full bg-linear-to-br from-pink-500 to-pink-700 flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-slate-900 dark:text-white text-sm font-semibold">{t.author}</div>
                    <div className="text-slate-400 dark:text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
