import type { ProjectItem } from '../../i18n/types'
import { Container } from '../common/Container'
import { SectionHeading } from '../common/SectionHeading'
import { siteTheme } from '../../theme/siteTheme'

type ProjectsSectionProps = {
  eyebrow: string
  title: string
  description: string
  items: ProjectItem[]
}

export function ProjectsSection({
  eyebrow,
  title,
  description,
  items,
}: ProjectsSectionProps) {
  return (
    <section className="py-24" id="projects">
      <Container>
        <div className="mb-20">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={[
                siteTheme.classes.card,
                'flex h-full flex-col overflow-hidden p-8 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,52,54,0.12)]',
              ].join(' ')}
            >
              <div
                className={[
                  'mb-8 aspect-4/3 rounded-4xl',
                  index === 0
                    ? 'bg-[linear-gradient(135deg,#E8F3F1,#FCF8F3)]'
                    : index === 1
                      ? 'bg-[linear-gradient(135deg,#FCF8F3,#F4EBDD)]'
                      : 'bg-[linear-gradient(135deg,#F5F0EA,#E8F3F1)]',
                ].join(' ')}
              />

              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#E8F3F1] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#2D3436]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <h3
                    className={[
                      siteTheme.classes.displayFont,
                      'text-4xl font-bold leading-none text-[#2D3436]',
                    ].join(' ')}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#2D3436]/70">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-bold text-[#2D3436] transition hover:translate-x-1"
                  >
                    {item.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
