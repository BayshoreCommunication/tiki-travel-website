import fs from "fs";
import path from "path";
import GetAllPostData from "@/lib/GetAllPostData";
import { getPublishedBlogPosts } from "@/lib/blogHelpers";
import { vacationPackagesData } from "@/config/data";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const BASE_URL = "https://www.tikitravelagency.com";

const BASELINE_STATIC_ROUTES = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/cookie-policy",
  "/disclaimers",
  "/privacy-policy",
  "/terms-and-conditions",
  "/testimonials",
  "/vacation-destinations",
];

const PAGE_FILE_REGEX = /^page\.(js|jsx|ts|tsx)$/;

function isIgnoredSegment(segment) {
  return (
    !segment ||
    segment === "api" ||
    segment.startsWith("_") ||
    segment.includes("[") ||
    segment.includes("]")
  );
}

function isRouteGroup(segment) {
  return segment.startsWith("(") && segment.endsWith(")");
}

function scanAppDirectory(dirPath, segments = [], collected = new Set()) {
  let entries = [];
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return collected;
  }

  for (const entry of entries) {
    if (entry.isFile() && PAGE_FILE_REGEX.test(entry.name)) {
      const route = segments.length === 0 ? "" : `/${segments.join("/")}`;
      collected.add(route);
      continue;
    }

    if (!entry.isDirectory() || isIgnoredSegment(entry.name)) {
      continue;
    }

    const nextSegments = isRouteGroup(entry.name)
      ? segments
      : [...segments, entry.name];

    scanAppDirectory(path.join(dirPath, entry.name), nextSegments, collected);
  }

  return collected;
}

function discoverStaticRoutes() {
  const routes = new Set(BASELINE_STATIC_ROUTES);
  scanAppDirectory(path.join(process.cwd(), "app"), [], routes);
  return Array.from(routes).sort((a, b) => a.localeCompare(b));
}

function toSafeIsoDate(value, fallbackIso) {
  if (!value) {
    return fallbackIso;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? fallbackIso : parsed.toISOString();
}

function buildSafeUrl(pathname) {
  const normalizedPath = pathname.startsWith("/") || pathname === ""
    ? pathname
    : `/${pathname}`;
  const encoded = encodeURI(`${BASE_URL}${normalizedPath}`);
  return encoded.replace(/&/g, "&amp;");
}

export default async function sitemap() {
  const generatedAt = new Date().toISOString();
  const entriesByUrl = new Map();

  const addEntry = (pathname, { lastModified, changeFrequency, priority }) => {
    const url = buildSafeUrl(pathname);
    if (!entriesByUrl.has(url)) {
      entriesByUrl.set(url, {
        url,
        lastModified,
        changeFrequency,
        priority,
      });
    }
  };

  // 1. Auto-discovered Static App Routes
  discoverStaticRoutes().forEach((route) => {
    addEntry(route, {
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    });
  });

  // 2. Dynamic Blog Routes (live backend API + static blogs, all pages)
  try {
    const blogPostData = await GetAllPostData({ cache: "no-store" });
    const publishedBlogs = getPublishedBlogPosts(blogPostData?.data || []);

    publishedBlogs.forEach((blog) => {
      const slug = String(blog?.slug || "").trim().replace(/^\/+/, "");
      if (!slug) {
        return;
      }

      addEntry(`/blog/${slug}`, {
        lastModified: toSafeIsoDate(
          blog?.updatedAt || blog?.createdAt,
          generatedAt
        ),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error("Error generating blog routes for sitemap:", error);
  }

  // 3. Dynamic Vacation Destination Routes
  (vacationPackagesData || []).forEach((pkg) => {
    const slug = String(pkg?.slug || "").trim().replace(/^\/+/, "");
    if (!slug) {
      return;
    }

    addEntry(`/vacation-destinations/${slug}`, {
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return Array.from(entriesByUrl.values());
}
