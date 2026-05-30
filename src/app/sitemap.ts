import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { events } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/aspire-higher",
    "/labs-workshops",
    "/community",
    "/events",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const eventRoutes = events.map((e) => ({
    url: `${site.url}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...routes, ...eventRoutes];
}
