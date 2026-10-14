import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  cover: string;
  readingTime: number;
};

export type Post = PostMeta & { content: string };

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function filePathFor(slug: string): string | null {
  for (const file of fs.readdirSync(BLOG_DIR)) {
    if (file.replace(/\.mdx?$/, "") === slug) {
      return path.join(BLOG_DIR, file);
    }
  }
  return null;
}

function parsePost(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  const meta: PostMeta = {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    description:
      typeof data.description === "string"
        ? data.description
        : "Read more on the Dermolyxa journal.",
    date: typeof data.date === "string" ? data.date : new Date().toISOString(),
    author: typeof data.author === "string" ? data.author : "Dermolyxa",
    category: typeof data.category === "string" ? data.category : "General",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    cover:
      typeof data.cover === "string" ? data.cover : "/blog/recovery-timeline.png",
    readingTime: readingTime(content),
  };

  return { ...meta, content };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => parsePost(file))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  if (!fs.existsSync(BLOG_DIR)) return undefined;
  const file = filePathFor(slug);
  if (!file) return undefined;
  return parsePost(path.basename(file));
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const posts = getAllPosts();
  const current = posts.find((post) => post.slug === slug);
  if (!current) return posts.slice(0, limit);

  return posts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score:
        (post.category === current.category ? 2 : 0) +
        post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, limit)
    .map(({ post }) => post);
}