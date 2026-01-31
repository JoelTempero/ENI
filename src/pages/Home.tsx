import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Award, Users, Calendar, Factory } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import { services } from '../data/services'
import { projects } from '../data/projects'

const stats = [
  { number: '30+', label: 'Years of Excellence', icon: Calendar },
  { number: '100+', label: 'Projects Delivered', icon: Factory },
  { number: '50+', label: 'Team Members', icon: Users },
  { number: '4', label: 'Certifications', icon: Award },
]

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <Helmet>
        <title>ENI Engineering | Precision Metal Manufacturing NZ</title>
        <meta name="description" content="ENI Engineering - New Zealand's trusted partner in precision metal fabrication, power utilities, facades, and outdoor infrastructure. 30+ years of excellence." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-100 via-surface-50 to-white" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <div className="container-custom py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <AnimatedElement delay={0}>
                <span className="tag tag-brand mb-6">Your Trusted Partner</span>
              </AnimatedElement>

              <AnimatedElement delay={0.1}>
                <h1 className="text-display-xl text-slate-900 mb-6">
                  ENI{' '}
                  <span className="text-gradient">Manufacturing</span>
                </h1>
              </AnimatedElement>

              <AnimatedElement delay={0.2}>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
                  At ENI Manufacturing, we're not just about cutting-edge technology. For over 30 years, our team has been the driving force behind our focus on innovation and excellence.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact-us" className="btn-primary">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/our-projects" className="btn-outline">
                    View Our Work
                  </Link>
                </div>
              </AnimatedElement>
            </div>

            {/* Image */}
            <AnimatedElement delay={0.2} direction="right">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-soft-xl">
                  <img
                    src="https://www.enieng.co.nz/img/containers/assets/superstop/ss_03.jpg/ea9794e3ff7e0b7cfb95a88b9911a1d0.jpg"
                    alt="ENI Engineering manufacturing facility"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-soft-lg p-6 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-2xl font-display font-bold text-slate-900">30+</p>
                      <p className="text-sm text-slate-600">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section background="light" className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedElement key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-brand-500" />
                </div>
                <p className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-1">
                  {stat.number}
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* What We Do Section */}
      <Section>
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">What We Do</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Comprehensive Metal Manufacturing Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From custom metal fabrication to precision engineering and manufacturing, our expertise is unmatched. We're at the cutting edge of technology, always investing to stay ahead.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedElement key={service.id} delay={index * 0.1}>
              <Link to={`/what-we-do/${service.slug}`} className="group">
                <div className="card-hover h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs uppercase tracking-wider text-white/80">
                        {service.tagline}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-brand-500 text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* About Teaser */}
      <Section background="gradient">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedElement direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src="https://www.enieng.co.nz/img/containers/assets/georgest/george_01.jpg/ff622a08b5cfb0d63d031c080a070ed3.jpg"
                  alt="ENI Engineering team at work"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </AnimatedElement>

          <div>
            <AnimatedElement>
              <span className="tag tag-brand mb-4">Who We Are</span>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h2 className="text-display-md text-slate-900 mb-6">
                We're celebrating 30 years of making metal work
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                More than just a milestone, it's a testament to the people, innovation, and commitment that drive us forward. Inspired by New Zealand's pioneering spirit, we're guided by our values of reliability, quality and sustainability.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <blockquote className="border-l-4 border-brand-500 pl-6 mb-8">
                <p className="text-slate-700 italic mb-2">
                  "He aha te mea nui o te ao? He tangata, he tangata, he tangata"
                </p>
                <p className="text-sm text-slate-500">
                  What is the most important thing in the world? It is people, it is people, it is people
                </p>
              </blockquote>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <Link to="/who-we-are" className="btn-primary">
                Learn About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <AnimatedElement>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="tag tag-brand mb-4">Our Work</span>
              <h2 className="text-display-md text-slate-900">Featured Projects</h2>
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
          {featuredProjects.map((project, index) => (
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
                  <div className="p-4">
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
      </Section>

      {/* CTA Section */}
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
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact-us" className="btn-primary">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/capabilities" className="btn bg-white/10 text-white hover:bg-white/20">
                Our Capabilities
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
