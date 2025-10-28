// src/app/contact/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa';
import { ConsultationForm } from '@/components/ConsultationForm';

export const metadata: Metadata = {
  title: 'Free Consultation | Coderon',
  description: 'Book a free, no-obligation 30-minute strategy session with Coderon to discuss your project and discover new opportunities.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="c-page-container">
      <header className="c-page-header">
        <h1>Let's Build Together</h1>
        <p>
          Your free 30-minute strategy session is the first step. Use the form below, or reach out directly. We're ready to listen.
        </p>
      </header>

      <main className="c-contact__wrapper">
        <div className="c-contact__info">
          <h2>What to Expect</h2>
          <p>
            This complimentary call is a chance for us to understand your vision and for you to understand our process. We'll discuss your goals, evaluate needs, and provide initial, actionable recommendations. No obligations, only value.
          </p>
          <ul className="c-contact__details">
            <li><span><FaEnvelope /></span> ronnie@coderon.co.za</li>
            <li><span><FaClock /></span> Response within 24 hours</li>
          </ul>
          <Link href="https://wa.me/27678184898" target="_blank" rel="noopener noreferrer" className="c-contact__whatsapp-btn">
            <FaWhatsapp /> Chat on WhatsApp
          </Link>
        </div>
        <div className="c-contact__form-area">
          <ConsultationForm />
        </div>
      </main>
    </div>
  );
}