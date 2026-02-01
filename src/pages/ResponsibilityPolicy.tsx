import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Leaf, Shield, Users, Heart, Globe, Recycle } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'

const commitments = [
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    description: 'Reducing greenhouse gas emissions and increasing energy from sustainable sources through solar power investments.',
  },
  {
    icon: Recycle,
    title: 'Waste Minimisation',
    description: 'Minimizing waste and protecting waterways through responsible manufacturing practices.',
  },
  {
    icon: Globe,
    title: 'Sustainable Value Chain',
    description: 'Building a value chain that prioritizes environmental stewardship at every stage.',
  },
  {
    icon: Shield,
    title: 'Health & Safety',
    description: 'A people-led approach ensuring everyone goes home healthy and safe every day.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Supporting our local community and fostering meaningful relationships beyond the workplace.',
  },
  {
    icon: Heart,
    title: 'People First',
    description: 'Guided by the principle that people are the most important thing in everything we do.',
  },
]

export default function ResponsibilityPolicy() {
  return (
    <>
      <Helmet>
        <title>Our Responsibility Policy | ENI Manufacturing</title>
        <meta name="description" content="ENI Manufacturing's commitment to environmental sustainability, health & safety, and community responsibility. Care for Tomorrow, Act Today." />
      </Helmet>

      <PageHero
        subtitle="Our Commitment"
        title="Our Responsibility Policy"
        description="Care for Tomorrow, Act Today. Our commitment to balancing business needs with long-term environmental and social stewardship."
      />

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At ENI Manufacturing, we believe that responsible business practices are essential to our long-term success. Our responsibility policy guides everything we do, from how we manufacture products to how we treat our people and environment.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-full">
              <Leaf className="w-5 h-5" />
              <span className="font-medium">Toitū Enviromark Gold Certified</span>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Our Commitments */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Our Commitments</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              What We Stand For
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <AnimatedElement key={commitment.title} delay={index * 0.1}>
              <div className="card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 mb-6">
                  <commitment.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{commitment.title}</h3>
                <p className="text-slate-600 leading-relaxed">{commitment.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Environmental Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedElement>
              <span className="tag tag-brand mb-4">Environment</span>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h2 className="text-display-md text-slate-900 mb-6">
                Environmental Responsibility
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our Toitū Enviromark Gold certification demonstrates our commitment to environmental responsibility and sustainable practices. We continuously work to reduce our environmental footprint.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Reducing greenhouse gas emissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Increasing renewable energy usage through solar power</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Minimizing waste and protecting waterways</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Environmental stewardship throughout our value chain</span>
                </li>
              </ul>
            </AnimatedElement>
          </div>

          <AnimatedElement direction="right">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://www.enieng.co.nz/img/containers/assets/roxburgh/rox_03.jpg/5f682cddd3a5890d1f252da2bee5ecca.jpg"
                alt="Sustainable manufacturing"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Health & Safety Section */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedElement direction="left" className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://www.enieng.co.nz/img/containers/assets/capabilities/210223_eni_063.jpg/1913ee9262173cdae52ff44cdde09cc2.jpg"
                alt="Health and safety at ENI"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </AnimatedElement>

          <div className="order-1 lg:order-2">
            <AnimatedElement>
              <span className="tag tag-brand mb-4">Health & Safety</span>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h2 className="text-display-md text-slate-900 mb-6">
                People-Led Safety
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We take a people-led rather than policy-led approach to workplace safety. Our framework prioritizes proactive safety leadership that empowers every team member.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <div className="bg-brand-50 rounded-xl p-6">
                <p className="text-lg font-medium text-slate-900 mb-2">Our Goal</p>
                <p className="text-slate-600">
                  Everyone goes home healthy and safe, every single day.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement>
            <span className="tag tag-brand mb-4">Our Guiding Principles</span>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <h2 className="text-display-md text-slate-900 mb-8">
              People First, Always
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <blockquote className="text-xl text-slate-700 italic mb-4">
              "He aha te mea nui o te ao? He tangata, he tangata, he tangata"
            </blockquote>
            <p className="text-slate-500 mb-8">
              What is the most important thing in the world? It is people, it is people, it is people.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <blockquote className="text-xl text-slate-700 italic mb-4">
              "He waka eke noa"
            </blockquote>
            <p className="text-slate-500">
              A canoe which we are all in, with no exception. We emphasize ownership and belonging beyond workplace boundaries.
            </p>
          </AnimatedElement>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="text-display-md text-white mb-4">
              Partner With a Responsible Manufacturer
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose ENI Manufacturing for your next project and work with a team committed to sustainability, safety, and excellence.
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
