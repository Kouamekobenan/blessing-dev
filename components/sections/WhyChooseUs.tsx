import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-white dark:bg-background overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 rounded-full blur-[120px] opacity-[0.04] dark:opacity-[0.09] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — slide in from left */}
          <Reveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50 border border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/20 rounded-full text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-5">
                Pourquoi nous ?
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Pourquoi choisir{' '}
                <span className="bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  BlessingDev ?
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg leading-relaxed mb-8">
                Notre engagement va au-delà du simple développement. Nous construisons
                des partenariats durables basés sur la confiance, la transparence et
                la performance.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-pink-300 dark:border-pink-500/40 hover:border-pink-500 text-pink-600 dark:text-pink-300 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10 font-semibold rounded-full transition-all duration-300"
              >
                Nous contacter
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          {/* Right: checklist — slide in from right, stagger */}
          <div className="space-y-3">
            {WHY_CHOOSE_US.map((reason, index) => (
              <Reveal key={index} direction="right" delay={index * 80}>
                <div className="group flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-pink-300/50 dark:hover:border-pink-500/30 transition-all duration-200 hover:bg-pink-50/50 dark:hover:bg-white/6 shadow-sm dark:shadow-none">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-pink-400 dark:text-pink-500 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-200"
                  />
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-200">
                    {reason}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
