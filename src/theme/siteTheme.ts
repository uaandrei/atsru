export const siteTheme = {
  brandName: 'Handmade by atsru',
  heroImage: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHZxfeTlCJNtnN0jLT3CNx2Gi-xFnQ3VEdLeHkZs2G3eqYGd00Gdr1w4k7NcgvuIbqm0VKLjw2KNzh_1W1T3obFnS9muIT_wn9Q9k74Fjy7MeMVCO-B0QmWoPbHRq8DPkZuIJc9SIBIc0xnRH2yPymarN1Ztbk5-siniU9GAlg0ZnyIrhoawmi5i9tMCTVWq99RywzwoWkUWr0DAPRN0miLrLeXkEeFAZujhM72Sjb0x-qgm9w2BTk29ueoF6zKKONra1z6P_MJLAa',
  },
  contact: {
    email: 'ro.atsru@gmail.com',
    resumeUrl: 'https://drive.google.com/file/d/1DCeCg4EBAPBIhitzmmeGmmvYzMRVa79A/view?usp=sharing',
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Twitter', href: 'https://x.com/' },
  ],
  classes: {
    page: "min-h-screen bg-[#FCF8F3] text-[#2D3436] antialiased font-[Quicksand]",
    container: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    displayFont: 'font-[Gaegu]',
    sectionEyebrow:
      'text-sm font-bold uppercase tracking-[0.2em] text-[#2D3436]/60',
    primaryButton:
      'inline-flex items-center justify-center rounded-full bg-[#2D3436] px-10 py-5 text-lg font-bold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_18px_50px_rgba(45,52,54,0.18)]',
    secondaryButton:
      'inline-flex items-center justify-center rounded-full border-2 border-[#2D3436]/20 px-10 py-5 text-lg font-bold transition duration-300 hover:bg-[#E8F3F1]',
    headerButton:
      'hidden sm:inline-flex items-center justify-center rounded-full border-2 border-[#2D3436] px-6 py-2 text-sm font-bold text-[#2D3436] transition duration-300 hover:-rotate-2 hover:bg-[#2D3436] hover:text-white',
    pill:
      'inline-flex w-fit items-center gap-2 rounded-full border border-[#2D3436]/10 bg-[#E8F3F1] px-4 py-2 text-sm font-bold text-[#2D3436]',
    card:
      'rounded-[2rem] border-2 border-[#2D3436]/5 bg-white transition duration-300',
  },
} as const
