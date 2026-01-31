import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Menu, X, ArrowRight, ArrowUpRight, ChevronDown, Zap, Shield, Cog,
  Building2, Factory, Lightbulb, Award, Users, Clock, MapPin, Phone,
  Mail, Linkedin, Play, Pause, Volume2, VolumeX, Check, Star, Sparkles
} from 'lucide-react'

// ============================================================================
// NAVIGATION
// ============================================================================
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-void-950/80 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="relative z-50 flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center group-hover:shadow-glow-sm group-hover:shadow-electric-500/50 transition-shadow duration-300">
                <span className="font-display font-bold text-lg lg:text-xl text-white">E</span>
              </div>
              <span className="font-display font-semibold text-xl hidden sm:block">ENI</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-5 py-2 text-sm text-white/70 hover:text-white font-medium rounded-full hover:bg-white/5 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact" className="btn-primary text-sm flex items-center gap-2 group">
                <span className="relative z-10">Get a Quote</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            <div className="absolute inset-0 bg-void-950/98 backdrop-blur-xl" />
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-3xl font-display font-medium hover:text-electric-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-8"
              >
                Get a Quote
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ============================================================================
// HERO SECTION
// ============================================================================
function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const stats = [
    { value: '30+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '99%', label: 'Client Satisfaction' },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-950/90 to-void-950" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Animated gradient orbs */}
        <motion.div
          style={{ y }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-electric-500/20 rounded-full blur-[128px] animate-pulse-slow"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-flame-500/10 rounded-full blur-[128px] animate-pulse-slow"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="tag tag-electric">
              <Sparkles className="w-3 h-3" />
              New Zealand's Premier Fabricators
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-display-xl font-display font-bold text-balance"
          >
            Precision Metal
            <span className="block gradient-text">Engineering</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-xl lg:text-2xl text-white/60 max-w-2xl leading-relaxed"
          >
            From concept to completion, we transform ideas into exceptional metal structures
            that define New Zealand's skyline and power its infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a href="#services" className="btn-primary flex items-center gap-2 group">
              <span className="relative z-10">Explore Services</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="btn-secondary flex items-center gap-2">
              View Our Work
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-8 lg:gap-16">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-5xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm lg:text-base text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============================================================================
// SERVICES SECTION
// ============================================================================
function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const services = [
    {
      icon: Zap,
      title: 'Power Utilities',
      description: 'High-voltage infrastructure, transformer enclosures, and utility poles engineered for reliability and safety.',
      features: ['Transformer Enclosures', 'Utility Structures', 'Switchgear Housing'],
      color: 'electric',
    },
    {
      icon: Building2,
      title: 'Architectural Facades',
      description: 'Stunning building exteriors that combine aesthetic excellence with structural integrity.',
      features: ['Custom Cladding', 'Feature Screens', 'Structural Glazing'],
      color: 'flame',
    },
    {
      icon: Factory,
      title: 'Industrial Fabrication',
      description: 'Heavy-duty manufacturing solutions for industrial applications across all sectors.',
      features: ['Custom Machinery', 'Process Equipment', 'Storage Solutions'],
      color: 'mint',
    },
    {
      icon: Cog,
      title: 'CNC Precision',
      description: 'State-of-the-art CNC machining delivering micron-level accuracy for complex components.',
      features: ['Laser Cutting', '5-Axis Machining', 'Wire EDM'],
      color: 'electric',
    },
  ]

  const colorMap = {
    electric: {
      bg: 'bg-electric-500/10',
      border: 'border-electric-500/30',
      text: 'text-electric-400',
      glow: 'group-hover:shadow-electric-500/20',
    },
    flame: {
      bg: 'bg-flame-500/10',
      border: 'border-flame-500/30',
      text: 'text-flame-400',
      glow: 'group-hover:shadow-flame-500/20',
    },
    mint: {
      bg: 'bg-mint-500/10',
      border: 'border-mint-500/30',
      text: 'text-mint-400',
      glow: 'group-hover:shadow-mint-500/20',
    },
  }

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-900 to-void-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="tag">Our Expertise</span>
          <h2 className="mt-6 text-display-md font-display font-bold">
            Engineering Excellence,{' '}
            <span className="gradient-text">Delivered</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Four decades of innovation have shaped our comprehensive suite of metal fabrication services.
            From concept to installation, we deliver precision at every stage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color]
            const Icon = service.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`group relative p-8 lg:p-10 rounded-3xl glass card-hover ${colors.glow} hover:shadow-glow-md`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-display font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                      <Check className={`w-4 h-4 ${colors.text}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${colors.text} group-hover:gap-3 transition-all`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// MARQUEE SECTION
// ============================================================================
function Marquee() {
  const words = ['PRECISION', 'INNOVATION', 'QUALITY', 'EXCELLENCE', 'RELIABILITY', 'CRAFTSMANSHIP']

  return (
    <section className="py-16 overflow-hidden border-y border-white/5">
      <div className="flex">
        <div className="animate-marquee flex gap-16 items-center">
          {[...words, ...words].map((word, i) => (
            <span key={i} className="flex items-center gap-16">
              <span className="text-6xl lg:text-8xl font-display font-bold text-white/[0.03] whitespace-nowrap">
                {word}
              </span>
              <Star className="w-8 h-8 text-electric-500/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROJECTS SECTION
// ============================================================================
function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      title: 'Christchurch Airport Terminal',
      category: 'Architectural',
      description: 'Custom facade panels and structural steelwork for the terminal expansion.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      stats: { area: '12,000m²', duration: '18 months' },
    },
    {
      title: 'Transpower Grid Upgrade',
      category: 'Power Utilities',
      description: 'High-voltage equipment enclosures and support structures nationwide.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      stats: { units: '340+', coverage: 'National' },
    },
    {
      title: 'Industrial Processing Plant',
      category: 'Industrial',
      description: 'Complete fabrication of processing equipment and structural framework.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      stats: { tonnage: '850t', components: '2,400+' },
    },
  ]

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-void-950" />
      <div className="absolute inset-0 animated-gradient opacity-30" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="tag">Featured Work</span>
            <h2 className="mt-6 text-display-md font-display font-bold">
              Projects That{' '}
              <span className="gradient-text-warm">Define Us</span>
            </h2>
          </div>
          <a href="#" className="btn-secondary inline-flex items-center gap-2 self-start">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-16 space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-8 rounded-3xl glass card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 tag">{project.category}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-display font-semibold group-hover:text-electric-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="mt-8 flex gap-8">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl font-display font-bold text-electric-400">
                        {value}
                      </div>
                      <div className="text-sm text-white/40 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-electric-400 transition-colors group-hover:gap-3"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// ABOUT / WHY US SECTION
// ============================================================================
function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const features = [
    {
      icon: Award,
      title: 'ISO Certified',
      description: 'Quality management systems certified to ISO 9001:2015 standards.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '85+ skilled professionals with decades of combined experience.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '98% of projects delivered on or ahead of schedule.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Zero harm workplace with comprehensive safety protocols.',
    },
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-950 to-void-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="tag">Why ENI</span>
            <h2 className="mt-6 text-display-md font-display font-bold">
              Built on{' '}
              <span className="gradient-text">Trust & Precision</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Since 1994, ENI Manufacturing has been at the forefront of New Zealand's
              metal fabrication industry. Our commitment to excellence, innovation, and
              customer satisfaction has made us the trusted partner for projects of every scale.
            </p>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              From our state-of-the-art facility in Christchurch, we serve clients nationwide
              with solutions that exceed expectations and stand the test of time.
            </p>

            <a href="#contact" className="mt-10 btn-primary inline-flex items-center gap-2 group">
              <span className="relative z-10">Partner With Us</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-6 rounded-2xl glass group hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-electric-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CTA SECTION
// ============================================================================
function CTA() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-600 via-electric-500 to-electric-600" />
      <div className="absolute inset-0 bg-noise opacity-[0.15]" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-void-950/20 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-md font-display font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Let's discuss how ENI can bring your vision to life with precision
            engineering and unmatched quality.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-electric-600 font-semibold rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2 group"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+6433481188"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +64 3 348 1188
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CONTACT SECTION
// ============================================================================
function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formState)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-void-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="tag">Get In Touch</span>
            <h2 className="mt-6 text-display-md font-display font-bold">
              Let's Build{' '}
              <span className="gradient-text">Something Great</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Whether you have a detailed specification or just an idea, our team is ready
              to help bring your project to life. Reach out today for a free consultation.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-electric-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="mt-1 text-white/60">
                    123 Industrial Avenue<br />
                    Christchurch 8024, New Zealand
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-electric-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a href="tel:+6433481188" className="mt-1 text-white/60 hover:text-electric-400 transition-colors">
                    +64 3 348 1188
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-electric-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a href="mailto:info@enieng.co.nz" className="mt-1 text-white/60 hover:text-electric-400 transition-colors">
                    info@enieng.co.nz
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-electric-500/10 hover:border-electric-500/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-3xl glass-strong">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/50 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/50 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-electric-500/50 focus:ring-1 focus:ring-electric-500/50 transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { label: 'Power Utilities', href: '#services' },
      { label: 'Architectural Facades', href: '#services' },
      { label: 'Industrial Fabrication', href: '#services' },
      { label: 'CNC Precision', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  }

  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5">
      <div className="absolute inset-0 bg-void-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 flex items-center justify-center">
                <span className="font-display font-bold text-xl text-white">E</span>
              </div>
              <span className="font-display font-semibold text-xl">ENI Manufacturing</span>
            </a>
            <p className="mt-6 text-white/50 max-w-md leading-relaxed">
              New Zealand's trusted partner for precision metal fabrication,
              power utilities, and architectural engineering solutions.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-electric-500/10 hover:border-electric-500/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-electric-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-electric-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {currentYear} ENI Manufacturing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN APP
// ============================================================================
export default function App() {
  return (
    <>
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Main content */}
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Projects />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
