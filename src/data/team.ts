import { TeamMember } from '../types'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Down',
    title: 'Managing Director/Owner',
    bio: 'Having founded ENI back in 1992, John has spent the last three decades building ENI Manufacturing into the company it is today. He is proud of its past and excited for its future. In John\'s eyes, the key to ENI\'s success is fostering and building each other up to be better people.',
    email: 'john@enimanufacturing.com',
    phone: '+64 21 617 053',
    image: 'https://www.enieng.co.nz/assets/dsc08417.1.jpg',
  },
  {
    id: '2',
    name: 'Rick Herd',
    title: 'Board Chairman',
    bio: 'Rick brings a 50-year career spanning construction, manufacturing, and engineering to ENI. He served 11 years as CEO at Naylor Love and holds director positions with Port Otago. He is also a founding trustee of Construction Health and Safety New Zealand.',
    image: 'https://www.enieng.co.nz/assets/rick-herd-(1)-1768639487.png',
  },
  {
    id: '3',
    name: 'Murray Dickinson',
    title: 'Board Director',
    bio: 'Murray has served as CFO and Company Secretary at Naylor Love since 2015. With over 20 years in senior finance roles across construction and manufacturing sectors, he is a Fellow of Chartered Accountants Australia and New Zealand.',
    image: 'https://www.enieng.co.nz/assets/murray-dickinson-1768639503.jpeg',
  },
  {
    id: '4',
    name: 'Dave Fletcher',
    title: 'General Manager, Sales & Marketing',
    bio: 'Dave has a long-standing career in International Business Development, spanning more than 30 years. He has worked with some of Christchurch\'s leading exporters like, Tait Electronics, Dynamic Controls and HamiltonJet.',
    email: 'dave@enimanufacturing.com',
    phone: '+64 21 510 484',
    image: 'https://www.enieng.co.nz/assets/davefletcher-1755226185.jpg',
  },
  {
    id: '5',
    name: 'Jeremy Wood',
    title: 'Engineering Manager',
    bio: 'Starting with ENI back in 1996, Jeremy is a Qualified Sheet Metal Tradesman and has been an instrumental part in the development of the Engineering Design team. He is an integral part in the future growth plans of ENI for both its technology and its people.',
    image: 'https://www.enieng.co.nz/assets/dsc08339.1.jpg',
  },
  {
    id: '6',
    name: 'Josh Down',
    title: 'Sales Manager',
    bio: 'Josh is a Qualified Engineer with experience in product development and design for manufacturing. He is passionate about ENI and its customers, leading the Sales team in building mutually beneficial partnerships where all parties succeed.',
    email: 'josh@enimanufacturing.com',
    phone: '027 714 2198',
    image: 'https://www.enieng.co.nz/assets/dsc08309.1.jpg',
  },
  {
    id: '7',
    name: 'Thomas Barta',
    title: 'Business Analyst',
    bio: 'Thomas provides the team with the tools to make informed decisions through his extensive financial and data analytics skillset. Thomas is a finance professional with 19 years of hands-on experience across multiple industries in Austria, Germany, London, and New Zealand.',
    image: 'https://www.enieng.co.nz/assets/dsc08373.1.jpg',
  },
  {
    id: '8',
    name: 'Kristie O\'Brien',
    title: 'Commercial & Finance Manager',
    bio: 'Kristie is a Certified Public Accountant (CPA) with strong commercial acumen and experience in risk management. Her expertise supports ENI\'s growth and continuous improvement, ensuring the company\'s ability to consistently meet and exceed customer expectations.',
    image: 'https://www.enieng.co.nz/assets/dsc08391.1.jpg',
  },
  {
    id: '9',
    name: 'Brittany Smith',
    title: 'Human Resources',
    bio: 'In most cases, Brittany is the first friendly voice and face a prospective team member encounters when joining our team. With a Bachelor\'s degree in Psychology, and a Postgraduate Certification in Human Resource Management, Brittany plays a key role in shaping our people and culture every day. Having worked at ENI since 2021, Brittany is a trusted go-to for both new starters and long-standing team members alike helping put the right people in the right seats, and supporting them to thrive once they\'re here.',
    email: 'brittany@enimanufacturing.com',
    image: 'https://www.enieng.co.nz/assets/dsc08444.1-1768639639.jpg',
  },
]

export const leadershipTeam = teamMembers.filter((member) =>
  ['Managing Director/Owner', 'Board Chairman', 'Board Director', 'General Manager, Sales & Marketing'].includes(member.title)
)
