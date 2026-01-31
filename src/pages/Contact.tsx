import { useState, FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import AnimatedElement from '../components/ui/AnimatedElement'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | ENI Engineering</title>
        <meta name="description" content="Contact ENI Engineering for more information or to book a factory tour. We have the people, innovation and expertise to bring your vision to life." />
      </Helmet>

      <PageHero
        subtitle="Contact Us"
        title="Get in Touch"
        description="Interested in partnering with us? For more information or to book a factory tour with us, please fill out the enquiry form and one of the team will get in contact with you."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <AnimatedElement>
            <div className="card p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Thank you for your enquiry!
                  </h3>
                  <p className="text-slate-600">
                    One of our team members will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="form-label">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="form-label">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+64 XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedElement>

          {/* Contact Info */}
          <div>
            <AnimatedElement direction="right">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-slate-600">
                  We have the people, innovation and expertise to bring your vision to life.
                </p>
              </div>
            </AnimatedElement>

            <div className="space-y-6">
              <AnimatedElement delay={0.1} direction="right">
                <div className="card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a
                      href="tel:+6433497052"
                      className="text-slate-600 hover:text-brand-500 transition-colors"
                    >
                      +64 (03) 349 7052
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={0.2} direction="right">
                <div className="card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:sales@enimanufacturing.com"
                      className="text-slate-600 hover:text-brand-500 transition-colors"
                    >
                      sales@enimanufacturing.com
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={0.3} direction="right">
                <div className="card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      18 Produce Place,<br />
                      Islington, Christchurch 8042<br />
                      New Zealand
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* Map placeholder */}
            <AnimatedElement delay={0.4} direction="right">
              <div className="mt-8 rounded-2xl overflow-hidden shadow-soft-lg">
                <div className="h-64 bg-surface-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-500 text-sm">
                      18 Produce Place, Islington
                    </p>
                    <a
                      href="https://maps.google.com/?q=18+Produce+Place+Islington+Christchurch+8042"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 text-sm font-medium hover:underline mt-2 inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Section>
    </>
  )
}
