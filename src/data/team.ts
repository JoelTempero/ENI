import { TeamMember } from '../types'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Down',
    title: 'Managing Director/Owner',
    bio: 'Founded ENI in 1992; focused on building strong people and company culture.',
    email: 'john@enimanufacturing.com',
    phone: '+64 21 617 053',
  },
  {
    id: '2',
    name: 'Rick Herd',
    title: 'Board Chairman',
    bio: '50-year career across construction, manufacturing, engineering; former Naylor Love CEO (11 years); Director of Port Otago; founding trustee of Construction Health and Safety NZ.',
  },
  {
    id: '3',
    name: 'Murray Dickinson',
    title: 'Board Director',
    bio: 'Board director with extensive experience in manufacturing and engineering sectors.',
  },
  {
    id: '4',
    name: 'Dave Fletcher',
    title: 'General Manager, Sales & Marketing',
    bio: '30+ years international business development; experience with Christchurch exporters including Tait Electronics and HamiltonJet.',
    email: 'dave@enimanufacturing.com',
    phone: '+64 21 510 484',
  },
  {
    id: '5',
    name: 'Jeremy Wood',
    title: 'Engineering Manager',
    bio: 'Sheet metal tradesman; instrumental in engineering design team development since 1996.',
  },
  {
    id: '6',
    name: 'Josh Down',
    title: 'Sales Manager',
    bio: 'Sales manager focused on building strong client relationships and delivering solutions.',
    email: 'josh@enimanufacturing.com',
    phone: '027 714 2198',
  },
  {
    id: '7',
    name: 'Thomas Barta',
    title: 'Business Analyst',
    bio: '19 years finance/analytics experience.',
  },
  {
    id: '8',
    name: 'Kristie O\'Brien',
    title: 'Commercial & Finance Manager',
    bio: 'CPA certified with extensive experience in commercial and financial management.',
  },
  {
    id: '9',
    name: 'Brittany Smith',
    title: 'Human Resources',
    bio: 'Joined in 2021, focused on building a supportive and collaborative environment.',
    email: 'brittany@enimanufacturing.com',
  },
]

export const leadershipTeam = teamMembers.filter((member) =>
  ['Managing Director/Owner', 'Board Chairman', 'Board Director', 'General Manager, Sales & Marketing'].includes(member.title)
)
