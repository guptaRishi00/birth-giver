import { MetadataRoute } from "next";
import { getBlogs } from "@/data/loader"; // Import your data-fetching function

// Define the shape of your blog post (you might need to adjust)
type BlogPost = {
  slug: string;
  date: string; // Assuming 'date' is a string like '2025-09-11'
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.birthgiverfilmproductions.com";

  // 1. Get static pages
  const staticRoutes = [
    "/",
    "/about-us",
    "/services",
    "/film-production",
    "/marketing-strategy",
    "/software-development",
    "/projects",
    "/careers",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly", // Or 'weekly' for pages that update often
    priority: route === "/" ? 1 : 0.8,
  }));

  // 2. Get dynamic blog pages
  const { data: posts } = await getBlogs(); // Fetch your blog posts

  const dynamicBlogRoutes = posts.map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(), // Use the post's update date
    changeFrequency: "yearly", // Or 'never' if content doesn't change
    priority: 0.6,
  }));

  // Combine and return all routes
  return [
    ...staticRoutes,
    ...dynamicBlogRoutes,
    // ...add other dynamic routes here (e.g., projects if they have detail pages)
  ];
}
