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
    slug: "https://www.linkedin.com/posts/shantha-jayasena-73950359_carbonwisdom-natureeconomy-greenfuture-activity-7348935811997782018-596L?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx5Ww4BLL5-X4lztHZZRt_OWjFCnGIAzkg",
    title: "Cross‑Border Sourcing in 2025: What Mid‑Market CEOs Need to Know",
    date: "2025‑05‑18",
    category: "Strategy",
    excerpt:
      "Global supply chains are shifting again. Here’s a pragmatic framework to secure quality at scale while mitigating geopolitical risk…",
    cover: "https://media.licdn.com/dms/image/v2/D5622AQEAWPPqGK1n9w/feedshare-shrink_2048_1536/B56ZfyqKzbG0As-/0/1752122832973?e=1755129600&v=beta&t=-7gxRD31fiULf1SWgHBtFjjeh1B3Sa8lb4faia7hn5U",
  },
  {
    slug: "https://www.linkedin.com/posts/shantha-jayasena-73950359_leadership-workplaceculture-changemanagement-activity-7332237034440343553-Ned3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx5Ww4BLL5-X4lztHZZRt_OWjFCnGIAzkg",
    title: "Leading Through Volatility: 7 Principles Shantha Uses with Boards",
    date: "2025‑04‑02",
    category: "Leadership",
    excerpt:
      "Recession fears, talent shortages, AI disruption – learn the mental models that keep executive teams aligned and resilient…",
    cover: "https://media.licdn.com/dms/image/v2/D5622AQFKfuiFL42V5w/feedshare-shrink_800/B56ZcFWt_iH4Ag-/0/1748141533527?e=1755129600&v=beta&t=uGHSMTja0_f-byCEGUo-FB_VD3TIwmFl0XZUjxba2NY",
  },
  {
    slug: "https://www.linkedin.com/posts/shantha-jayasena-73950359_softchanges-lifeinflow-gentlehabits-activity-7349005106203291650-QKPv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx5Ww4BLL5-X4lztHZZRt_OWjFCnGIAzkga",
    title: "Entering the UAE & Sri Lanka: A Side‑by‑Side Market Entry Checklist",
    date: "2025‑02‑17",
    category: "Market Entry",
    excerpt:
      "From regulatory nuances to on‑the‑ground partnerships, this checklist distils two decades of cross‑border wins and lessons learned…",
    cover: "https://media.licdn.com/dms/image/v2/D5622AQFX9vKGTpNRnw/feedshare-shrink_800/B56ZfzpMU1HoAg-/0/1752139353330?e=1755129600&v=beta&t=FmP7mPI6RDTlJcHVE4rXQ1CaDRR0nPLXrhczHgPgvfI",
  },
];

function PostCard({ slug, title, date, excerpt, category, cover }: PostPreview) {
  return (
    <Link
      href={`${slug}`}
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
