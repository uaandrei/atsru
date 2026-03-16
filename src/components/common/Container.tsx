import type { PropsWithChildren } from 'react'
import { siteTheme } from '../../theme/siteTheme'

type ContainerProps = PropsWithChildren<{
  className?: string
}>

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={[siteTheme.classes.container, className].join(' ').trim()}>
      {children}
    </div>
  )
}
