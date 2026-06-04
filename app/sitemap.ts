import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/portfolio",
    "/processo",
    "/faq",
    "/contato",
    "/privacidade",
    "/termos",
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/contato" ? 0.9 : 0.8,
  }))
}
