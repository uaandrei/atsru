export type WeddingLocale = "ro" | "hu";

export type WeddingTranslation = {
  envelope: {
    detailsCta: string;
    invitation: string;
    datePlace: string;
    monogramAlt: string;
  };
  nav: {
    home: string;
    program: string;
    location: string;
    rsvp: string;
    contact: string;
  };
  hero: {
    date: string;
    place: string;
    welcomeTitle: string;
    welcomeBody: string;
  };
  schedule: {
    title: string;
    events: Array<{
      time: string;
      title: string;
      icon: string;
    }>;
  };
  location: {
    imageAlts: string[];
    previousImage: string;
    nextImage: string;
    title: string;
    venueName: string;
    intro: string;
    description: string;
    tipsTitle: string;
    tips: Array<{
      icon: string;
      text: string;
    }>;
    mapCta: string;
  };
  church: {
    title: string;
    imageAlt: string;
    intro: string;
    details: string;
    notice: string;
    mapCta: string;
  };
  rsvp: {
    title: string;
    deadlinePrefix: string;
    deadlineDate: string;
    deadlineSuffix: string;
    thankYouTitle: string;
    thankYouBody: string;
    thankYouBodyDeclining: string;
    attendanceQuestion: string;
    attending: string;
    declining: string;
    namesLabel: string;
    namesHelp: string;
    namesPlaceholder: string;
    accommodationQuestion: string;
    accommodationOptions: Array<{
      value: "sat-sun" | "fri-sun" | "none";
      label: string;
    }>;
    accommodationInfo: string;
    dietaryLabel: string;
    dietaryPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
  };
  contact: {
    title: string;
    body: string;
  };
};

export const weddingTranslations: Record<WeddingLocale, WeddingTranslation> = {
  ro: {
    envelope: {
      detailsCta: "Apăsați pentru detalii",
      invitation: "Vă invităm cu drag la nunta noastră",
      datePlace: "8 august 2026 · Sighișoara",
      monogramAlt: "Monograma Zsófi & Andrei",
    },
    nav: {
      home: "Acasă",
      program: "Program",
      location: "Locație",
      rsvp: "Confirmare",
      contact: "Contact",
    },
    hero: {
      date: "8 august 2026 (Sâmbătă)",
      place: "Sighișoara",
      welcomeTitle: "Bine ați venit pe pagina noastră de nuntă!",
      welcomeBody:
        "Am creat această pagină pentru ca voi să găsiți într-un singur loc toate informațiile importante despre program, locație, opțiuni de cazare și transport. Pagina va fi actualizată constant cu informații noi pe măsură ce ne apropiem de ziua nunții.",
    },
    schedule: {
      title: "Programul",
      events: [
        { time: "14:00", title: "Cununia religioasă", icon: "church" },
        { time: "16:00", title: "Petrecerea", icon: "celebration" },
      ],
    },
    location: {
      imageAlts: [
        "Interiorul The Dallas Barn pregătit pentru nuntă",
        "Masă de nuntă pe terasa The Dallas Barn, pe malul lacului",
        "Mașină de nuntă The Dallas Barn, pe malul lacului",
        "Masă de nuntă The Dallas Barn, pe malul lacului",
      ],
      previousImage: "Imaginea anterioară",
      nextImage: "Imaginea următoare",
      title: "Locația",
      venueName: "The Dallas Barn",
      intro:
        "Iubim natura, dansul, buna dispoziție și momentele petrecute împreună cu voi.",
      description:
        "De aceea, pentru a ne sărbători nunta, am ales un loc relaxant, aproape de natură, pe malul unui lac. Nu ne-am imaginat o nuntă clasică, ci o petrecere pe cinste, cu muzica noastră preferată și cu oamenii care ne sunt cei mai dragi.",
      tipsTitle: "De reținut",
      tips: [
        {
          icon: "hiking",
          text: "Din cauza terenului și ca să puteți dansa până dimineața, încălțămintea comodă va fi cea mai bună alegere.",
        },
        {
          icon: "directions_car",
          text: "Dacă se poate, lăsați mașina la cazare. Deși există suficiente locuri de parcare, vă recomandăm să nu planificați să conduceți.",
        },
        {
          icon: "directions_bus",
          text: "De transportul pe ruta Sighișoara-locație ne ocupăm noi.",
        },
      ],
      mapCta: "Cum ajungeți?",
    },
    church: {
      title: "Cununia religioasă",
      imageAlt: "Biserica pentru cununia religioasă",
      intro:
        "Vă așteptăm la Biserica Romano-Catolică Sfântul Iosif din Sighișoara pentru slujba de cununie.",
      details:
        "Vă rugăm să aveți în vedere că accesul se face pe piatră cubică și urcușul durează aproximativ 7-10 minute, așa că vă recomandăm încălțăminte comodă. De asemenea, accesul cu mașina nu este permis, vă rugăm să lăsați mașina în parcarea de sub cetate.",
      notice: "Fără mașini pe piatră cubică",
      mapCta: "Cum ajungeți?",
    },
    rsvp: {
      title: "Confirmați participarea",
      deadlinePrefix:
        "Vă rugăm să ne confirmați participarea cel târziu până la",
      deadlineDate: "13 iulie",
      deadlineSuffix: ".",
      thankYouTitle: "Mulțumim!",
      thankYouBody:
        "Răspunsul vostru a fost înregistrat. Abia așteptăm să sărbătorim împreună!",
      thankYouBodyDeclining: "Răspunsul vostru a fost înregistrat.",
      attendanceQuestion: "Veți sărbători alături de noi?",
      attending: "Da",
      declining: "Din păcate nu putem fi prezenți",
      namesLabel: "Câte persoane veniți?",
      namesHelp:
        "Vă rugăm să ne comunicați numele voastre, iar dacă veniți cu copil/copii, și vârsta acestuia/acestora.",
      namesPlaceholder: "Ex: Ion Ionescu, Maria Ionescu, Sofia (5 ani)",
      accommodationQuestion:
        "Doriți să vă rezervăm cazare în Sighișoara? (Nu avem posibilitatea de cazare la locația evenimentului)",
      accommodationOptions: [
        {
          value: "sat-sun",
          label: "Da — 8-9 august (o noapte, sâmbătă-duminică)",
        },
        {
          value: "fri-sun",
          label: "Da — 7-9 august (două nopți, vineri-duminică)",
        },
        { value: "none", label: "Nu este necesar, ne ocupăm noi." },
      ],
      accommodationInfo:
        "Sighișoara este o destinație turistică populară și, fiind un oraș mic, locurile de cazare se ocupă rapid. Este recomandat să faceți rezervarea din timp.",
      dietaryLabel: "Aveți alergii alimentare sau regim special?",
      dietaryPlaceholder: "ex: fără gluten, vegetarian...",
      messageLabel: "Doriți să ne mai transmiteți ceva?",
      messagePlaceholder: "Mesajul vostru...",
      submit: "Trimite răspunsul",
      submitting: "Se trimite...",
    },
    contact: {
      title: "Contact",
      body: "Pentru orice întrebare, nu ezitați să ne contactați!",
    },
  },
  hu: {
    envelope: {
      detailsCta: "Kattintsatok a részletekért!",
      invitation: "Örömmel hívunk meg Benneteket az esküvőnkre",
      datePlace: "2026. augusztus 8. · Segesvár",
      monogramAlt: "Zsófi és Andrei monogramja",
    },
    nav: {
      home: "Kezdőlap",
      program: "Program",
      location: "Helyszín",
      rsvp: "Visszajelzés",
      contact: "Kapcsolat",
    },
    hero: {
      date: "2026. augusztus 8. (szombat)",
      place: "Segesvár",
      welcomeTitle: "Üdvözlünk Benneteket az esküvői oldalunkon!",
      welcomeBody:
        "Azért hoztuk létre ezt az oldalt, hogy minden fontos információt egy helyen megtaláljatok a programról, helyszínről, szálláslehetőségekről és szállításról. Az oldalt folyamatosan frissítjük új információkkal, ahogy közeledünk az esküvő napjához.",
    },
    schedule: {
      title: "Program",
      events: [
        { time: "14:00", title: "Egyházi szertartás", icon: "church" },
        { time: "16:00", title: "Ünneplés", icon: "celebration" },
      ],
    },
    location: {
      imageAlts: [
        "A The Dallas Barn esküvőre előkészített belső tere",
        "Esküvői asztal a The Dallas Barn tóparti teraszán",
        "Esküvői autó a The Dallas Barn tópartján",
        "Esküvői asztal a The Dallas Barn tópartján",
      ],
      previousImage: "Előző kép",
      nextImage: "Következő kép",
      title: "Helyszín",
      venueName: "The Dallas Barn",
      intro:
        "Szeretjük a természetet, táncot, jó hangulatot és együtt lenni veletek.",
      description:
        "Ezért az esküvőnk megünnepléséhez egy laza, természetközeli helyet választottunk a tó partján. Nem egy klasszikus esküvőt álmodtunk meg magunknak, hanem egy fergeteges bulit a kedvenc zenéinkkel és a számunkra legkedvesebb emberekkel.",
      tipsTitle: "Fontos tudnivalók",
      tips: [
        {
          icon: "hiking",
          text: "A terep miatt és hogy reggelig bírjátok a táncot, a kényelmes cipő lesz a legjobb választás.",
        },
        {
          icon: "directions_car",
          text: "Ha tehetitek, hagyjátok az autót a szálláson. Bár van elegendő parkolóhely a helyszínen, inkább ne tervezzetek vezetni.",
        },
        {
          icon: "directions_bus",
          text: "A Segesvár-helyszín útvonalon a szállításról gondoskodunk.",
        },
      ],
      mapCta: "Útvonal a helyszínhez",
    },
    church: {
      title: "Egyházi szertartás",
      imageAlt: "Az egyházi szertartás temploma",
      intro:
        "Várunk Benneteket a segesvári Szent József római katolikus templomban az esküvői szertartásra.",
      details:
        "A templom autóval nem megközelíthető, ezért kérjük, hagyjátok az autót a vár alatti parkolóban. A templomhoz vezető út macskaköves, és gyalog kb. 7-10 percet vesz igénybe, ezért érdemes kényelmes cipőben érkezni.",
      notice: "A templom autóval nem megközelíthető",
      mapCta: "Útvonal a templomhoz",
    },
    rsvp: {
      title: "Részvételi visszajelzés",
      deadlinePrefix: "Kérjük, részvételi szándékotokat jelezzétek legkésőbb",
      deadlineDate: "július 13-ig",
      deadlineSuffix: ".",
      thankYouTitle: "Köszönjük!",
      thankYouBody:
        "Visszajelzéseteket rögzítettük. Alig várjuk, hogy együtt ünnepeljünk!",
      thankYouBodyDeclining: "Visszajelzéseteket rögzítettük.",
      attendanceQuestion: "Velünk ünnepeltek?",
      attending: "Igen",
      declining: "Sajnos nem tudunk ott lenni",
      namesLabel: "Hányan érkeztek?",
      namesHelp:
        "Kérjük, tüntessétek fel a neveiteket, és ha gyerekkel/gyerekekkel jösztök, az életkorukat is.",
      namesPlaceholder: "Pl.: Kovács János, Kovács Mária, Júlia (5 éves)",
      accommodationQuestion:
        "Szeretnétek, hogy foglaljunk nektek szállást Segesváron? (A rendezvény helyszínén nincs szálláslehetőség)",
      accommodationOptions: [
        {
          value: "sat-sun",
          label: "Igen — augusztus 8-9 (egy éjszaka, szombattól vasárnapig)",
        },
        {
          value: "fri-sun",
          label: "Igen — augusztus 7-9 (két éjszaka, péntektől vasárnapig)",
        },
        { value: "none", label: "Nem szükséges, megoldjuk mi." },
      ],
      accommodationInfo:
        "Kérünk Benneteket, vegyétek figyelembe, hogy Segesvár népszerű turisztikai célpont, és mivel kisváros, a szálláshelyek hamar betelnek. Érdemes időben foglalni.",
      dietaryLabel: "Van bármilyen ételallergiátok vagy speciális étrendetek?",
      dietaryPlaceholder: "pl.: gluténmentes, vegetáriánus...",
      messageLabel: "Szeretnétek még valamit megosztani velünk?",
      messagePlaceholder: "Üzenetetek...",
      submit: "Válasz elküldése",
      submitting: "Küldés...",
    },
    contact: {
      title: "Kapcsolat",
      body: "Bármilyen kérdés esetén keressetek bátran!",
    },
  },
};

export function getWeddingLocale(searchParams: URLSearchParams): WeddingLocale {
  return searchParams.get("lang") === "hu" ? "hu" : "ro";
}
