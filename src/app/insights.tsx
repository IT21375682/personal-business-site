"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography, Chip } from "@material-tailwind/react";

interface PostPreview {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  cover: string;
}

// Placeholder data – replace with markdown or CMS feed later
const POSTS: PostPreview[] = [
  {
    slug: "cross-border-sourcing-2025",
    title: "Cross‑Border Sourcing in 2025: What Mid‑Market CEOs Need to Know",
    date: "2025‑05‑18",
    category: "Strategy",
    excerpt:
      "Global supply chains are shifting again. Here’s a pragmatic framework to secure quality at scale while mitigating geopolitical risk…",
    cover: "/insights/sourcing.jpg",
  },
  {
    slug: "leadership‑during‑volatility",
    title: "Leading Through Volatility: 7 Principles Shantha Uses with Boards",
    date: "2025‑04‑02",
    category: "Leadership",
    excerpt:
      "Recession fears, talent shortages, AI disruption – learn the mental models that keep executive teams aligned and resilient…",
    cover: "/insights/leadership.jpg",
  },
  {
    slug: "uae‑sri‑lanka‑market‑entry",
    title: "Entering the UAE & Sri Lanka: A Side‑by‑Side Market Entry Checklist",
    date: "2025‑02‑17",
    category: "Market Entry",
    excerpt:
      "From regulatory nuances to on‑the‑ground partnerships, this checklist distils two decades of cross‑border wins and lessons learned…",
    cover: "/insights/market‑entry.jpg",
  },
];

function PostCard({ slug, title, date, excerpt, category, cover }: PostPreview) {
  return (
    <Link
      href={`/insights/${slug}`}
      className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Chip value={category} color="blue" size="sm" className="mb-3" />
        <Typography variant="h5" color="blue-gray" className="mb-2 line-clamp-2">
          {title}
        </Typography>
        <Typography variant="small" className="mb-4 opacity-70">
          {new Date(date).toLocaleDateString("en", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Typography>
        <Typography variant="paragraph" className="line-clamp-3 opacity-80">
          {excerpt}
        </Typography>
      </div>
    </Link>
  );
}

export default function InsightsPage() {
  return (
    <main className="py-24">
      {/* hero */}
      <section className="mb-20 bg-gradient-to-br from-blue-50 to-white py-24 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Insights & Resources
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-2xl opacity-80">
          Actionable articles and tools on strategy, leadership and cross‑border growth, curated by Shantha Jayasena.
        </Typography>
      </section>

      {/* posts grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
}
