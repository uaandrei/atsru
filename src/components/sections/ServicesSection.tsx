import type { ServiceItem } from '../../i18n/types'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'
import { SymbolIcon } from '../common/SymbolIcon'
import { siteTheme } from '../../theme/siteTheme'

type ServicesSectionProps = {
  eyebrow: string
  title: string
  description: string
  items: ServiceItem[]
}

export function ServicesSection({
  eyebrow,
  title,
  description,
  items,
}: ServicesSectionProps) {
  return (
    <section className="py-24" id="skills">
      <Container>
        <div className="mb-20">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className={[
                siteTheme.classes.card,
                'hover:cursor-pointer group flex flex-col gap-8 p-10 hover:-translate-y-2 hover:border-[#2D3436]',
              ].join(' ')}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F3F1] text-[#2D3436] transition duration-300 group-hover:bg-[#2D3436] group-hover:text-white">
                <SymbolIcon name={item.icon} className="text-4xl" />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-[#2D3436]">{item.title}</h3>
                <p className="text-base leading-relaxed text-[#2D3436]/70">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
