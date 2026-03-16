import type { Translation } from '../../i18n/types'
import { siteTheme } from '../../theme/siteTheme'
import { Container } from '../common/Container'
import { SymbolIcon } from '../common/SymbolIcon'

type ContactSectionProps = {
  contact: Translation['contact']
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="py-24" id="contact">
      <Container>
        <div className="relative overflow-hidden rounded-[3rem] border-4 border-[#2D3436]/5 bg-[#E8F3F1] p-12 text-center lg:p-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(45,52,54,0.18)_1px,_transparent_1px)] bg-[length:28px_28px] opacity-30"></div>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-10">
            <h2
              className={[
                siteTheme.classes.displayFont,
                'text-5xl font-bold text-[#2D3436] lg:text-7xl',
              ].join(' ')}
            >
              {contact.title}
            </h2>
            <p className="text-xl leading-relaxed text-[#2D3436]/80 lg:text-2xl">
              {contact.description}
            </p>

            <div className="mt-4 flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
              <a
                href={`mailto:${siteTheme.contact.email}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2D3436] px-12 py-6 text-xl font-bold text-white transition duration-300 hover:scale-[1.02] hover:rotate-1 hover:shadow-[0_20px_60px_rgba(45,52,54,0.2)]"
              >
                <SymbolIcon name="send" className="text-2xl" />
                {contact.emailCta}
              </a>
              <a
                href={siteTheme.contact.resumeUrl}
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#2D3436] bg-white px-12 py-6 text-xl font-bold text-[#2D3436] transition duration-300 hover:bg-[#2D3436] hover:text-white"
              >
                {contact.resumeCta}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
