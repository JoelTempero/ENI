import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Mail, Shield, Leaf, Heart, Users } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import { teamMembers } from '../data/team'

const values = [
  {
    icon: Heart,
    title: 'People First',
    description: 'He aha te mea nui o te ao? He tangata, he tangata, he tangata - What is the most important thing in the world? It is people, it is people, it is people.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'He waka eke noa - A canoe which we are all in, with no exception. We emphasize ownership and belonging beyond workplace boundaries.',
  },
  {
    icon: Shield,
    title: 'Health & Safety',
    description: 'People-Led, Not Policy-Led - we emphasize proactive safety leadership and personal responsibility over enforcement.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Toitū Enviromark Gold certified - reducing greenhouse gas emissions, increasing renewable energy usage, and minimizing waste.',
  },
]

export default function WhoWeAre() {
  return (
    <>
      <Helmet>
        <title>Who We Are | ENI Manufacturing</title>
        <meta name="description" content="At ENI Manufacturing, we're driven by a deep sense of purpose: to create a space where innovation and people flourish together. For over 30 years, our story has been about more than just metalwork." />
      </Helmet>

      <PageHero
        subtitle="Who We Are"
        title="Metalwork Experts"
        description="At ENI Manufacturing, we're driven by a deep sense of purpose: to create a space where innovation and people flourish together. For over 30 years, our story has been about more than just metalwork."
      />

      {/* Our Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedElement>
              <span className="tag tag-brand mb-4">Our Story</span>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h2 className="text-display-md text-slate-900 mb-6">
                Founded in 1992
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We're celebrating 30 years of ENI Manufacturing—30 years of making metal work. More than just a milestone, it's a testament to the people, innovation, and commitment that drive us forward.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <p className="text-slate-600 leading-relaxed">
                From custom metal fabrication to precision engineering and manufacturing, our expertise is unmatched. We're at the cutting edge of technology, always investing to stay ahead. Inspired by New Zealand's pioneering spirit, we're guided by our values of reliability, quality and sustainability.
              </p>
            </AnimatedElement>
          </div>

          <AnimatedElement direction="right">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://www.enieng.co.nz/img/containers/assets/margaretmahy/mm_02.jpg/09ff62ba6216858b19c6dbd3ec08b973.jpg"
                alt="ENI Engineering team"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Values */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Our Values</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              What Drives Us
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedElement key={value.title} delay={index * 0.1}>
              <div className="card p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Sustainability */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedElement direction="left">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://www.enieng.co.nz/img/containers/assets/roxburgh/rox_03.jpg/5f682cddd3a5890d1f252da2bee5ecca.jpg"
                alt="Sustainable manufacturing"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </AnimatedElement>

          <div>
            <AnimatedElement>
              <span className="tag tag-brand mb-4">Sustainability</span>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <h2 className="text-display-md text-slate-900 mb-6">
                Care for Tomorrow, Act Today
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We are Toitū Enviromark Gold certified, demonstrating our commitment to environmental responsibility and sustainable practices.
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
                  <span>Increasing renewable energy usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Minimizing waste and protecting waterways</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Environmental stewardship throughout value chain</span>
                </li>
              </ul>
            </AnimatedElement>
          </div>
        </div>
      </Section>

      {/* Our Team */}
      <Section background="light">
        <AnimatedElement>
          <div className="text-center mb-12">
            <span className="tag tag-brand mb-4">Our People</span>
            <h2 className="text-display-md text-slate-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the people driving ENI Manufacturing forward with decades of experience and a passion for excellence.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedElement key={member.id} delay={index * 0.05}>
              <div className="card p-6 text-center h-full">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
                  />
                ) : (
                  <div className="w-40 h-40 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-display font-bold text-brand-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-brand-500 mb-4">{member.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-500 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Careers CTA */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedElement>
            <h2 className="text-display-md text-slate-900 mb-4">
              Join Our Team
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <p className="text-lg text-slate-600 mb-8">
              ENI promotes a supportive, collaborative environment emphasizing skill development, career growth, and relationship-building.
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
