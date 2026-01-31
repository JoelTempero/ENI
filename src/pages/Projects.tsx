import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import { projects } from '../data/projects'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'manufacturing', label: 'ENI Manufacturing' },
  { id: 'facades', label: 'ENI Facades' },
  { id: 'shelters', label: 'ENI Shelters' },
  { id: 'energy', label: 'ENI Energy' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Our Projects | ENI Engineering</title>
        <meta name="description" content="Explore our portfolio of projects including facades, shelters, outdoor infrastructure, and manufacturing work across New Zealand." />
      </Helmet>

      <PageHero
        subtitle="Our Work"
        title="Our Projects"
        description="Explore our portfolio of projects showcasing our expertise in facades, shelters, outdoor infrastructure, and manufacturing across New Zealand."
      >
        <Link to="/contact-us" className="btn-primary">
          Have a project in mind?
          <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      {/* Filters */}
      <Section className="py-8 md:py-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-brand-500 text-white'
                  : 'bg-surface-100 text-slate-600 hover:bg-surface-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedElement key={project.id} delay={index * 0.05}>
              <Link to={`/our-projects/${project.slug}`} className="group block h-full">
                <div className="card-hover h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="tag text-xs mb-2 inline-block bg-white/20 text-white border-white/30">
                        {project.year}
                      </span>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.location}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 3).map((service) => (
                        <span key={service} className="tag text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found in this category.</p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="text-display-md text-white mb-4">
              Have a project in mind?
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              We have the people, innovation and expertise to bring your vision to life.
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
