// src/components/Footer.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BackToTopButton } from '@/components/BackToTopButton'; // Import the dedicated component

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-ZA', { timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="c-footer">
      <div className="c-footer__content">
        <div className="c-footer__social">
          <a href="https://github.com/Ronnie-coder" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          {/* --- THE FIX: Correct LinkedIn URL --- */}
          <a href="https://www.linkedin.com/in/ronnie-nyamhute-8b302b360" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://x.com/Coderon28" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)"><FaTwitter /></a>
        </div>
        <div className="c-footer__links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
        <div className="c-footer__verification">
          <a href="https://www.companypartners.co.za/" target="_blank" rel="noopener noreferrer" aria-label="View Company Partners Verification">
            <Image src="/company-partners-badge.png" alt="Registered Company Verified by Company Partners" width={200} height={112} style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
          </a>
        </div>
        <div className="c-footer__bottom-bar">
          <div className="c-footer__legal-info">
            <span>&copy; {currentYear} Coderon.</span>
            <span>Reg: 2025 / 482790 / 07</span>
          </div>
          <div className="c-footer__clock" aria-label="Current time in Johannesburg">
            {currentTime} SAST
          </div>
        </div>
      </div>
      {/* The button is now its own clean component */}
      <BackToTopButton />
    </footer>
  );
};
export default Footer;