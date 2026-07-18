import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";
import { WindowIcon, SprayIcon, MapPinIcon, ClockIcon, LeafIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* Hero: the squeegee actually wipes the grime off the glass on load */}
      <section className="hero-stage bg-glass-gradient text-foam">
        <div className="relative z-[1] mx-auto flex max-w-6xl flex-col items-start px-5 py-24 sm:py-32">
          <p className="rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-glass-light">
            {siteConfig.region} · Window Cleaning &amp; Power Washing
          </p>
          <h1 className="mt-6 max-w-2xl font-display text-5xl leading-tight sm:text-6xl">
            Streak-free windows. Spotless surfaces.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-suds/90">
            Pane &amp; Simple brings the shine back to homes and businesses across{" "}
            {siteConfig.city}, one clean pane and one clean surface at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/contact">Get a Free Quote</CTAButton>
            <CTAButton href="/services" variant="ghost">
              See Our Services
            </CTAButton>
          </div>
        </div>
        <div className="hero-grime" />
        <div className="hero-squeegee" />
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glass-mid">
            What we do
          </p>
          <h2 className="mt-2 font-display text-4xl text-glass-deep">
            Two services, done exceptionally well
          </h2>
          <p className="mt-3 text-ink/70">
            We&apos;re starting focused — window cleaning and power washing — with more
            home and business services on the way.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ServiceCard
            icon={<WindowIcon />}
            title="Window Cleaning"
            description="Interior and exterior glass, tracks, and screens, left streak-free and sparkling."
            features={[
              "Residential & commercial windows",
              "Screens, sills, and tracks included",
              "Interior, exterior, or both",
            ]}
          />
          <ServiceCard
            icon={<SprayIcon />}
            title="Power Washing"
            description="Driveways, siding, decks, and patios, restored without damaging the surface underneath."
            features={[
              "Driveways & walkways",
              "Siding, decks & patios",
              "Pre-sale & seasonal clean-ups",
            ]}
          />
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-suds">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-3">
          <TrustPoint
            icon={<MapPinIcon />}
            title="Locally owned in Napa"
            body={`Proudly based in ${siteConfig.city}, serving ${siteConfig.serviceArea.join(", ")}.`}
          />
          <TrustPoint
            icon={<ClockIcon />}
            title="Flexible scheduling"
            body="Weekday, weekend, and recurring visits built around your calendar."
          />
          <TrustPoint
            icon={<LeafIcon />}
            title="Careful with your property"
            body="Attentive, detail-first work on every window, sill, and surface."
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-glass-deep text-foam">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl">Ready for a spotless finish?</h2>
            <p className="mt-2 text-suds/80">
              Tell us about your property and we&apos;ll send over a free quote.
            </p>
          </div>
          <CTAButton href="/contact">Get a Free Quote</CTAButton>
        </div>
      </section>
    </>
  );
}

function TrustPoint({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-glass-deep shadow-sm">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-glass-deep">{title}</h3>
      <p className="mt-1 text-sm text-ink/70">{body}</p>
    </div>
  );
}
