import { Service } from '../types'

export const services: Service[] = [
  {
    id: '1',
    slug: 'contract-manufacturing',
    title: 'ENI Manufacturing',
    shortTitle: 'Manufacturing',
    tagline: 'Contract Manufacturing',
    description: 'At ENI Manufacturing, we harness over three decades of industry expertise to deliver high-quality, innovative metal fabrication solutions.',
    fullDescription: [
      'At ENI Manufacturing, we harness over three decades of industry expertise to deliver high-quality, innovative metal fabrication solutions.',
      'The company emphasizes blending advanced technology with human-centered focus to meet quality, efficiency, and sustainability standards across diverse sectors.',
      'From custom metal fabrication to precision engineering and manufacturing, our expertise is unmatched. We\'re at the cutting edge of technology, always investing to stay ahead. Inspired by New Zealand\'s pioneering spirit, we\'re guided by our values of reliability, quality and sustainability.',
    ],
    capabilities: [
      'Engineering Design',
      'Cutting & Folding',
      'Additive Manufacturing',
      'Fabrication & Welding',
      'Powder Coating',
      'Mechanical Assembly',
      'Logistics & Installations',
    ],
    image: 'https://www.enieng.co.nz/assets/contract-manufacturing-trumpf-machine.jpg',
  },
  {
    id: '2',
    slug: 'power-utilities',
    title: 'ENI Energy',
    shortTitle: 'Energy',
    tagline: 'Power Utilities',
    description: 'ENI Energy powers New Zealand\'s infrastructure with durable, high-performance solutions for low and medium voltage networks.',
    fullDescription: [
      'ENI Energy powers New Zealand\'s infrastructure with durable, high-performance solutions for low and medium voltage networks.',
      'The company supplies adaptable, future-ready solutions that enhance network reliability, safety, and efficiency for LV pillars and enclosures to IP-rated cabinets, overhead fittings, and animal protection solutions.',
      'ENI provides a wide range of distribution products and accessories, approved for use across various networks nationwide. The company emphasizes in-house capabilities spanning innovative design, custom metal fabrication, powder coating, and plastic moulding.',
    ],
    capabilities: [
      'Cabinets and Enclosures',
      'LV Link and Pillar Boxes',
      'Large Kiosks and Enclosures',
      'LV Panels',
      'IP Rated Cabinets',
      'Temporary Power Enclosures',
      'Animal Protection',
      'Overhead Fittings & Accessories',
      'Cross Arms & Bracing',
      'Fuse Switchgear',
    ],
    image: 'https://www.enieng.co.nz/assets/energy/eni-combiner-box-icon.png',
  },
  {
    id: '3',
    slug: 'eni-facades',
    title: 'ENI Facades',
    shortTitle: 'Facades',
    tagline: 'Architectural Facades',
    description: 'At ENI Facades, we bring together craftsmanship, innovation, and technical expertise to create architectural facades that are as functional as they are striking.',
    fullDescription: [
      'At ENI Facades, we bring together craftsmanship, innovation, and technical expertise to create architectural facades that are as functional as they are striking.',
      'ENI Facades specializes in bespoke architectural facade manufacturing with 30+ years of experience. Services include residential and commercial building facades, bridge and walkway cladding, exterior and interior cladding solutions, and energy-efficient design solutions.',
      'Key benefits include enhanced aesthetic appeal and structural integrity, improved energy efficiency and reduced energy costs, minimized environmental impact, and expertise in new builds and refurbishments.',
    ],
    capabilities: [
      'Residential and commercial building facades',
      'Bridge and walkway cladding',
      'Exterior and interior cladding solutions',
      'Energy-efficient design solutions',
    ],
    image: 'https://www.enieng.co.nz/assets/riccarton/riccarton_01.jpg',
  },
  {
    id: '4',
    slug: 'outdoor-infrastructure',
    title: 'ENI Shelters',
    shortTitle: 'Shelters',
    tagline: 'Outdoor Infrastructure',
    description: 'ENI Shelters focuses on creating safe, sustainable, and accessible shelters and covered walkways with 30 years of experience.',
    fullDescription: [
      'At ENI Manufacturing, we believe in blending innovation, quality, and a human-centred approach across all our projects. ENI Shelters continues this tradition, focusing on creating safe, sustainable, and accessible shelters and covered walkways.',
      'With 30 years of experience in designing and building outdoor infrastructure, street furniture and fixtures, we are dedicated to shaping the future of public spaces.',
      'Creating safe spaces is, and always will be, our priority. We ensure that our seating and shelters in public spaces provide optimum shelter and serve all abilities.',
      'We envision public spaces as hubs, where people come together and communities thrive.',
    ],
    capabilities: [
      'E-Shelter and I-Shelter modular ranges',
      'Customizable shelter designs',
      'Covered Walkways & Canopies',
      'Urban Furniture',
      'Solar lighting options',
      'Digital displays and advertising',
    ],
    image: 'https://www.enieng.co.nz/img/containers/assets/superstop/ss_04.jpg/0f0b7d1a8ed0c9e07282d4689a1c800d.jpg',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
