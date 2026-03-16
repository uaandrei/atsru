import { siteTheme } from '../../theme/siteTheme'
import { Container } from '../common/Container'
import { SymbolIcon } from '../common/SymbolIcon'

type FooterProps = {
  madeWith: string
}

export function Footer({ madeWith }: FooterProps) {
  return (
    <footer className="border-t border-[#2D3436]/10 py-16">
      <Container>
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex items-center gap-3">
            <SymbolIcon
              name="auto_awesome"
              className="text-3xl text-[#2D3436]"
            />
            <span
              className={[
                siteTheme.classes.displayFont,
                'text-2xl font-bold tracking-tight text-[#2D3436]',
              ].join(' ')}
            >
              {siteTheme.brandName}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-base font-bold text-[#2D3436]">
            {siteTheme.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:underline hover:decoration-[#E8F3F1] hover:decoration-4 hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-base font-semibold text-[#2D3436]/40">
            {madeWith} © {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  )
}
