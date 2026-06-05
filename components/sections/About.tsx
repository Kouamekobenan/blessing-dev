import { ArrowRight, Clock, FolderOpen, Users, Headphones } from 'lucide-react';
import { STATS } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';

const STAT_ICONS = [Clock, FolderOpen, Users, Headphones];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white dark:bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400 dark:bg-pink-600 rounded-full blur-[120px] opacity-[0.05] dark:opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 dark:bg-indigo-600 rounded-full blur-[100px] opacity-[0.04] dark:opacity-[0.06] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — slide in from the left */}
          <Reveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50 border border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/20 rounded-full text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-5">
                À Propos
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Qui est{' '}
                <span className="bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  BlessingDev ?
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg leading-relaxed mb-5">
                BlessingDev est une marque spécialisée dans la conception et le
                développement de solutions numériques adaptées aux besoins des
                entreprises modernes.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg leading-relaxed mb-8">
                Notre mission est d&apos;aider les entreprises à améliorer leur présence
                en ligne grâce à des sites web performants, des applications modernes
                et des solutions digitales sur mesure.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-pink-500 hover:bg-pink-400 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] hover:-translate-y-0.5"
              >
                Travaillons ensemble
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          {/* Right: stats grid — zoom stagger */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <Reveal key={stat.label} direction="zoom" delay={i * 100}>
                  <div className="group relative p-6 sm:p-8 bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-pink-400/60 dark:hover:border-pink-500/40 transition-all duration-300 shadow-sm dark:shadow-none overflow-hidden h-full">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative">
                      <Icon size={18} className="text-pink-400 mb-3 opacity-70" />
                      <div className="text-4xl sm:text-5xl font-extrabold bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
