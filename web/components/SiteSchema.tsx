import { SITE, ORG_ID, WEBSITE_ID, ACADEMY_ID, SAME_AS, ORG_REF, absoluteUrl } from "@/lib/site";

// The one connected schema graph for the whole site, rendered once in the root
// layout. Other pages' schema (Course, Service, Article...) should reference the
// company with ORG_REF instead of repeating its details.
export function SiteSchema() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE.name,
        alternateName: SITE.alternateNames,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(SITE.logo),
          width: 512,
          height: 512,
        },
        image: absoluteUrl("/opengraph-image"),
        description: SITE.description,
        foundingDate: SITE.foundingDate,
        telephone: SITE.phoneE164,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
        areaServed: SITE.areaServed,
        openingHours: SITE.hours.schema,
        priceRange: "₦₦",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phoneE164,
          email: SITE.email,
          contactType: "customer service",
          areaServed: "NG",
          availableLanguage: "English",
        },
        ...(SITE.gbpUrl ? { hasMap: SITE.gbpUrl } : {}),
        founder: {
          "@type": "Person",
          name: SITE.founder.name,
          jobTitle: SITE.founder.jobTitle,
          image: absoluteUrl(SITE.founder.photo),
          ...(SITE.founder.linkedin ? { sameAs: [SITE.founder.linkedin] } : {}),
        },
        knowsAbout: [
          "Custom Software Development",
          "AI Automation",
          "Web Development",
          "Google Business Profile Management",
          "Developer Training",
        ],
        sameAs: SAME_AS,
      },
      {
        "@type": "EducationalOrganization",
        "@id": ACADEMY_ID,
        name: "Zeplynk Academy",
        url: absoluteUrl("/academy"),
        parentOrganization: ORG_REF,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        alternateName: SITE.alternateNames,
        inLanguage: "en-NG",
        publisher: ORG_REF,
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
