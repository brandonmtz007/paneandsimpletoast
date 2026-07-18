import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-suds">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-foam">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-steel">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm">
            Serving {siteConfig.serviceArea.join(", ")}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-steel">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sunlit">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-steel">
            Get in touch
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sunlit">
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.phone && (
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-sunlit">
                  {siteConfig.phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-steel">
        © {year} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
