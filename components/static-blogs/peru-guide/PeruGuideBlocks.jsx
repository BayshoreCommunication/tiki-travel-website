import React from "react";
import {
  CANONICAL_URL,
  peruFaqs,
  sacredValleyHighlights,
  tripStats,
} from "@/components/static-blogs/data/peru-itinerary-data";

export function GuidePage({ children }) {
  return (
    <section className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col items-start justify-between gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary/75 sm:flex-row sm:items-center sm:px-6 sm:py-3 md:text-[11px]">
        <span>Peru Travel Guide</span>
        <span>Tiki Travel Agency</span>
      </div>
      <div className="px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, id }) {
  return (
    <h2
      id={id}
      className="border-l-4 border-primary pl-3 text-left text-xl font-semibold leading-tight text-secondary sm:pl-4 sm:text-2xl md:text-3xl"
    >
      {children}
    </h2>
  );
}

export function BodyParagraph({ children, className = "" }) {
  return (
    <p
      className={`text-left text-sm leading-6 text-secondary/85 sm:text-base sm:leading-7 ${className}`}
    >
      {children}
    </p>
  );
}

export function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition hover:text-secondary"
    >
      {children}
    </a>
  );
}

export function StatGrid() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-4">
      {tripStats.map(([number, title, text]) => (
        <div
          key={title}
          className="bg-white px-2 py-3 text-center sm:px-4 sm:py-5"
        >
          <p className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">
            {number}
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-secondary sm:mt-2 sm:text-xs md:text-sm">
            {title}
          </p>
          <p className="mt-1 text-xs text-secondary/70 sm:mt-2 sm:text-sm">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ComparisonTable({ headings, rows }) {
  return (
    <div className="w-full overflow-x-auto border border-slate-200">
      <table className="w-full min-w-[540px] border-collapse text-left text-sm">
        <thead className="bg-secondary text-white">
          <tr>
            {headings.map((heading) => (
              <th
                key={heading}
                className="whitespace-nowrap px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.06em] sm:px-4 sm:py-3 sm:text-sm"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row[0]}
              className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${row[0]}-${cellIndex}`}
                  className={`border-t border-slate-200 px-3 py-2.5 align-top text-xs leading-5 sm:px-4 sm:py-3 sm:text-sm sm:leading-6 ${
                    cellIndex === 0
                      ? "whitespace-nowrap font-semibold text-secondary"
                      : "text-secondary/80"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RecommendationBlock({ title, items }) {
  return (
    <div className="border border-slate-200 bg-slate-50 p-3 text-left sm:p-5">
      <h3 className="text-base font-semibold text-secondary sm:text-lg">
        {title}
      </h3>
      <ul className="mt-2.5 space-y-2 text-left text-sm leading-6 text-secondary/85 sm:mt-3 sm:space-y-2.5 sm:text-base sm:leading-7">
        {items.map((item) => (
          <li key={item.name} className="flex items-start gap-2.5">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-secondary">
                {item.name}:
              </strong>{" "}
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TipCallout({ title, children }) {
  return (
    <div className="border-l-4 border-primary bg-primary/10 px-3 py-3 text-left sm:px-5 sm:py-4">
      {title ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary sm:text-sm">
          {title}
        </p>
      ) : null}
      <div className={title ? "mt-1.5 space-y-2" : "space-y-2"}>{children}</div>
    </div>
  );
}

export function SacredValleyHighlightsGrid() {
  return (
    <div className="divide-y divide-slate-200 border border-slate-200 bg-white">
      {sacredValleyHighlights.map((highlight) => (
        <div key={highlight.title} className="p-3 text-left sm:p-4">
          <h3 className="flex items-center gap-2 text-base font-semibold text-secondary sm:text-lg">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>{highlight.title}</span>
          </h3>
          <BodyParagraph className="mt-1.5">
            {highlight.description}
          </BodyParagraph>
        </div>
      ))}
    </div>
  );
}

export function StructuredData({ post, featuredImage, publishedIso, updatedIso }) {
  const imageUrl = featuredImage.image.url.startsWith("http")
    ? featuredImage.image.url
    : `https://www.tikitravelagency.com${featuredImage.image.url}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        image: [imageUrl],
        datePublished: publishedIso,
        dateModified: updatedIso,
        author: {
          "@type": "Organization",
          name: "Tiki Travel Agency",
          url: "https://www.tikitravelagency.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Tiki Travel Agency",
          url: "https://www.tikitravelagency.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.tikitravelagency.com/assets/site-logo/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: peruFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.tikitravelagency.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.tikitravelagency.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
