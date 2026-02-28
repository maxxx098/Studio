import { DetailedProject } from './types';

// Helper function to create slugs
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Detailed project data for case study pages
export const DETAILED_PROJECTS: DetailedProject[] = [
  {
    id: 1,
    title: 'BAF HOSPITALITY GROUP',
    slug: 'fargo-saas',
    name: 'BAF Hospitality Group',
    category: 'Web Design',
    imageUrl:   '/assets/projects/project_1.png',
    description: 'A comprehensive SaaS platform designed to streamline business operations with intuitive interfaces and powerful automation tools.',
    duration: '6 months',
    client: 'Fargo Inc.',
    year: '2024',
    scope: ['UI/UX Design', 'Frontend Development', 'Brand Identity', 'Design System'],
    challenge: 'Fargo needed a complete digital transformation to compete in the modern SaaS market. Their legacy system was outdated, and user adoption was declining.',
    solution: 'We designed a fresh, modern interface with a focus on user experience. Our team built a comprehensive design system and implemented cutting-edge frontend technologies.',
    results: [
      '85% increase in user engagement',
      '60% reduction in support tickets',
      'Launched in 6 months ahead of schedule',
      '4.8/5 user satisfaction rating'
    ],
    gallery: [
      '/assets/projects/BAF.png',
    ]
  },
  {
    id: 2,
    title: 'Skitbit',
    slug: 'remix-supply',
    name: 'Skitbit',
    category: 'Branding',
    imageUrl: '/assets/projects/project_2.png',
    description: 'Complete brand overhaul for a logistics company, including logo design, brand guidelines, and marketing materials.',
    duration: '4 months',
    client: 'Remix Logistics',
    year: '2024',
    scope: ['Brand Strategy', 'Logo Design', 'Marketing Materials', 'Website Design'],
    challenge: 'Remix Supply was struggling with brand recognition in a crowded market. Their visual identity was inconsistent and failed to communicate their modern approach.',
    solution: 'We developed a bold, contemporary brand identity that reflects their innovative supply chain solutions. The new visual language is clean, professional, and memorable.',
    results: [
      '120% increase in brand recognition',
      '45% growth in qualified leads',
      'Featured in 3 major industry publications',
      'Successfully launched in 15 new markets'
    ],
    gallery: [
         '/assets/projects/Skitbit.png',
    ]
  },
  {
    id: 3,
    title: 'Care Pulse',
    slug: 'bravo-agency',
    name: 'Care Pulse Application',
    category: 'Mobile App',
    imageUrl: '/assets/projects/project_3.png',
    description: 'Native mobile application for a creative agency to showcase their portfolio and connect with clients on the go.',
    duration: '5 months',
    client: 'Bravo Creative',
    year: '2024',
    scope: ['Mobile UI Design', 'iOS Development', 'Android Development', 'API Integration'],
    challenge: 'Bravo Agency needed a mobile presence that matched their creative excellence. They wanted to showcase their work beautifully while maintaining fast performance.',
    solution: 'We crafted a stunning mobile experience with smooth animations, intuitive navigation, and optimized media loading. The app works seamlessly across iOS and Android.',
    results: [
      '50K+ downloads in first month',
      '4.9 star rating on App Store',
      '70% increase in client inquiries',
      'Featured by Apple in "Apps We Love"'
    ],
    gallery: [
      '/assets/projects/Carepulse1.png',
      '/assets/projects/Carepulse2.png',
    ]
  },
  {
    id: 4,
    title: 'Clientsync Management',
    slug: 'haze-portfolio',
    name: 'Clientsync Management Tool',
    category: 'Development',
    imageUrl: '/assets/projects/project_4.png',
    description: 'A stunning portfolio website with advanced animations and interactions to showcase a designer\'s work.',
    duration: '3 months',
    client: 'Haze Studios',
    year: '2024',
    scope: ['Web Development', 'Animation', 'Performance Optimization', 'CMS Integration'],
    challenge: 'The client needed a portfolio that would stand out and demonstrate their technical capabilities while maintaining excellent performance.',
    solution: 'We built a cutting-edge portfolio using modern web technologies with advanced GSAP animations and smooth page transitions.',
    results: [
      '200% increase in client inquiries',
      '99 PageSpeed score',
      'Featured on Awwwards',
      '15K organic visits in first month'
    ],
    gallery: [
      '/assets/projects/Clientsync1.png',
      '/assets/projects/Clientsync2.png',
    ]
  },

  {
    id: 5,
    title: 'Luminous',
    slug: 'luna-ecommerce',
    name: 'Luminous Skin Care E-commerce',
    category: 'Web Design',
    imageUrl: '/assets/projects/project_5.png',
    description: 'Modern e-commerce platform for a fashion brand with seamless shopping experience and beautiful product presentations.',
    duration: '7 months',
    client: 'Luna Fashion',
    year: '2024',
    scope: ['E-commerce Design', 'Shopify Development', 'Checkout Optimization', 'Email Marketing'],
    challenge: 'Luna needed to transition from physical retail to online sales while maintaining their luxury brand image and providing exceptional customer experience.',
    solution: 'We created an elegant e-commerce platform with high-quality product imagery, smooth checkout process, and integrated inventory management.',
    results: [
      '$2M in online sales within 6 months',
      '3.5% conversion rate (industry avg: 2%)',
      '95% customer satisfaction score',
      '40% repeat customer rate'
    ],
    gallery: [
      '/assets/projects/Luminous.png',
    ]
  },
  {
    id: 6,
    title: 'Oasis Hotel Management',
    slug: 'nova-dashboard',
    name: 'Oasis Hotel Management',
    category: 'UI/UX',
    imageUrl: '/assets/projects/project_6.png',
    description: 'Comprehensive analytics dashboard with data visualization and real-time monitoring capabilities.',
    duration: '5 months',
    client: 'Nova Analytics',
    year: '2024',
    scope: ['Dashboard Design', 'Data Visualization', 'React Development', 'API Design'],
    challenge: 'Nova needed to transform complex data into actionable insights for non-technical users while maintaining power-user capabilities.',
    solution: 'We designed an intuitive dashboard with customizable widgets, real-time updates, and beautiful data visualizations that make complex data accessible.',
    results: [
      '90% user adoption rate',
      '65% reduction in training time',
      '40% increase in data-driven decisions',
      'Won "Best Analytics Tool 2024"'
    ],
    gallery: [
    ]
  }
];

// Get all projects
export const getAllProjects = async (): Promise<DetailedProject[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DETAILED_PROJECTS);
    }, 100);
  });
};

// Get project by slug
export const getProjectBySlug = async (slug: string): Promise<DetailedProject | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = DETAILED_PROJECTS.find(p => p.slug === slug);
      resolve(project || null);
    }, 100);
  });
};