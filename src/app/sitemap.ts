import { MetadataRoute } from "next";

const SITEMAP_DATA = [
  "",
  "_not-found",
  "about-us",
  "api/career",
  "api/contact",
  "api/hello",
  "api/mailContact",
  "blog",
  "blog/get-started",
  "career",
  "case-studies",
  "coming-soon",
  "contact-us",
  "offerings",
  "offerings/conferences-and-seminars",
  "offerings/deepali-rd-division",
  "offerings/events-activations-promotions",
  "offerings/exhibits-tradeshows",
  "offerings/modular-infrastructure",
  "offerings/sports-events-infrastructure",
  "offerings/weddings",
  "project",
  "project/green-is-the-color-of-agricommerce",
  "project/lifesaver-in-the-northeast",
  "project/outstanding-outreach",
  "project/pandemic-vs-opportunity",
  "project/staging-it-globally",
  "project/uncontainable-delight",
  "sitemap.xml",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return SITEMAP_DATA.map((url) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    };
  });
}
