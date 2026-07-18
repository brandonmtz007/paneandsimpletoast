import { siteConfig } from "@/lib/site-config";

// Renders the Jobber "Request a Quote" form once NEXT_PUBLIC_JOBBER_REQUEST_URL is set
// (see .env.example / README for how to get that link from Jobber). Until then, it shows
// a simple direct-contact fallback so the Contact page is never broken.
export default function JobberEmbed() {
  if (!siteConfig.jobberRequestUrl) {
    return (
      <div className="rounded-2xl border border-dashed border-glass-mid/40 bg-suds p-8 text-center">
        <p className="font-display text-2xl text-glass-deep">Request a free quote</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
          Online quote requests will appear here once the Jobber form is connected. In the
          meantime, reach out directly and we&apos;ll get right back to you.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-sunlit px-6 py-3 text-sm font-semibold text-ink hover:bg-sunlit/90"
          >
            Email {siteConfig.email}
          </a>
          {siteConfig.phone && (
            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-full border border-glass-mid px-6 py-3 text-sm font-semibold text-glass-deep hover:bg-white"
            >
              Call {siteConfig.phone}
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-glass-light/30 bg-white shadow-sm">
      <iframe
        src={siteConfig.jobberRequestUrl}
        title="Request a quote"
        className="h-[900px] w-full"
        loading="lazy"
      />
    </div>
  );
}
