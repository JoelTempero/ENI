import { ReactNode } from 'react'
import AnimatedElement from './AnimatedElement'

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  background?: 'gradient' | 'light' | 'image'
  imageUrl?: string
}

export default function PageHero({
  title,
  subtitle,
  description,
  children,
  background = 'gradient',
  imageUrl,
}: PageHeroProps) {
  return (
    <div className="relative pt-20">
      {/* Background */}
      {background === 'image' && imageUrl ? (
        <div className="absolute inset-0 -z-10">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900" />
        </div>
      ) : (
        <div className={`absolute inset-0 -z-10 ${
          background === 'gradient'
            ? 'bg-gradient-to-br from-surface-100 via-surface-50 to-white'
            : 'bg-surface-100'
        }`}>
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>
      )}

      <div className="container-custom py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl">
          {subtitle && (
            <AnimatedElement delay={0}>
              <span className="tag tag-brand mb-4">{subtitle}</span>
            </AnimatedElement>
          )}

          <AnimatedElement delay={0.1}>
            <h1 className={`text-display-xl mb-6 text-balance ${
              background === 'image' ? 'text-white' : 'text-slate-900'
            }`}>
              {title}
            </h1>
          </AnimatedElement>

          {description && (
            <AnimatedElement delay={0.2}>
              <p className={`text-lg md:text-xl leading-relaxed max-w-3xl ${
                background === 'image' ? 'text-slate-200' : 'text-slate-600'
              }`}>
                {description}
              </p>
            </AnimatedElement>
          )}

          {children && (
            <AnimatedElement delay={0.3}>
              <div className="mt-8">
                {children}
              </div>
            </AnimatedElement>
          )}
        </div>
      </div>
    </div>
  )
}
