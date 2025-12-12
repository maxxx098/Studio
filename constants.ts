import { Project, Service, TeamMember, FaqItem, Testimonial } from './types';
import { ASSETS } from './assets';

export const BG_TEXTURE = ASSETS.HERO.BG_TEXTURE;

export const PROJECTS: Project[] = [
  { id: 1, title: 'BAF Hospitality', category: 'Web Design', imageUrl: ASSETS.PROJECTS[0], slug: 'fargo-saas' },
  { id: 2, title: 'Skitbit', category: 'Branding', imageUrl: ASSETS.PROJECTS[1], slug: 'remix-supply' },
  { id: 3, title: 'Care Pulse', category: 'Web Design / Development', imageUrl: ASSETS.PROJECTS[2], slug: 'bravo-agency' },
  { id: 4, title: 'Clientsync', category: 'Task Management', imageUrl: ASSETS.PROJECTS[3], slug: 'haze-portfolio' },
  { id: 5, title: 'Luminous', category: 'Web Design', imageUrl: ASSETS.PROJECTS[4], slug: 'luna-ecommerce' },
  { id: 6, title: 'Oasis', category: 'Hotel Management', imageUrl: ASSETS.PROJECTS[5], slug: 'nova-dashboard' },
];

export const SERVICES: Service[] = [
  { 
    id: '01', 
    title: 'Product Designing In UX', 
    description: 'Elite individual Product Design. UI/UX tailored solutions. Prototyping across devices.', 
    image: 'https://picsum.photos/seed/srv1/600/400' 
  },
  { 
    id: '02', 
    title: 'Custom UI/UX Solutions', 
    description: 'Bespoke interfaces designed to elevate user engagement and retention.', 
    image: 'https://picsum.photos/seed/srv2/600/400' 
  },
  { 
    id: '03', 
    title: 'Prototyping & Testing', 
    description: 'Rapid iteration and user testing to ensure market fit before launch.', 
    image: 'https://picsum.photos/seed/srv3/600/400' 
  },
  { 
    id: '04', 
    title: 'Innovative Design Strategies', 
    description: 'Forward-thinking visual strategies that disrupt traditional markets.', 
    image: 'https://picsum.photos/seed/srv4/600/400' 
  },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: 'William Coork', role: 'Art Director', imageUrl: 'https://picsum.photos/seed/person1/400/500' },
  { id: 2, name: 'Grey Nicholas', role: 'Lead Developer', imageUrl: 'https://picsum.photos/seed/person2/400/500' },
  { id: 3, name: 'Eliza Brooke', role: 'Project Manager', imageUrl: 'https://picsum.photos/seed/person3/400/500' },
  { id: 4, name: 'Arabella Quinn', role: 'UI Designer', imageUrl: 'https://picsum.photos/seed/person4/400/500' },
];

export const FAQ_ITEMS: FaqItem[] = [
  { question: "What services do you offer as a design agency?", answer: "We offer a full suite of digital services including UI/UX design, branding, frontend development, and AI integration strategies." },
  { question: "What industries do you specialize in?", answer: "We thrive in Tech, SaaS, Fashion, and E-commerce sectors, but our swiss-style approach works for any brand looking for clarity." },
  { question: "Can you provide examples of your previous work?", answer: "Absolutely. Scroll up to our 'Featured Work' section to see our latest case studies." },
  { question: "How do you approach client branding projects?", answer: "We start with a deep-dive discovery session, followed by moodboarding, iterative design, and comprehensive guidelines." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "The marketing strategy crafted by Epic has been a game-changer for our brand.",
    author: "Olivia Maeve",
    role: "Marketing Staff",
    company: "Starbucks",
    imageUrl: "https://picsum.photos/seed/t1/100/100"
  },
  {
    id: 2,
    quote: "Epic transformed our outdated website into a modern, sleek platform.",
    author: "Donald Gennaro",
    role: "Chief Officer",
    company: "Microsoft Corp.",
    imageUrl: "https://picsum.photos/seed/t2/100/100"
  },
  {
    id: 3,
    quote: "The 3D renderings provided by Epic were absolutely stunning.",
    author: "Robert Muldoon",
    role: "Visual Designer",
    company: "Bose",
    imageUrl: "https://picsum.photos/seed/t3/100/100"
  }
];