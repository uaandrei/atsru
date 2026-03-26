import type { Locale, Translation } from './types'

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: 'Handmade by atsru | Friendly Developer',
      description:
        'A playful developer portfolio built with React, Tailwind, and bilingual content.',
    },
    nav: [
      { href: '#home', label: 'Hi there' },
      { href: '#skills', label: 'What I do' },
      { href: '#projects', label: 'My scribbles' },
      { href: '#contact', label: 'Say hello' },
    ],
    hero: {
      badge: 'Open for fun chats and projects',
      titleLead: "Let's build",
      titleHighlight: 'cool things',
      titleTail: 'together.',
      description:
        "I'm a human who loves turning messy ideas into tidy, helpful digital tools. No robot talk, just good vibes and great code.",
      primaryCta: 'See my work',
      secondaryCta: 'About me',
      imageAlt: 'Modern workspace with laptop and a soft creative atmosphere',
    },
    stats: [
      { value: '150+', label: 'Happy stories' },
      { value: '80+', label: 'Coffee chats' },
      { value: '5+', label: 'Years of tinkering' },
      { value: 'Every', label: 'Single day' },
    ],
    services: {
      eyebrow: 'How I can help',
      title: 'I wear a few different hats...',
      description:
        `From a simple "hello" page to a more capable business tool, I have the tools and the curiosity to help.`,
      items: [
        {
          icon: 'face_retouching_natural',
          title: 'Shine online',
          description:
            "I'll build a landing page that tells your story so clearly that people will want to stay.",
        },
        {
          icon: 'emoji_objects',
          title: 'Smart apps',
          description:
            'Need something that does the heavy lifting? I build web apps that are powerful and approachable.',
        },
        {
          icon: 'touch_app',
          title: 'Pocket tools',
          description:
            'Mobile-first experiences that feel smooth, fast, and friendly from the first tap.',
        },
        {
          icon: 'laptop_mac',
          title: 'Workflow support',
          description:
            'Internal tools and desktop-like interfaces that make the complicated parts feel lighter.',
        },
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'A few playful builds',
      description:
        'A sample of the kind of interfaces and product thinking this visual direction can support.',
      items: [
        {
          title: 'Essentum Rufeea',
          description:
            'Brand site for a Romanian fabric fragrance company, with rich visuals and product storytelling.',
          tags: ['Brand', 'E-commerce', 'Product page'],
          href: 'https://essentum-rufeea.ro/',
          cta: 'Visit site',
          image: '/essentum.png',
        },
        {
          title: 'RC Partners',
          description:
            'Corporate website for a law firm specialized in mergers and acquisitions.',
          tags: ['Law firm', 'Corporate', 'Responsive UI'],
          href: 'https://rcpartners.ro/',
          cta: 'Visit site',
          image: '/rcpartners.png',
        },
        {
          title: 'Minded Counsels',
          description:
            'Professional site for a boutique IP law firm with offices in Bucharest and Targu Mures.',
          tags: ['Law firm', 'Professional', 'Multi-page'],
          href: 'https://minded-counsels.ro/',
          cta: 'Visit site',
          image: '/minded.png',
        },
      ],
    },
    contact: {
      title: 'Got a wild idea?',
      description:
        "I'm always up for a new adventure. Whether it's a giant project or a small question, I'd love to hear from you.",
      emailCta: 'Drop a line',
      resumeCta: 'See my CV',
    },
    footer: {
      madeWith: 'Made with heart and a lot of tea.',
    },
    languageToggle: {
      label: 'Language',
      english: 'English',
      romanian: 'Romanian',
    },
  },
  ro: {
    meta: {
      title: 'Handmade by atsru | Dezvoltator Prietenos',
      description:
        'Un portofoliu jucăuș de dezvoltator, construit cu React, Tailwind și conținut bilingv.',
    },
    nav: [
      { href: '#home', label: 'Salut' },
      { href: '#skills', label: 'Ce fac' },
      { href: '#projects', label: 'Proiectele mele' },
      { href: '#contact', label: 'Spune-mi salut' },
    ],
    hero: {
      badge: 'Disponibil pentru discuții și proiecte',
      titleLead: 'Hai să construim',
      titleHighlight: 'lucruri faine',
      titleTail: 'împreună.',
      description:
        'Îmi place să transform ideile neclare în produse digitale curate și utile. Fără jargon de robot, doar energie bună și cod solid.',
      primaryCta: 'Vezi proiectele',
      secondaryCta: 'Despre mine',
      imageAlt: 'Birou modern cu laptop și o atmosferă creativă relaxată',
    },
    stats: [
      { value: '150+', label: 'Povești fericite' },
      { value: '80+', label: 'Discuții la cafea' },
      { value: '5+', label: 'Ani de explorare' },
      { value: 'Zi de zi', label: 'Cu consecvență' },
    ],
    services: {
      eyebrow: 'Cum pot ajuta',
      title: 'Port mai multe pălării...',
      description:
        'De la o pagină simplă de prezentare până la un instrument de business mai serios, am baza tehnică și curiozitatea potrivită.',
      items: [
        {
          icon: 'face_retouching_natural',
          title: 'Prezență online',
          description:
            'Pot crea o pagină de prezentare care spune povestea ta clar și convingător.',
        },
        {
          icon: 'emoji_objects',
          title: 'Aplicații inteligente',
          description:
            'Dacă ai nevoie de ceva care chiar face treaba grea, construiesc aplicații web puternice și ușor de folosit.',
        },
        {
          icon: 'touch_app',
          title: 'Unelte de buzunar',
          description:
            'Experiențe mobile-first fluide, rapide și prietenoase chiar de la prima interacțiune.',
        },
        {
          icon: 'laptop_mac',
          title: 'Flux de lucru',
          description:
            'Instrumente interne și interfețe care fac lucrurile complicate să pară mai simple.',
        },
      ],
    },
    projects: {
      eyebrow: 'Proiecte selectate',
      title: 'Câteva construcții jucăușe',
      description:
        'Un mic eșantion al tipului de interfețe și al gândirii de produs pe care această direcție vizuală îl poate susține.',
      items: [
        {
          title: 'Essentum Rufeea',
          description:
            'Site de brand pentru o companie românească de parfumuri textile, cu vizualuri bogate și prezentare de produs.',
          tags: ['Brand', 'E-commerce', 'Pagină produs'],
          href: 'https://essentum-rufeea.ro/',
          cta: 'Vezi site-ul',
          image: '/essentum.png',
        },
        {
          title: 'RC Partners',
          description:
            'Site corporativ pentru o firmă de avocatură specializată în fuziuni și achiziții.',
          tags: ['Firmă juridică', 'Corporate', 'Interfață responsive'],
          href: 'https://rcpartners.ro/',
          cta: 'Vezi site-ul',
          image: '/rcpartners.png',
        },
        {
          title: 'Minded Counsels',
          description:
            'Site profesional pentru o firmă boutique de proprietate intelectuală cu birouri în București și Târgu Mureș.',
          tags: ['Firmă juridică', 'Profesional', 'Multi-pagină'],
          href: 'https://minded-counsels.ro/',
          cta: 'Vezi site-ul',
          image: '/minded.png',
        },
      ],
    },
    contact: {
      title: 'Ai o idee îndrăzneață?',
      description:
        'Sunt mereu deschis la o nouă aventură. Fie că este un proiect mare sau doar o întrebare scurtă, mi-ar plăcea să aud mai multe.',
      emailCta: 'Trimite-mi un mesaj',
      resumeCta: 'Vezi CV-ul',
    },
    footer: {
      madeWith: 'Făcut cu suflet și multă cafea.',
    },
    languageToggle: {
      label: 'Limbă',
      english: 'Engleză',
      romanian: 'Română',
    },
  },
}
