import { Metadata } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/journal';

export const metadata: Metadata = { title: 'The Coderon Journal' };

export default function JournalPage() {
  const articles = getSortedPostsData();
  return (
    <div className="c-page-container">
      <header className="c-page-header">
        <h1>From the Drum</h1>
        <p>A collection of insights from my journey.</p>
      </header>
      <main>
        <div className="c-article-list">
          {articles.map(({ slug, title, excerpt }) => (
            <Link key={slug} href={`/journal/${slug}`} className="c-article-list__item">
              <div>
                <h2 className="c-article-list__title">{title}</h2>
                <p className="c-article-list__excerpt">{excerpt}</p>
              </div>
              <span className="c-article-list__read-more">Read Article →</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}