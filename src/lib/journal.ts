// src/lib/journal.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/app/journal/(posts)');

export type PostFrontmatter = {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: number; // --- ENHANCEMENT: Added readingTime property ---
  [key: string]: any;
};

export function getJournalEntries(): PostFrontmatter[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
      .map((fileName): PostFrontmatter | null => {
        if (!fileName.endsWith('.mdx')) return null;
        
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // --- ENHANCEMENT: Calculate reading time from post content ---
        const { data, content } = matter(fileContents);
        const words = content.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200); // Assumes 200 WPM reading speed

        return {
          slug,
          readingTime,
          ...(data as Omit<PostFrontmatter, 'slug' | 'readingTime'>),
        };
      })
      .filter((post): post is PostFrontmatter => !!post);

    return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error(`Error reading journal entries from ${postsDirectory}:`, error);
    return [];
  }
}