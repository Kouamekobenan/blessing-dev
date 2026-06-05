"use client";

import { ArrowRight, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function CountUp({ to, suffix, duration = 1800 }: { to: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          setCount(Math.round((1 - (1 - p) ** 3) * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={spanRef}>{count}{suffix}</span>;
}

const TECH_TAGS = [
  { label: 'Next.js',    top: '-10px',   left: '50%',    translateX: '-50%', fadeDelay: '0.9s',  floatDelay: '1.5s' },
  { label: 'React',      bottom: '-10px', left: '50%',   translateX: '-50%', fadeDelay: '1.1s',  floatDelay: '1.7s' },
  { label: 'TypeScript', top: '50%',     left: '-20px',  translateY: '-50%', fadeDelay: '1.3s',  floatDelay: '1.9s' },
  { label: 'PHP',        top: '50%',     right: '-14px', translateY: '-50%', fadeDelay: '1.0s',  floatDelay: '1.6s' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-background pt-16"
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-pink-400 dark:bg-pink-600 rounded-full blur-[140px] opacity-[0.06] dark:opacity-20 animate-glow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-400 rounded-full blur-[120px] opacity-[0.05] dark:opacity-[0.15] animate-glow-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-400 dark:bg-indigo-600 rounded-full blur-[100px] opacity-[0.04] dark:opacity-10" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-size-[56px_56px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Text ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 border border-pink-200 dark:bg-pink-500/10 dark:border-pink-500/25 rounded-full text-pink-600 dark:text-pink-300 text-sm font-medium mb-7 animate-fade-up"
              style={{ animationDelay: '0s' }}
            >
              <span className="w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse" />
              Développeur Web &amp; Mobile
            </div>
            {/* Name — shimmer gradient */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight mb-5 animate-fade-up"
              style={{ animationDelay: '0.15s' }}
            >
              <span className="hero-name">BlessingDev</span>
            </h1>
            {/* Tagline */}
            <p
              className="text-xl sm:text-2xl text-slate-700 dark:text-slate-200 font-light leading-relaxed mb-5 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              Transformer vos idées en{' '}
              <span className="text-pink-500 dark:text-pink-400 font-semibold">solutions digitales</span>{' '}
              performantes et innovantes.
            </p>
            {/* Description */}
            <p
              className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: '0.45s' }}
            >
              Avec plus de 3 années d&apos;expérience dans le développement web et
              plusieurs projets réalisés avec succès, BlessingDev accompagne les
              entreprises, les entrepreneurs et les organisations dans leur
              transformation numérique.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-pink-500 hover:bg-pink-400 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] hover:-translate-y-0.5"
              >
                Découvrir mes réalisations
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-transparent border border-slate-300 dark:border-slate-600 hover:border-pink-400 dark:hover:border-pink-500/60 text-slate-700 dark:text-white font-semibold rounded-full transition-all duration-300 hover:bg-pink-50 dark:hover:bg-pink-500/10 hover:-translate-y-0.5"
              >
                Demander un devis
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
          {/* ── Decorative sphere — spring scale-in ── */}
          <div
            className="hidden lg:flex justify-center items-center animate-scale-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative w-85 h-85">
              <div className="absolute inset-0 rounded-full border border-pink-400/20 dark:border-pink-500/20" style={{ animation: 'spin 22s linear infinite' }} />
              <div className="absolute inset-6 rounded-full border border-pink-300/10 dark:border-pink-500/10" style={{ animation: 'spin 16s linear infinite reverse' }} />
              <div className="absolute inset-12 rounded-full border border-slate-300/40 dark:border-slate-700/40" style={{ animation: 'spin 30s linear infinite' }} />

              <div className="absolute inset-16 rounded-2xl bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-slate-200 dark:border-slate-700/50 flex flex-col items-center justify-center gap-3 p-4">
                <span className="text-5xl">💻</span>
                <div className="text-center">
                  <div className="text-slate-900 dark:text-white font-bold text-sm">BlessingDev</div>
                  <div className="text-pink-500 dark:text-pink-400 text-xs">Web &amp; Mobile</div>
                </div>
              </div>
              {/* Tech tags — fade-up then float, chained */}
              {TECH_TAGS.map(({ label, fadeDelay, floatDelay, ...pos }) => (
                <div
                  key={label}
                  className="absolute px-3 py-1.5 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-pink-500 dark:text-pink-300 whitespace-nowrap shadow-sm dark:shadow-none"
                  style={{
                    ...pos,
                    animation: `fade-up 0.6s cubic-bezier(.22,1,.36,1) ${fadeDelay} both, float 5s ease-in-out ${floatDelay} infinite`,
                  } as React.CSSProperties}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ── Stats strip — count-up on scroll ── */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: 3,   suffix: '+',  label: "Années d'expérience", delay: '0.8s'  },
              { value: 5,   suffix: '+',  label: 'Projets réalisés',    delay: '0.95s' },
              { value: 100, suffix: '%',  label: 'Satisfaction client', delay: '1.1s'  },
            ].map((stat) => (
              <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: stat.delay }}>
                <div className="text-3xl sm:text-4xl font-extrabold bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
            <div className="text-center animate-fade-up" style={{ animationDelay: '1.25s' }}>
              <div className="text-3xl sm:text-4xl font-extrabold bg-linear-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">Support technique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
