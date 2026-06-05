import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BlessingDev — Développeur Web & Mobile',
  description:
    'BlessingDev accompagne les entreprises dans leur transformation numérique avec des sites web, applications et solutions digitales performantes sur mesure.',
  keywords: ['développement web', 'développement mobile', 'Next.js', 'React', 'Abidjan', 'BlessingDev'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Anti-flash script: reads saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('blessingdev-theme');if(t==='light')document.documentElement.classList.remove('dark');}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-background text-slate-900 dark:text-slate-100 antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
