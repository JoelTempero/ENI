import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Zap } from 'lucide-react'
import AnimatedElement from '../../components/ui/AnimatedElement'
import Section from '../../components/ui/Section'
import PageHero from '../../components/ui/PageHero'

const productCategories = [
  {
    title: 'Cabinets and Enclosures',
    items: ['DC Range', 'N-CAB Range', 'IP-class cabinets in various materials and sizes'],
  },
  {
    title: 'LV Link and Pillar Boxes',
    items: ['DB Range', 'Pillars (single service to multiservice disconnect enclosures)'],
  },
  {
    title: 'Large Kiosks and Enclosures',
    items: ['Outdoor electrical asset protection solutions'],
  },
  {
    title: 'LV Panels',
    items: ['Standard and custom pad/wall-mount applications'],
  },
  {
    title: 'IP Rated Cabinets',
    items: ['Various IP ratings for different environments'],
  },
  {
    title: 'Temporary Power Enclosures',
    items: ['Portable power solutions'],
  },
  {
    title: 'Animal Protection',
    items: ['Falcon Guard', 'Possum Guard'],
  },
  {
    title: 'Overhead Fittings & Accessories',
    items: ['Offset Shackle Strap', 'Pole Saddle Brackets', 'Pole Step'],
  },
  {
    title: 'Cross Arms & Bracing',
    items: ['Galvanised Cross Arms (2100mm-4800mm)', 'Angled Cross Arm Brace', 'Flat Cross Arm Brace'],
  },
  {
    title: 'Fuse Switchgear',
    items: ['OEZ PNA fuse links (sizes 000-4a)', 'Solid Links', 'Switchgear/Disconnects'],
  },
]

export default function PowerUtilities() {
  return (
    <>
      <Helmet>
        <title>ENI Energy | Power Utilities | ENI Engineering</title>
        <meta name="description" content="ENI Energy powers New Zealand's infrastructure with durable, high-performance solutions for low and medium voltage networks." />
      </Helmet>

      <PageHero
        subtitle="Power Utilities"
        title="ENI Energy"
        description="ENI Energy powers New Zealand's infrastructure with durable, high-performance solutions for low and medium voltage networks."
      />

      {/* Overview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedElement>
              <h2 className="text-display-md text-slate-900 mb-6">
                Adaptable, Future-Ready Solutions
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The company supplies adaptable, future-ready solutions that enhance network reliability, safety, and efficiency for LV pillars and enclosures to IP-rated cabinets, overhead fittings, and animal protection solutions.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-slate-600 leading-relaxed">
                ENI provides a wide range of distribution products and accessories, approved for use across various networks nationwide. The company emphasizes in-house capabilities spanning innovative design, custom metal fabrication, powder coating, and plastic moulding.
              </p>
            </AnimatedElement>
          </div>

          <AnimatedElement direction="right">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://www.enieng.co.nz/assets/energy/eni-combiner-box-icon.png"
                alt="ENI Energy products"
                className="w-full aspect-[4/3] object-cover bg-surface-100"
              />
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Products */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Products</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions for electrical infrastructure across New Zealand.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <AnimatedElement key={category.title} delay={index * 0.05}>
              <div className="card p-6 h-full">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Zap className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              Power Your Infrastructure
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your power utility needs.
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
