import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import { getProjectBySlug, projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/our-projects" replace />
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{project.title} | ENI Engineering</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Hero Image */}
      <div className="relative pt-20">
        <div className="h-[50vh] md:h-[60vh] relative">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
            <AnimatedElement>
              <Link
                to="/our-projects"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <h1 className="text-display-lg text-white mb-4">{project.title}</h1>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div className="flex flex-wrap gap-4 text-white/80">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
                <span className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {project.client}
                </span>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* Content */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedElement>
              <h2 className="text-display-sm text-slate-900 mb-6">Project Overview</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </AnimatedElement>

            {/* Image Gallery */}
            {project.images.length > 1 && (
              <AnimatedElement delay={0.2}>
                <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-6">Project Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <AnimatedElement direction="right">
              <div className="card p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Client</p>
                    <p className="font-medium text-slate-900">{project.client}</p>
                  </div>

                  {project.partners && project.partners.length > 0 && (
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Partners</p>
                      <p className="font-medium text-slate-900">{project.partners.join(', ')}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-slate-500 mb-2">Services Provided</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span key={service} className="tag text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 mb-2">Deliverables</p>
                    <ul className="space-y-1">
                      {project.deliverables.map((deliverable, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-surface-200">
                  <Link to="/contact-us" className="btn-primary w-full justify-center">
                    Start Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section background="light">
          <AnimatedElement>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="tag tag-brand mb-4">More Projects</span>
                <h2 className="text-display-sm text-slate-900">Related Projects</h2>
              </div>
              <Link
                to="/our-projects"
                className="flex items-center gap-2 text-brand-500 font-medium hover:gap-3 transition-all"
              >
                View all projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject, index) => (
              <AnimatedElement key={relatedProject.id} delay={index * 0.1}>
                <Link to={`/our-projects/${relatedProject.slug}`} className="group block">
                  <div className="card-hover h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.images[0]}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-semibold text-white">{relatedProject.title}</h3>
                      </div>
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
