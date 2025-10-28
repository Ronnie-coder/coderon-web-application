import { getPostData, getSortedPostsData } from '@/lib/journal';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Metadata } from 'next';

// This is the modern, preferred approach and resolves the type error.
type PageParams = {
  slug: string;
};

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { frontmatter } = await getPostData(params.slug);
  return { title: frontmatter.title, description: frontmatter.excerpt };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function JournalArticlePage({ params }: { params: PageParams }) {
  const { frontmatter, content } = await getPostData(params.slug);

  return (
    <article className="c-article-page">
      <div className="c-page-container">
        <header className="c-page-header">
          <h1>{frontmatter.title}</h1>
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