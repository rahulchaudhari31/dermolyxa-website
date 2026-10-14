import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Journal & Guides",
  description:
    "Expert articles on hair transplants, regenerative medicine, recovery timelines, and preparation from the Dermolyxa team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Dermolyxa Journal",
    description:
      "Expert guides on hair restoration, recovery, and regenerative aesthetics.",
    url: "/blog",
    type: "website",
  },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="relative pb-24 pt-32 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-gold-radial"
      />
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-gold/60" aria-hidden />
            Journal &amp; Guides
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Knowledge is
            <span className="block gold-text">your first treatment</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/60">
            Practical, honest guidance from our specialists — so you can make
            informed decisions about your hair and skin.
          </p>
        </header>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-black/50 px-3 py-1 text-[0.6rem] uppercase tracking-luxe text-gold backdrop-blur">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-xl leading-snug text-ivory transition-colors group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-xs text-ivory/40">
                    <span>{formatDate(post.date)}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {post.readingTime} min read
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/contact" size="lg">
            Book a Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}