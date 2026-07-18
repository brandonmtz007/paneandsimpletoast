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
  jobber: {
    // The div id, "clienthub_id" value, and form_url below are Jobber's actual
    // embed snippet for this account's work request form (Settings > Requests >
    // your form > "..." > Share links > Get embed code). Override via env vars
    // if you ever swap to a different Jobber form.
    embedId:
      process.env.NEXT_PUBLIC_JOBBER_EMBED_ID ||
      "4ff92fec-8427-42d3-80b8-b985b5f64cec-4989819",
    formUrl:
      process.env.NEXT_PUBLIC_JOBBER_FORM_URL ||
      "https://clienthub.getjobber.com/client_hubs/4ff92fec-8427-42d3-80b8-b985b5f64cec/public/work_request/embedded_work_request_form?form_id=4989819",
  },
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
