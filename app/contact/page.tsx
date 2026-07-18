import type { Metadata } from "next";
import JobberEmbed from "@/components/JobberEmbed";
import { MapPinIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free window cleaning or power washing quote from ${siteConfig.name} in ${siteConfig.city}, CA.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-glass-gradient px-5 py-20 text-foam">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glass-light">
            Contact
          </p>
          <h1 className="mt-2 font-display text-5xl">Get a free quote</h1>
          <p className="mt-4 max-w-xl text-suds/90">
            Tell us a bit about your property and what you&apos;d like cleaned. We&apos;ll
            follow up with a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <JobberEmbed />

        <div className="mt-10 flex items-start gap-4 rounded-2xl bg-suds p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-glass-deep">
            <MapPinIcon />
          </div>
          <div>
            <h3 className="font-semibold text-glass-deep">Service area</h3>
            <p className="mt-1 text-sm text-ink/70">
              {siteConfig.serviceArea.join(", ")} — and nearby areas on request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
