import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`${hover ? 'card-hover' : 'card'} ${className}`}>
      {children}
    </div>
  )
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
  overlay?: boolean
}

export function CardImage({ src, alt, className = '', overlay = false }: CardImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      )}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

interface CardLinkProps {
  to: string
  children: ReactNode
  className?: string
}

export function CardLink({ to, children, className = '' }: CardLinkProps) {
  return (
    <Link
      to={to}
      className={`group block h-full ${className}`}
    >
      {children}
    </Link>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
}

export function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  const content = (
    <div className="card-hover p-6 h-full group">
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      {href && (
        <div className="mt-4 flex items-center gap-2 text-brand-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  )

  if (href) {
    return <Link to={href}>{content}</Link>
  }

  return content
}
