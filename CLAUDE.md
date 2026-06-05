@AGENTS.md
blessingdev-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout global (Navbar, Footer, Providers)
│   │   ├── page.tsx           # Page d'accueil unique (One-Page structurée)
│   │   ├── icon.ico           # Favicon
│   │   └── api/
│   │       └── contact/       # Route API pour la gestion du formulaire
│   ├── components/
│   │   ├── ui/                # Composants atomiques réutilisables (Button, Input, Card)
│   │   └── sections/          # Sections de la page d'accueil
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Services.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Testimonials.tsx
│   │       └── Contact.tsx
│   ├── constants/             # Fichiers de données (projets, compétences, services)
│   │   └── index.ts
│   ├── styles/
│   │   └── globals.css
│   └── utils/
└── tailwind.config.js