// Edit this file to update business info across the whole site.
// Nothing here needs a code change anywhere else.

export const siteConfig = {
  name: "Pane & Simple",
  legalName: "Pane & Simple Services",
  tagline: "Home & Business Services",
  description:
    "Napa Valley window cleaning and power washing for homes and businesses. Streak-free glass, spotless surfaces, done right the first time.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "paneandsimpleservices@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://paneandsimple.services",
  jobberRequestUrl: process.env.NEXT_PUBLIC_JOBBER_REQUEST_URL || "",
  city: "Napa",
  region: "Napa Valley",
  // Edit freely — these are just the towns Pane & Simple is reachable from.
  serviceArea: ["Napa", "American Canyon", "Yountville", "St. Helena", "Calistoga"],
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
