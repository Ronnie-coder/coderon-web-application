// src/data/projectsData.ts

export interface Project {
  id: string;
  client: string;
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
  liveUrl: string;
  isHomepageFeature?: boolean;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'palmsure',
    client: 'Palmsure Insurance',
    title: 'Honoring a Legacy with Digital Transformation',
    tags: ['Web Platform', 'Angular', 'Legacy System Modernization'],
    description: 'Coderon led the complete digital transformation for Palmsure, migrating decades of paper-based processes to a robust, modern web platform built on Angular. It was more than code; it was about purpose.',
    imageUrl: '/images/palmsure-showcase.png',
    liveUrl: 'https://palmsure.co.za/',
    isHomepageFeature: true, // Palmsure remains the featured project on the homepage
    caseStudyUrl: '/impact/palmsure',
  },
  {
    id: 'gifted-tours',
    client: 'Gifted Tours',
    title: 'From Outdated to Outstanding',
    tags: ['Web Redesign', 'Next.js', 'SEO Optimization', 'GSAP'],
    description: 'Gifted Tours needed a digital refresh. We delivered a complete redesign and rebuild, resulting in a lightning-fast, modern, and SEO-optimized platform that truly represents their brand.',
    imageUrl: '/images/gifted-tours-showcase.png',
    liveUrl: 'https://giftedtours.co.za/',
    caseStudyUrl: '/impact/gifted-tours',
  },
  // --- NEW: QuotePilot added as a flagship internal product ---
  {
    id: 'quotepilot',
    client: 'Coderon (Internal Product)', // Clearly labels this as our own innovation
    title: 'A Free Invoice & Quote System for African SMEs',
    tags: ['SaaS', 'Next.js', 'Supabase', 'Business Tool'],
    description: 'To empower African entrepreneurs, we built QuotePilot: a smart, simple, and free invoice generator. This production-ready tool showcases our ability to build, ship, and maintain our own software products.',
    imageUrl: '/images/quotepilot-showcase.png', // The image you will add
    liveUrl: 'https://app.coderon.co.za/',
  },
];