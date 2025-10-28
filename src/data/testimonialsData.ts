// src/data/testimonialsData.ts

export interface Testimonial {
  id: number;
  logoUrl: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  quote: string;
  siteUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    logoUrl: '/images/gifted-tours-logo.svg',
    logoAlt: 'Gifted Tours Logo',
    logoWidth: 160,
    logoHeight: 50,
    quote: "I was really amazed by the website — now everything is actually working nicely... My website is running smoothly. Now I'm able to receive the emails, and I've got more reach to customers. I would highly recommend you... I was amazed with the work.",
    siteUrl: 'https://www.giftedtours.co.za',
  },
  {
    id: 2,
    logoUrl: '/images/palmsure-logo.png',
    logoAlt: 'Palmsure Logo',
    logoWidth: 150,
    logoHeight: 50,
    quote: 'This project was about honoring a family legacy. Coderon led the complete digital transformation for Palmsure, migrating decades of paper-based processes to a robust, modern web platform. It was more than code; it was about purpose.',
    siteUrl: 'https://palmsure.co.za/',
  },
];