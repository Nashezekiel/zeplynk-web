// Single source of truth for Zeplynk's identity (name, URL, phone, address, links).
// Every page, component and schema block reads from here so the details Google
// and AI crawlers see can never drift apart. Keep these values identical to the
// Google Business Profile, character for character.

export const SITE = {
  url: "https://www.zeplynk.com",
  name: "Zeplynk",
  alternateNames: ["Zeplynk Tech Solutions", "Zeplynk Academy"],
  description:
    "Zeplynk is a Nigerian tech solutions and education company in Kaduna: custom software, AI automation, web development and developer training.",
  phoneDisplay: "0706 369 5334",
  phoneIntl: "+234 706 369 5334",
  phoneE164: "+2347063695334",
  whatsapp: "https://wa.me/2347063695334",
  email: "zeplynk001@gmail.com",
  foundingDate: "2024",
  // Square, white background, 512x512: what Google expects for a brand logo.
  logo: "/logo.png",
  // Service-area business: no public street address on the GBP.
  address: {
    locality: "Kaduna",
    region: "Kaduna State",
    country: "NG",
    display: "Kaduna, Kaduna State, Nigeria",
  },
  areaServed: ["Kaduna", "Jos", "Abuja", "Nigeria"],
  hours: {
    display: [
      { day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    schema: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
  },
  // Permanent Maps link built from the profile's CID (stable, unlike search URLs).
  gbpUrl: "https://maps.google.com/?cid=12307363173409798504",
  founder: {
    name: "Nash Ezekiel Pam",
    jobTitle: "Founder and CEO",
    photo: "/images/team/nash-ezekiel-pam.jpg",
    linkedin: "https://www.linkedin.com/in/nash-ezekiel-59779a217/",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/zeplynk/",
    instagram: "https://www.instagram.com/zeplynk/",
    // Where both old share links resolve. Swap in a vanity URL if one is claimed.
    facebook: "https://www.facebook.com/profile.php?id=61590537544286",
  },
} as const;

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const ACADEMY_ID = `${SITE.url}/academy#organization`;

/** Reference to the one Organization node in the root layout's schema graph. */
export const ORG_REF = { "@id": ORG_ID } as const;
export const ACADEMY_REF = { "@id": ACADEMY_ID } as const;

/** Profiles that confirm the brand. Empty values (not yet filled in) are skipped. */
export const SAME_AS: string[] = [
  SITE.gbpUrl,
  SITE.social.linkedin,
  SITE.social.instagram,
  SITE.social.facebook,
].filter(Boolean);

export const absoluteUrl = (path = "") => `${SITE.url}${path}`;
