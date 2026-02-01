import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Cog, ArrowLeft } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import { capabilities } from '../data/capabilities'

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>()
  const capability = capabilities.find((c) => c.slug === slug)

  if (!capability) {
    return <Navigate to="/capabilities" replace />
  }

  const otherCapabilities = capabilities.filter((c) => c.slug !== slug)

  return (
    <>
      <Helmet>
        <title>{capability.title} | ENI Manufacturing</title>
        <meta name="description" content={capability.description} />
      </Helmet>

      <PageHero
        subtitle="Capabilities"
        title={capability.title}
        description={capability.description}
      />

      {/* Main Content */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <AnimatedElement>
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Capabilities
              </Link>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h2 className="text-display-sm text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {capability.fullDescription}
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {capability.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          </div>

          <div>
            <AnimatedElement direction="right">
              <div className="rounded-2xl overflow-hidden shadow-soft-lg mb-8">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </AnimatedElement>

            {capability.equipment && capability.equipment.length > 0 && (
              <AnimatedElement delay={0.3}>
                <div className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                      <Cog className="w-5 h-5 text-brand-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Equipment & Technology</h3>
                  </div>
                  <ul className="space-y-2">
                    {capability.equipment.map((item, index) => (
                      <li key={index} className="text-slate-600 text-sm pl-4 border-l-2 border-brand-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>
            )}
          </div>
        </div>
      </Section>

      {/* Other Capabilities */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Explore More</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Other Capabilities
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCapabilities.slice(0, 6).map((cap, index) => (
            <AnimatedElement key={cap.id} delay={index * 0.05}>
              <Link to={`/capabilities/${cap.slug}`} className="card p-6 h-full block group hover:shadow-soft-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-500 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{cap.description}</p>
                <span className="inline-flex items-center gap-2 text-brand-500 text-sm font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="text-display-md text-white mb-4">
              Ready to Get Started?
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our {capability.title.toLowerCase()} capabilities can help with your project.
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
