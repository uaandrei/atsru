type SymbolIconProps = {
  name: string
  className?: string
}

export function SymbolIcon({ name, className = '' }: SymbolIconProps) {
  return (
    <span
      className={['material-symbols-outlined leading-none', className].join(' ')}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
