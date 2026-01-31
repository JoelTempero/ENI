import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle } from 'lucide-react'
import AnimatedElement from '../../components/ui/AnimatedElement'
import Section from '../../components/ui/Section'
import PageHero from '../../components/ui/PageHero'
import { capabilities, certifications } from '../../data/capabilities'

export default function ContractManufacturing() {
  return (
    <>
      <Helmet>
        <title>ENI Manufacturing | Contract Manufacturing | ENI Engineering</title>
        <meta name="description" content="At ENI Manufacturing, we harness over three decades of industry expertise to deliver high-quality, innovative metal fabrication solutions." />
      </Helmet>

      <PageHero
        subtitle="Contract Manufacturing"
        title="ENI Manufacturing"
        description="At ENI Manufacturing, we harness over three decades of industry expertise to deliver high-quality, innovative metal fabrication solutions."
      />

      {/* Overview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedElement>
              <h2 className="text-display-md text-slate-900 mb-6">
                Blending Technology with Human-Centered Focus
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The company emphasizes blending advanced technology with human-centered focus to meet quality, efficiency, and sustainability standards across diverse sectors.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-slate-600 leading-relaxed">
                From custom metal fabrication to precision engineering and manufacturing, our expertise is unmatched. We're at the cutting edge of technology, always investing to stay ahead. Inspired by New Zealand's pioneering spirit, we're guided by our values of reliability, quality and sustainability.
              </p>
            </AnimatedElement>
          </div>

          <AnimatedElement direction="right">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://www.enieng.co.nz/assets/contract-manufacturing-trumpf-machine.jpg"
                alt="ENI Manufacturing facility"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Capabilities */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Our Capabilities</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              End-to-End Manufacturing Services
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <AnimatedElement key={capability.id} delay={index * 0.1}>
              <div className="card p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 mb-4">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{capability.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{capability.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Quality Assured</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Our Certifications
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedElement key={cert.name} delay={index * 0.1}>
              <div className="card p-6 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-500" />
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
              Contact us today to discuss your manufacturing needs.
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
