import { Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '@/constants';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/60 bg-slate-100 dark:bg-[#080C13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3 tracking-tight">
              <span className="text-pink-500">B</span>
              <span className="text-slate-900 dark:text-white">lessingDev</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Nous transformons vos idées en solutions digitales performantes,
              innovantes et adaptées à vos besoins.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-700 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-700 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, value: "contact@blessingdev.com" },
                { icon: Phone, value: "+225 68 41 21 98" },
                { icon: MapPin, value: "Abidjan, Côte d'Ivoire" },
              ].map(({ icon: Icon, value }) => (
                <li
                  key={value}
                  className="flex items-center gap-2.5 text-sm text-slate-500 dark:text-slate-400"
                >
                  <Icon size={14} className="text-pink-400 shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-slate-800/60 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-400 dark:text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} BlessingDev. Tous droits réservés.
          </p>
          <p className="hidden sm:block text-slate-400 dark:text-slate-500 text-xs text-right shrink-0">
            <span className="text-pink-500 dark:text-pink-400 font-medium">BlessingDev</span>
            {" "}— solutions digitales sur mesure.
          </p>
        </div>
      </div>
    </footer>
  );
}
