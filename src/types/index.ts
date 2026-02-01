// Project types
export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  year: string;
  client: string;
  partners?: string[];
  description: string;
  fullDescription: string;
  services: string[];
  deliverables: string[];
  images: string[];
  category: 'manufacturing' | 'energy' | 'facades' | 'shelters';
}

// Insight/Article types
export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  email?: string;
  phone?: string;
  image?: string;
}

// Capability types
export interface Capability {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  equipment?: string[];
  image: string;
}

// Service types
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  capabilities: string[];
  image: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

// Certification types
export interface Certification {
  name: string;
  description: string;
}
