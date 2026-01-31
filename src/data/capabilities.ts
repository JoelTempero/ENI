import { Capability, Certification } from '../types'

export const capabilities: Capability[] = [
  {
    id: '1',
    title: 'Engineering Design',
    description: 'Transforms ideas into manufacturable solutions, optimising for strength, efficiency, and sustainability using advanced 2D and 3D modelling.',
    icon: 'Ruler',
  },
  {
    id: '2',
    title: 'Cutting & Folding',
    description: 'Employs precision CNC laser cutting, punching, and folding to produce high-quality components with minimal waste.',
    icon: 'Scissors',
  },
  {
    id: '3',
    title: 'Additive Manufacturing',
    description: 'Features Markforged 3D printers for rapid prototyping in metal and fibre-reinforced plastics.',
    icon: 'Layers',
  },
  {
    id: '4',
    title: 'Fabrication & Welding',
    description: 'Offers MIG, TIG, and Resistance welding plus robotic welding capabilities for precision work in aluminium, steel, and stainless steel.',
    icon: 'Flame',
  },
  {
    id: '5',
    title: 'Powder Coating',
    description: 'Delivers Dulux-approved powder coating with various colours and finishes.',
    icon: 'Paintbrush',
  },
  {
    id: '6',
    title: 'Mechanical Assembly',
    description: 'Handles small components to large structures, ensuring seamless integration with quality control and logistics.',
    icon: 'Wrench',
  },
  {
    id: '7',
    title: 'Logistics & Installations',
    description: 'Provides nationwide delivery and on-site installation, managing everything from packaging and shipping to full pack-ship-deliver and on-site assembly services.',
    icon: 'Truck',
  },
]

export const certifications: Certification[] = [
  {
    name: 'ISO 9001',
    description: 'Quality management system certification',
  },
  {
    name: 'Dulux Powder Coating Approved Applicator',
    description: 'Certified applicator for Dulux powder coating products',
  },
  {
    name: 'AS 1554.1 Welding Certificate',
    description: 'Australian Standard welding certification',
  },
  {
    name: 'Toitū Enviromark Gold',
    description: 'Environmental management certification',
  },
]
