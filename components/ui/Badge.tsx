interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'skill';
  className?: string;
}

export function Badge({ children, variant = 'skill', className = '' }: BadgeProps) {
  const base =
    'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-default';
  const variants = {
    primary:
      'bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100 dark:bg-pink-500/20 dark:text-pink-300 dark:border-pink-500/40 dark:hover:bg-pink-500/30',
    skill:
      'bg-slate-100 text-pink-600 border border-slate-200 hover:border-pink-300 hover:text-pink-500 dark:bg-slate-800/80 dark:text-pink-300 dark:border-slate-700 dark:hover:border-pink-500/50 dark:hover:text-pink-200',
  };
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
