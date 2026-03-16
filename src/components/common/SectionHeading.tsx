import { siteTheme } from '../../theme/siteTheme'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : ''

  return (
    <div className={['flex max-w-2xl flex-col gap-6', alignment].join(' ').trim()}>
      <p className={siteTheme.classes.sectionEyebrow}>{eyebrow}</p>
      <h2
        className={[
          siteTheme.classes.displayFont,
          'text-5xl leading-tight font-bold text-[#2D3436] md:text-6xl',
        ].join(' ')}
      >
        {title}
      </h2>
      <p className="text-xl leading-relaxed text-[#2D3436]/70">{description}</p>
    </div>
  )
}
