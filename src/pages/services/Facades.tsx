import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Building, Sun, Leaf, Sparkles } from 'lucide-react'
import AnimatedElement from '../../components/ui/AnimatedElement'
import Section from '../../components/ui/Section'
import PageHero from '../../components/ui/PageHero'
import { getProjectsByCategory } from '../../data/projects'

const benefits = [
  {
    icon: Sparkles,
    title: 'Enhanced Aesthetic Appeal',
    description: 'Striking facades that enhance structural integrity and visual impact.',
  },
  {
    icon: Sun,
    title: 'Improved Energy Efficiency',
    description: 'Designs that reduce energy costs and improve building performance.',
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description: 'Sustainable solutions that minimize environmental footprint.',
  },
  {
    icon: Building,
    title: 'Expertise in All Projects',
    description: 'Experience in new builds and refurbishments alike.',
  },
]

export default function Facades() {
  const facadeProjects = getProjectsByCategory('facades')

  return (
    <>
      <Helmet>
        <title>ENI Facades | Architectural Facades | ENI Engineering</title>
        <meta name="description" content="At ENI Facades, we bring together craftsmanship, innovation, and technical expertise to create architectural facades that are as functional as they are striking." />
      </Helmet>

      <PageHero
        subtitle="Architectural Facades"
        title="ENI Facades"
        description="At ENI Facades, we bring together craftsmanship, innovation, and technical expertise to create architectural facades that are as functional as they are striking."
      />

      {/* Overview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedElement>
              <h2 className="text-display-md text-slate-900 mb-6">
                30+ Years of Facade Excellence
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                ENI Facades specializes in bespoke architectural facade manufacturing with 30+ years of experience. Services include residential and commercial building facades, bridge and walkway cladding, exterior and interior cladding solutions, and energy-efficient design solutions.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <Building className="w-5 h-5 text-brand-500 mt-0.5" />
                  <span>Residential and commercial building facades</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Building className="w-5 h-5 text-brand-500 mt-0.5" />
                  <span>Bridge and walkway cladding</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Building className="w-5 h-5 text-brand-500 mt-0.5" />
                  <span>Exterior and interior cladding solutions</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Building className="w-5 h-5 text-brand-500 mt-0.5" />
                  <span>Energy-efficient design solutions</span>
                </li>
              </ul>
            </AnimatedElement>
          </div>

          <AnimatedElement direction="right">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://www.enieng.co.nz/img/containers/assets/riccarton/riccarton_01.jpg/8074eebe157a7751b5cdc2c1cdde3921.jpg"
                alt="ENI Facades project"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Benefits</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Why Choose ENI Facades
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedElement key={benefit.title} delay={index * 0.1}>
              <div className="card p-6 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 mx-auto mb-4">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <AnimatedElement>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="tag tag-brand mb-4">Our Work</span>
              <h2 className="text-display-md text-slate-900">Facade Projects</h2>
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
          {facadeProjects.slice(0, 3).map((project, index) => (
            <AnimatedElement key={project.id} delay={index * 0.1}>
              <Link to={`/our-projects/${project.slug}`} className="group block">
                <div className="card-hover h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-white/80 mb-1">{project.location}</p>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
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
              Transform Your Building
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your architectural facade project.
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
