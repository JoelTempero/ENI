import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Ruler, Scissors, Layers, Flame, Paintbrush, Wrench, Truck, CheckCircle, LucideIcon } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import { capabilities, certifications } from '../data/capabilities'

const iconMap: Record<string, LucideIcon> = {
  Ruler,
  Scissors,
  Layers,
  Flame,
  Paintbrush,
  Wrench,
  Truck,
}

export default function Capabilities() {
  return (
    <>
      <Helmet>
        <title>Capabilities | ENI Manufacturing</title>
        <meta name="description" content="We are New Zealand's trusted partner in metal manufacturing, delivering end-to-end solutions from design to delivery." />
      </Helmet>

      <PageHero
        subtitle="Capabilities"
        title="Our Capabilities"
        description="We are New Zealand's trusted partner in metal manufacturing, delivering end-to-end solutions from design to delivery."
      />

      {/* Capabilities Grid */}
      <Section>
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">What We Offer</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Seven Core Capabilities
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = iconMap[capability.icon] || Wrench
            return (
              <AnimatedElement key={capability.id} delay={index * 0.1}>
                <Link to={`/capabilities/${capability.slug}`} className="card p-8 h-full group hover:shadow-soft-lg transition-all duration-300 block">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-brand-500 transition-colors">{capability.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{capability.description}</p>
                  <span className="inline-flex items-center gap-2 text-brand-500 text-sm font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedElement>
            )
          })}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Quality Assured</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Certifications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our certifications demonstrate our commitment to quality, safety, and environmental responsibility.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedElement key={cert.name} delay={index * 0.1}>
              <div className="card p-6 text-center h-full hover:shadow-soft-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-slate-600">{cert.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="text-display-md text-white mb-4">
              Ready to Start Your Project?
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              We have the capabilities and expertise to bring your vision to life.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <Link to="/contact-us" className="btn-primary">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
