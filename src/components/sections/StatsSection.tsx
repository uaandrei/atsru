import type { StatItem } from '../../i18n/types'
import { Container } from '../common/Container'
import { siteTheme } from '../../theme/siteTheme'

type StatsSectionProps = {
  stats: StatItem[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-[#E8F3F1]/30 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className={[
                'flex flex-col items-center p-6 text-center',
                index > 0 ? 'border-l border-[#2D3436]/5' : '',
              ].join(' ')}
            >
              <span
                className={[
                  siteTheme.classes.displayFont,
                  'mb-2 text-5xl font-bold text-[#2D3436]',
                ].join(' ')}
              >
                {stat.value}
              </span>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#2D3436]/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
