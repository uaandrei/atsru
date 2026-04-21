import type { Translation } from '../../i18n/types'
import { siteTheme } from '../../theme/siteTheme'
import { Container } from '../common/Container'

type HeroSectionProps = {
  hero: Translation['hero']
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32" id="home">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className={siteTheme.classes.pill}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              {hero.badge}
            </div>

            <h1
              className={[
                siteTheme.classes.displayFont,
                'text-6xl leading-none font-bold text-[#2D3436] lg:text-8xl',
              ].join(' ')}
            >
              {hero.titleLead}{' '}
              <span className="underline decoration-[#2D3436]/20">
                {hero.titleHighlight}
              </span>{' '}
              {hero.titleTail}
            </h1>

            <p className="max-w-xl text-xl leading-relaxed text-[#2D3436]/80 lg:text-2xl">
              {hero.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-6">
              <a href="#projects" className={siteTheme.classes.primaryButton}>
                {hero.primaryCta}
              </a>
              <a href="#skills" className={siteTheme.classes.secondaryButton}>
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rotate-2 overflow-hidden rounded-[3rem] border-2 border-[#2D3436]/5 bg-[#E8F3F1] shadow-[0_24px_80px_rgba(45,52,54,0.12)]">
              <img
                src={siteTheme.heroImage.src}
                alt={hero.imageAlt}
                className="h-full w-full object-cover opacity-80 mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#E8F3F1] opacity-50 blur-3xl"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E8F3F1] opacity-50 blur-3xl"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
