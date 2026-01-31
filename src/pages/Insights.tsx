import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import { insights } from '../data/insights'

export default function Insights() {
  return (
    <>
      <Helmet>
        <title>Insights | ENI Engineering</title>
        <meta name="description" content="Explore insights and articles from ENI Engineering about contract manufacturing, energy sector, facades, and shelters." />
      </Helmet>

      <PageHero
        subtitle="Resources"
        title="Insights"
        description="Stay informed with our latest articles on contract manufacturing, energy solutions, facades, and outdoor infrastructure."
      />

      {/* Articles Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <AnimatedElement key={insight.id} delay={index * 0.1}>
              <Link
                to={`/resources/insights/${insight.slug}`}
                className="group block h-full"
              >
                <div className="card-hover h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="tag tag-brand">{insight.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-500 transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-brand-500 text-sm font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="text-display-md text-slate-900 mb-4">
              Have questions about manufacturing?
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you navigate your manufacturing needs.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <Link to="/contact-us" className="btn-primary">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
