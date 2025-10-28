// src/app/services/[slug]/page.tsx
import { services } from '@/data/servicesData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  if (!service) { return { title: 'Service Not Found' }; }
  return {
    title: `${service.title} | Coderon`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

// THE FIX: Component is `async` to correctly handle params.
export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const service = services.find(s => s.slug === slug);

  if (!service) { notFound(); }

  return (
    <div className="c-page-container">
      {/* ... rest of the component is correct ... */}
      <header className="c-page-header"><h1>{service.title}</h1><p>{service.description}</p></header>
      <main>
        <article className="c-service-item">
          <p className="c-service-item__description">{service.detailedDescription}</p>
          <h3 className="c-service-item__title">Key Benefits</h3>
          <ul className="c-service-item__benefits-list">
            {service.benefits.map((benefit, index) => (<li key={index} className="c-service-item__benefit">{benefit}</li>))}
          </ul>
        </article>
      </main>
      <aside className="c-page-cta">
        <h2>Ready to Leverage This Solution?</h2>
        <p>Let's discuss how our {service.title} expertise can help you achieve your business goals.</p>
        <Link href="/contact" className="cta-button">Schedule a Free Consultation</Link>
      </aside>
    </div>
  );
}