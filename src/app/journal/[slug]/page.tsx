// src/app/journal/[slug]/page.tsx

import { getJournalEntryBySlug, getJournalEntries } from '@/lib/journal';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// This type definition remains correct.
type PageProps = {
  params: {
    slug: string;
  };
};

// THE DEFINITIVE FIX IS HERE: We destructure `slug` directly out of `params`
// in the function signature itself. This forces the resolution of the parameter.
export async function generateMetadata({ params: { slug } }: PageProps): Promise<Metadata> {
  const post = await getJournalEntryBySlug(slug); // Now passing the resolved `slug`
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.frontmatter.title as string,
    description: post.frontmatter.description as string,
  };
}

export async function generateStaticParams() {
  const posts = getJournalEntries();
  return posts.map((post) => ({ slug: post.slug }));
}

// APPLYING THE SAME FIX HERE for the main component.
export default async function JournalArticlePage({ params: { slug } }: PageProps) {
  const post = await getJournalEntryBySlug(slug); // Now passing the resolved `slug`

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article className="c-article-page">
      <div className="c-page-container">
        <header className="c-page-header">
          <h1>{frontmatter.title as string}</h1>
          <p className="article-meta">
            Published on {new Date(frontmatter.date as string).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>
        <main className="c-article-content">
          <MDXRemote source={content} />
        </main>
        <footer className="c-article-footer">
          <Link href="/journal">← Back to All Articles</Link>
        </footer>
      </div>
    </article>
  );
}