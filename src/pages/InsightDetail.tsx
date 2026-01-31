import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import { getInsightBySlug, insights } from '../data/insights'

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>()
  const insight = slug ? getInsightBySlug(slug) : undefined

  if (!insight) {
    return <Navigate to="/insights" replace />
  }

  // Get related insights (same category, excluding current)
  const relatedInsights = insights
    .filter((i) => i.category === insight.category && i.id !== insight.id)
    .slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{insight.title} | Insights | ENI Engineering</title>
        <meta name="description" content={insight.excerpt} />
      </Helmet>

      {/* Hero */}
      <div className="relative pt-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-surface-100 via-surface-50 to-white">
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <div className="container-custom py-16 md:py-24">
          <AnimatedElement>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-500 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <span className="tag tag-brand mb-4">{insight.category}</span>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <h1 className="text-display-lg text-slate-900 mb-6 max-w-4xl">
              {insight.title}
            </h1>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <p className="text-xl text-slate-600 max-w-3xl">
              {insight.excerpt}
            </p>
          </AnimatedElement>
        </div>
      </div>

      {/* Featured Image */}
      <Section className="py-8 md:py-12">
        <AnimatedElement>
          <div className="rounded-2xl overflow-hidden shadow-soft-lg">
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </AnimatedElement>
      </Section>

      {/* Content */}
      <Section className="pt-0">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement>
            <div className="prose prose-slate prose-lg max-w-none">
              {insight.content.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedElement>

          {/* Contact CTA */}
          <AnimatedElement delay={0.2}>
            <div className="mt-12 p-8 bg-surface-100 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Want to learn more?
              </h3>
              <p className="text-slate-600 mb-6">
                Contact our team to discuss how we can help with your manufacturing needs.
              </p>
              <Link to="/contact-us" className="btn-primary">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Related Articles */}
      {relatedInsights.length > 0 && (
        <Section background="light">
          <AnimatedElement>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="tag tag-brand mb-4">More Insights</span>
                <h2 className="text-display-sm text-slate-900">Related Articles</h2>
              </div>
              <Link
                to="/insights"
                className="flex items-center gap-2 text-brand-500 font-medium hover:gap-3 transition-all"
              >
                View all insights
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-8">
            {relatedInsights.map((relatedInsight, index) => (
              <AnimatedElement key={relatedInsight.id} delay={index * 0.1}>
                <Link
                  to={`/resources/insights/${relatedInsight.slug}`}
                  className="group block"
                >
                  <div className="card-hover flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 h-48 md:h-auto">
                      <img
                        src={relatedInsight.image}
                        alt={relatedInsight.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5 flex flex-col justify-center">
                      <span className="tag tag-brand text-xs mb-3 w-fit">{relatedInsight.category}</span>
                      <h3 className="font-semibold text-slate-900 group-hover:text-brand-500 transition-colors line-clamp-2">
                        {relatedInsight.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
