"use client";

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import ImpactSection from '@/components/ImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TheDrumSection from '@/components/TheDrumSection';
import { projects, Project } from '@/data/projectsData';

export default function HomePage() {
  const [featuredProject, setFeaturedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Select a random project when the component mounts on the client-side
    const randomIndex = Math.floor(Math.random() * projects.length);
    setFeaturedProject(projects[randomIndex]);
  }, []); // The empty dependency array ensures this runs only once per visit

  return (
    <>
      <Hero />
      <ServicesShowcase />

      {/* The component now dynamically renders the project stored in state */}
      {featuredProject && <ImpactSection project={featuredProject} />}

      <TestimonialsSection />
      <TheDrumSection />
    </>
  );
}