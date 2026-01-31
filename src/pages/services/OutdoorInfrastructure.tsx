import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Home, Sun, Users, Zap } from 'lucide-react'
import AnimatedElement from '../../components/ui/AnimatedElement'
import Section from '../../components/ui/Section'
import PageHero from '../../components/ui/PageHero'
import { getProjectsByCategory } from '../../data/projects'

const offerings = [
  {
    icon: Home,
    title: 'Shelters & Seating',
    description: 'E-Shelter and I-Shelter modular ranges with customizable designs. Materials include steel, aluminium, timber, and glass with enhancements like solar, lighting, digital displays, and advertising.',
  },
  {
    icon: Sun,
    title: 'Covered Walkways & Canopies',
    description: 'Like our shelters, our covered walkways protect people from the elements, providing safety and shelter. Features include solar lighting options, perforations and custom graphics.',
  },
  {
    icon: Users,
    title: 'Urban Furniture',
    description: 'Durable seating solutions with integrated tables, planters, and lighting for parks and commercial spaces.',
  },
  {
    icon: Zap,
    title: 'Hubs of the Future',
    description: 'We envision public spaces as hubs, where people come together and communities thrive. Features include EV charging stations and smart infrastructure.',
  },
]

export default function OutdoorInfrastructure() {
  const shelterProjects = getProjectsByCategory('shelters')

  return (
    <>
      <Helmet>
        <title>ENI Shelters | Outdoor Infrastructure | ENI Engineering</title>
        <meta name="description" content="ENI Shelters focuses on creating safe, sustainable, and accessible shelters and covered walkways with 30 years of experience in designing and building outdoor infrastructure." />
      </Helmet>

      <PageHero
        subtitle="Outdoor Infrastructure"
        title="ENI Shelters"
        description="At ENI Manufacturing, we believe in blending innovation, quality, and a human-centred approach across all our projects. ENI Shelters continues this tradition, focusing on creating safe, sustainable, and accessible shelters and covered walkways."
      />

      {/* Overview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedElement>
              <h2 className="text-display-md text-slate-900 mb-6">
                30 Years of Outdoor Infrastructure
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With 30 years of experience in designing and building outdoor infrastructure, street furniture and fixtures, we are dedicated to shaping the future of public spaces.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <div className="space-y-4">
                <div className="card p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Safety & Accessibility</h4>
                  <p className="text-sm text-slate-600">
                    Creating safe spaces is, and always will be, our priority. We ensure that our seating and shelters in public spaces provide optimum shelter and serve all abilities.
                  </p>
                </div>
                <div className="card p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Environmental Commitment</h4>
                  <p className="text-sm text-slate-600">
                    We focus on minimizing environmental impact by seamlessly integrating with surroundings and incorporating features like solar panels and EV charging stations.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement direction="right">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://www.enieng.co.nz/img/containers/assets/superstop/ss_04.jpg/0f0b7d1a8ed0c9e07282d4689a1c800d.jpg"
                alt="ENI Shelters project"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Products */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Our Offerings</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Outdoor Solutions
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((offering, index) => (
            <AnimatedElement key={offering.title} delay={index * 0.1}>
              <div className="card p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 mb-4">
                  <offering.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{offering.title}</h3>
                <p className="text-slate-600 leading-relaxed">{offering.description}</p>
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
              <h2 className="text-display-md text-slate-900">Shelter Projects</h2>
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
          {shelterProjects.slice(0, 3).map((project, index) => (
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
              Shape Public Spaces
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your outdoor infrastructure project.
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
