// src/data/playroomData.ts

export interface PlayroomProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  imageUrl: string; // For our live projects
}

export interface PlayroomDemo {
  id: string;
  title: string;
  description: string;
  tech: string[];
  href: string;
}

// --- 1. LIVE PROJECTS & APPLICATIONS ---
export const liveProjects: PlayroomProject[] = [
  {
    id: 'quotepilot',
    title: 'QuotePilot SaaS',
    description: 'A production-ready invoice & quote generator for African SMEs, built with a robust Supabase backend and a clean Next.js frontend.',
    tech: ['SaaS', 'Next.js', 'Supabase', 'TypeScript'],
    liveUrl: 'https://app.coderon.co.za/',
    imageUrl: '/images/playroom/quotepilot.png',
  },
  {
    id: 'fullas-pharmacy',
    title: 'Fullas Pharmacy Demo',
    description: 'A sleek, modern e-commerce and prescription management concept for the pharmaceutical industry, showcasing a focus on UX.',
    tech: ['Next.js', 'TypeScript', 'E-commerce'],
    liveUrl: 'https://fullas-pharmacy-demo-v-2.vercel.app/',
    imageUrl: '/images/playroom/fullas-pharmacy.png',
  },
  {
    id: 'md-shuttles-v2',
    title: 'MD Shuttles (Modern Refresh)',
    description: 'A redesigned, vibrant, and user-friendly interface for a transport and delivery service, built for conversion.',
    tech: ['Next.js', 'Web Design', 'SCSS'],
    liveUrl: 'https://md-shuttles-2.vercel.app/',
    imageUrl: '/images/playroom/md-shuttles-v2.png',
  },
  {
    id: 'broomghost-sa',
    title: 'BroomGhost SA E-commerce',
    description: 'A stylish and minimalist e-commerce platform for a modern streetwear brand, focusing on product presentation and a smooth checkout flow.',
    tech: ['Next.js', 'E-commerce', 'Brand Identity'],
    liveUrl: 'https://ghost-ebon-three.vercel.app/',
    imageUrl: '/images/playroom/broomghost-sa.png',
  },
  {
    id: 'md-shuttles-v1',
    title: 'MD Shuttles (Classic MVP)',
    description: 'The original Minimum Viable Product for a shuttle service, establishing the core booking functionality and online presence.',
    tech: ['Next.js', 'MVP', 'Booking System'],
    liveUrl: 'https://md-shuttles-mvp.vercel.app/',
    imageUrl: '/images/playroom/md-shuttles-v1.png',
  },
];


// --- 2. INTERACTIVE DEMOS & TOOLS ---
export const interactiveDemos: PlayroomDemo[] = [
  {
    id: 'sales-dashboard',
    title: 'Interactive Sales Dashboard',
    description: 'A dynamic dashboard for visualizing sales data, built with Next.js and Chart.js. Experience data-driven decision making.',
    tech: ['Next.js', 'TypeScript', 'Chart.js'],
    href: '/playroom/sales-dashboard',
  },
   {
    id: 'sentiment-analyzer',
    title: 'AI Sentiment Analyzer',
    description: 'An AI-powered tool that analyzes text for emotional tone. A practical example of our machine learning solutions for business.',
    tech: ['Next.js', 'AI', 'NLP'],
    href: '/playroom/sentiment-analyzer',
  },
  {
    id: 'business-chatbot',
    title: 'Business AI Chatbot',
    description: 'An AI chatbot to handle inquiries, qualify leads, and provide 24/7 support. A demo of our automation solutions.',
    tech: ['Botpress', 'AI', 'Automation'],
    href: '/playroom/business-chatbot',
  },
  {
    id: 'fleet-tracker',
    title: 'Live Fleet Tracker',
    description: 'A real-time map visualization tracking a fleet of vehicles. Demonstrates our ability to build live, data-intensive applications.',
    tech: ['Next.js', 'Leaflet.js', 'Real-Time Data'],
    href: '/playroom/fleet-tracker',
  }
];