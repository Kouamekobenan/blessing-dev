import { Utensils, Globe, Newspaper, MapPin, Zap } from 'lucide-react';
import { PROJECTS } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';

const PROJECT_ICONS = [Utensils, Globe, Newspaper, MapPin, Zap];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-[#080C13]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-56 bg-pink-600 rounded-full blur-[110px] opacity-[0.04] dark:opacity-[0.09] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50 border border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/20 rounded-full text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Nos{' '}
              <span className="bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                Réalisations
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base lg:text-lg">
              Découvrez quelques-uns des projets réalisés avec passion et expertise.
            </p>
          </div>
        </Reveal>

        {/* Cards — zoom stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const Icon = PROJECT_ICONS[i];
            return (
              <Reveal key={project.name} direction="zoom" delay={i * 90}>
                <div className="group relative overflow-hidden bg-white dark:bg-white/4 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-pink-400/50 dark:hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg dark:hover:shadow-[0_0_40px_rgba(236,72,153,0.12)] shadow-sm dark:shadow-none h-full">
                  <div className="h-px bg-linear-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-linear-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative p-6">
                    <div className="w-full h-36 bg-slate-100 dark:bg-slate-800/60 rounded-xl mb-5 flex items-center justify-center border border-slate-200 dark:border-slate-700/50 group-hover:border-pink-300/40 dark:group-hover:border-pink-500/30 transition-colors duration-300">
                      <Icon
                        size={40}
                        className="text-slate-300 dark:text-slate-600 group-hover:text-pink-400 dark:group-hover:text-pink-500 transition-colors duration-300"
                      />
                    </div>

                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-100 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-300 rounded-full border border-pink-200 dark:border-pink-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
