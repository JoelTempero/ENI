import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: 'white' | 'light' | 'dark' | 'gradient'
}

const backgroundClasses = {
  white: 'bg-white',
  light: 'bg-surface-100',
  dark: 'bg-slate-900 text-white',
  gradient: 'bg-gradient-to-br from-surface-100 via-surface-50 to-white',
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  background = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${backgroundClasses[background]} ${className}`}
    >
      <div className={`container-custom ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}
