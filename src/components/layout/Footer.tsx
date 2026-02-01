import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react'

const baseUrl = import.meta.env.BASE_URL

const footerLinks = {
  services: [
    { name: 'ENI Manufacturing', href: '/what-we-do/contract-manufacturing' },
    { name: 'ENI Energy', href: '/what-we-do/power-utilities' },
    { name: 'ENI Facades', href: '/what-we-do/eni-facades' },
    { name: 'ENI Shelters', href: '/what-we-do/outdoor-infrastructure' },
  ],
  company: [
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Our Projects', href: '/our-projects' },
    { name: 'Insights', href: '/insights' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={`${baseUrl}logo-white.svg`}
                alt="ENI Manufacturing"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              New Zealand's trusted partner in precision metal fabrication and engineering excellence. 30+ years of innovation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/eni-engineering-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/eniengineeringltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+6433497052"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-brand-400" />
                  +64 (03) 349 7052
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@enimanufacturing.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-brand-400" />
                  sales@enimanufacturing.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-brand-400 mt-0.5" />
                  <span>
                    18 Produce Place,<br />
                    Islington, Christchurch 8042
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ENI Manufacturing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/responsibility-policy"
              className="text-slate-500 hover:text-white text-sm transition-colors"
            >
              Our Responsibility Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
