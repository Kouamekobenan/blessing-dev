import { SKILLS, SKILL_CATEGORIES } from '@/constants';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

export function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-white dark:bg-background overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-[0.04] dark:opacity-[0.08] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="mb-14">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50 border border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/20 rounded-full text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Compétences
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Nos{' '}
              <span className="bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base lg:text-lg">
              Un stack technologique moderne pour des solutions digitales performantes.
            </p>
          </div>
        </Reveal>

        {/* Badge pills — fade up as a group */}
        <Reveal direction="up" delay={100} className="mb-14">
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill) => (
              <Badge key={skill} variant="skill">
                {skill}
              </Badge>
            ))}
          </div>
        </Reveal>

        {/* Category cards — staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.label} direction="up" delay={i * 120}>
              <div className="p-6 bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-pink-400/30 dark:hover:border-pink-500/25 transition-colors duration-300 shadow-sm dark:shadow-none h-full">
                <h3 className="text-pink-500 dark:text-pink-400 font-semibold text-xs uppercase tracking-wider mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
