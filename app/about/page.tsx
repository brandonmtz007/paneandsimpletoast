import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} is a locally owned window cleaning and power washing business serving ${siteConfig.region}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-glass-gradient px-5 py-20 text-foam">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glass-light">
            About Us
          </p>
          <h1 className="mt-2 font-display text-5xl">A local, detail-first crew</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-lg leading-relaxed text-ink/80">
          {/* Editable: replace this with your own founding story, in your own words. */}
          Pane &amp; Simple started with a simple idea: {siteConfig.city} homes and
          businesses deserve windows that actually look clean, not just rinsed. We
          treat every property like it&apos;s the only one on our schedule that
          day — careful with your plants, your fixtures, and your time.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-ink/80">
          As a locally owned business, we&apos;re building Pane &amp; Simple one
          happy customer at a time, starting with window cleaning and power washing
          and growing into more home and business services as we go.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <ValueCard title="Detail-first" body="No rushed jobs — we finish what we start, thoroughly." />
          <ValueCard title="Straightforward" body="Clear quotes, clear scheduling, no surprises." />
          <ValueCard title="Local" body={`Based in ${siteConfig.city}, invested in this community.`} />
        </div>

        <div className="mt-12">
          <CTAButton href="/contact">Get a Free Quote</CTAButton>
        </div>
      </section>
    </>
  );
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-glass-light/30 bg-white p-6">
      <h3 className="font-display text-2xl text-glass-deep">{title}</h3>
      <p className="mt-2 text-sm text-ink/70">{body}</p>
    </div>
  );
}
