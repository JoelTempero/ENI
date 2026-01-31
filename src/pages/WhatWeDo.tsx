import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, MessageSquare, Lightbulb, Users, Wrench } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import { services } from '../data/services'
import { capabilities } from '../data/capabilities'

const approach = [
  {
    icon: MessageSquare,
    title: 'Engage',
    description: 'Engaging with our clients is fundamental to our business. We take the time to understand the true needs and requirements of our customers from the outset.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Our team, comprising engineers, metalwork specialists, and project managers, embarks on a journey of exploration and innovation.',
  },
  {
    icon: Users,
    title: 'Collaborate',
    description: 'Collaboration is at the heart of what we do. We work closely with our clients to conceptualise, address pain points, and set clear expectations together.',
  },
  {
    icon: Wrench,
    title: 'Craft',
    description: 'We craft tailored manufacturing strategies to bring our clients\' projects to life. From component fabrication to assembly and logistics, we ensure every aspect of production is optimised.',
  },
]

export default function WhatWeDo() {
  return (
    <>
      <Helmet>
        <title>What We Do | ENI Engineering</title>
        <meta name="description" content="At ENI Manufacturing, we transform ideas into exceptional, high-performance solutions that drive industries forward. 30+ years of expertise in engineering, fabrication, and manufacturing." />
      </Helmet>

      <PageHero
        subtitle="What We Do"
        title="Our Capabilities"
        description="At ENI Manufacturing, we transform ideas into exceptional, high-performance solutions that drive industries forward. With over 30 years of expertise in engineering, fabrication, and manufacturing, we specialise in creating custom metalwork, electrical infrastructure, facades, shelters, and bespoke projects."
      />

      {/* Our Approach */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Our Approach</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              How We Work
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approach.map((item, index) => (
            <AnimatedElement key={item.title} delay={index * 0.1}>
              <div className="card p-6 h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-500 flex items-center justify-center text-white mx-auto mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Service Areas */}
      <Section>
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Service Areas</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Our Business Divisions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four specialized divisions serving diverse industries with tailored solutions.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={service.id} delay={index * 0.1}>
              <Link to={`/what-we-do/${service.slug}`} className="group">
                <div className="card-hover flex flex-col md:flex-row h-full overflow-hidden">
                  <div className="relative md:w-2/5 h-48 md:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-transparent to-transparent" />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-center">
                    <span className="text-xs uppercase tracking-wider text-brand-500 mb-2">
                      {service.tagline}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-brand-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-brand-500 text-sm font-medium">
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

      {/* Capabilities Overview */}
      <Section background="gradient">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Capabilities</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              End-to-End Manufacturing
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From design to delivery, we provide comprehensive manufacturing solutions.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.slice(0, 8).map((capability, index) => (
            <AnimatedElement key={capability.id} delay={index * 0.05}>
              <div className="card p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-900">{capability.title}</h4>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.3}>
          <div className="text-center mt-8">
            <Link to="/capabilities" className="btn-primary">
              View All Capabilities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedElement>
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
