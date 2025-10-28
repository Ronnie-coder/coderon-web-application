// src/lib/journal.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/journal');

// STEP 1: Define a clear, reusable type for our Post data structure.
export type Post = {
  slug: string;
  content: string;
  [key: string]: any; // Allows for any other frontmatter properties
};

export function getJournalEntries(): Post[] { // STEP 2: Explicitly declare the function returns an array of Posts.
    try {
        const fileNames = fs.readdirSync(postsDirectory);

        const allPostsData = fileNames
            .map((fileName): Post | null => { // Hint to map that it can return Post or null
                if (!fileName.endsWith('.mdx')) {
                    return null;
                }
                const slug = fileName.replace(/\.mdx$/, '');
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const { data: frontmatter, content } = matter(fileContents);
                const { slug: _frontmatterSlug, ...restOfFrontmatter } = frontmatter;
                return {
                    slug,
                    content,
                    ...restOfFrontmatter,
                };
            })
            // STEP 3: Use a definitive type guard. This filter tells TypeScript
            // that any 'null' or 'undefined' values are removed, guaranteeing
            // the final array is of type Post[].
            .filter((post): post is Post => !!post);

        return allPostsData.sort((a, b) => {
            const dateA = a.date ? new Date(a.date as string) : new Date(0);
            const dateB = b.date ? new Date(b.date as string) : new Date(0);
            return dateB.getTime() - dateA.getTime();
        });

    } catch (error) {
        console.error("Error reading journal entries:", error);
        return [];
    }
}

export async function getJournalEntryBySlug(slug: string): Promise<Post | null> {
    if (!slug) {
        console.error("getJournalEntryBySlug was called with an undefined or null slug.");
        return null;
    }
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data: frontmatter, content } = matter(fileContents);
        return { slug, content, ...frontmatter }; // Return a Post object
    } catch (error) {
        console.error(`Could not find journal entry for slug: ${slug}`);
        return null;
    }
}