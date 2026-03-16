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
          title: 'Kind Threads',
          description:
            'A warm portfolio for a handmade ceramics studio with simple storytelling and clear calls to action.',
          tags: ['Brand story', 'Landing page', 'Responsive UI'],
          href: '#contact',
          cta: 'Discuss something similar',
        },
        {
          title: 'Pocket Planner',
          description:
            'A lightweight dashboard for appointments and follow-ups designed to feel soft instead of corporate.',
          tags: ['Dashboard', 'Appointments', 'Bilingual UX'],
          href: '#contact',
          cta: 'Build my version',
        },
        {
          title: 'Tea Note',
          description:
            'An internal tool concept for tracking requests, comments, and delivery steps across a small team.',
          tags: ['Internal tools', 'Operations', 'Design system'],
          href: '#contact',
          cta: 'Start a conversation',
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
        'Un portofoliu jucaus de dezvoltator, construit cu React, Tailwind si continut bilingv.',
    },
    nav: [
      { href: '#home', label: 'Salut' },
      { href: '#skills', label: 'Ce fac' },
      { href: '#projects', label: 'Proiectele mele' },
      { href: '#contact', label: 'Spune-mi salut' },
    ],
    hero: {
      badge: 'Disponibil pentru discutii si proiecte',
      titleLead: 'Hai sa construim',
      titleHighlight: 'lucruri faine',
      titleTail: 'impreuna.',
      description:
        'Imi place sa transform ideile neclare in produse digitale curate si utile. Fara jargon de robot, doar energie buna si cod solid.',
      primaryCta: 'Vezi proiectele',
      secondaryCta: 'Despre mine',
      imageAlt: 'Birou modern cu laptop si o atmosfera creativa relaxata',
    },
    stats: [
      { value: '150+', label: 'Povesti fericite' },
      { value: '80+', label: 'Discutii la cafea' },
      { value: '5+', label: 'Ani de explorare' },
      { value: 'Zi de zi', label: 'Cu consecventa' },
    ],
    services: {
      eyebrow: 'Cum pot ajuta',
      title: 'Port mai multe palarii...',
      description:
        'De la o pagina simpla de prezentare pana la un instrument de business mai serios, am baza tehnica si curiozitatea potrivita.',
      items: [
        {
          icon: 'face_retouching_natural',
          title: 'Prezenta online',
          description:
            'Pot crea o pagina de prezentare care spune povestea ta clar si convingator.',
        },
        {
          icon: 'emoji_objects',
          title: 'Aplicatii inteligente',
          description:
            'Daca ai nevoie de ceva care chiar face treaba grea, construiesc aplicatii web puternice si usor de folosit.',
        },
        {
          icon: 'touch_app',
          title: 'Unelte de buzunar',
          description:
            'Experiente mobile-first fluide, rapide si prietenoase chiar de la prima interactiune.',
        },
        {
          icon: 'laptop_mac',
          title: 'Flux de lucru',
          description:
            'Instrumente interne si interfete care fac lucrurile complicate sa para mai simple.',
        },
      ],
    },
    projects: {
      eyebrow: 'Proiecte selectate',
      title: 'Cateva constructii jucause',
      description:
        'Un mic esantion al tipului de interfete si al gandirii de produs pe care aceasta directie vizuala il poate sustine.',
      items: [
        {
          title: 'Kind Threads',
          description:
            'Un portofoliu cald pentru un studio de ceramica handmade, cu storytelling simplu si apeluri clare la actiune.',
          tags: ['Poveste de brand', 'Landing page', 'Interfata responsive'],
          href: '#contact',
          cta: 'Vreau ceva similar',
        },
        {
          title: 'Pocket Planner',
          description:
            'Un dashboard usor pentru programari si urmariri, gandit sa para prietenos, nu corporatist.',
          tags: ['Dashboard', 'Programari', 'UX bilingv'],
          href: '#contact',
          cta: 'Construieste varianta mea',
        },
        {
          title: 'Tea Note',
          description:
            'Un concept de tool intern pentru cereri, comentarii si pasi de livrare intr-o echipa mica.',
          tags: ['Tool intern', 'Operatiuni', 'Design system'],
          href: '#contact',
          cta: 'Hai sa vorbim',
        },
      ],
    },
    contact: {
      title: 'Ai o idee indrazneata?',
      description:
        'Sunt mereu deschis la o noua aventura. Fie ca este un proiect mare sau doar o intrebare scurta, mi-ar placea sa aud mai multe.',
      emailCta: 'Trimite-mi un mesaj',
      resumeCta: 'Vezi CV-ul',
    },
    footer: {
      madeWith: 'Facut cu suflet si multa cafea.',
    },
    languageToggle: {
      label: 'Limba',
      english: 'Engleza',
      romanian: 'Romana',
    },
  },
}
