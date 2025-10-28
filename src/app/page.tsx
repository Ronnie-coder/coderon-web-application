// src/app/page.tsx

// Your existing imports
import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import ImpactSection from '@/components/ImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TheDrumSection from '@/components/TheDrumSection';

// 1. ADD THIS IMPORT to get your project data
import { projects } from '@/data/projectsData';

/**
 * The main homepage for Coderon.
 */
export default function HomePage() {
  // 2. FIND THE FEATURED PROJECT before the component returns.
  // This line looks through your projects array and finds the one with "isHomepageFeature: true".
  const featuredProject = projects.find(p => p.isHomepageFeature);

  return (
    <>
      <Hero />
      <ServicesShowcase />

      {/* 
        3. THIS IS THE UPGRADED IMPACT SECTION.
        It first checks if a 'featuredProject' was actually found.
        If yes, it renders the ImpactSection and passes the project's data into it as a prop.
      */}
      {featuredProject && <ImpactSection project={featuredProject} />}

      <TestimonialsSection />
      <TheDrumSection />
    </>
  );
}