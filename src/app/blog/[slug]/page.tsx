import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from "@/lib/mdx";
import { siteUrl, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";

type PageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover, width: 1280, height: 720, alt: post.title }],
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <article className="relative pb-24 pt-32 lg:pt-40">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Journal", url: "/blog" },
          { name: post.title, url: postUrl },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          url: postUrl,
          image: `${siteUrl}${post.cover}`,
          author: post.author,
          date: post.date,
          section: post.category,
        })}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-gold-radial"
      />
      <Container size="narrow">
        <nav aria-label="Breadcrumb" className="text-xs text-ivory/40">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-gold">
                Journal
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="max-w-[16ch] truncate text-gold">{post.title}</li>
          </ol>
        </nav>

        <header className="mt-10">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/60" aria-hidden />
            {post.category}
          </span>
          <h1 className="mt-5 text-balance font-serif text-3xl font-light leading-[1.1] tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ivory/60">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ivory/45">
            <span>By {post.author}</span>
            <span aria-hidden>&middot;</span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>&middot;</span>
            <span>{post.readingTime} min read</span>
          </div>
        </header>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-gold/15 bg-surface">
          <Image
            src={post.cover}
            alt={post.title}
            width={1280}
            height={720}
            priority
            sizes="(max-width: 768px) 90vw, 48rem"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="prose-lux mt-12 text-[0.95rem] leading-relaxed text-ivory/70">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gold/20 px-3 py-1 text-xs text-gold/80"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-gold/20 bg-surface/60 p-8 text-center">
          <h2 className="font-serif text-2xl text-ivory">
            Ready to explore your options?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ivory/60">
            Book a free, no-obligation consultation with a senior specialist.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact" size="lg">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </Container>

      {related.length > 0 ? (
        <Container className="mt-20">
          <h2 className="text-center font-serif text-2xl text-ivory sm:text-3xl">
            Related reading
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-gold/15 bg-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 90vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg leading-snug text-ivory group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-ivory/40">
                    {item.readingTime} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      ) : null}
    </article>
  );
}