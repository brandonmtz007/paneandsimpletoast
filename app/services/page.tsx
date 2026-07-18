import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";
import { WindowIcon, SprayIcon, SparkleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Window cleaning and power washing for homes and businesses in Napa Valley, with more services on the way.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-glass-gradient px-5 py-20 text-foam">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glass-light">
            Services
          </p>
          <h1 className="mt-2 font-display text-5xl">What we take care of</h1>
          <p className="mt-4 max-w-xl text-suds/90">
            Pane &amp; Simple is starting with the two jobs we do best. As we grow,
            this list will grow with us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <ServiceCard
            icon={<WindowIcon />}
            title="Window Cleaning"
            description="A full pass on every pane, inside and out, so light comes through clean, not cloudy."
            features={[
              "Interior and exterior glass",
              "Screens removed, washed, and rehung",
              "Tracks and sills wiped down",
              "Homes, offices, and storefronts",
            ]}
          />
          <ServiceCard
            icon={<SprayIcon />}
            title="Power Washing"
            description="Low-to-high pressure washing matched to the surface, so it gets clean without getting damaged."
            features={[
              "Driveways, walkways, and patios",
              "Siding and exterior walls",
              "Decks and fences",
              "Move-in, move-out, and pre-sale clean-ups",
            ]}
          />
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-dashed border-glass-mid/40 bg-suds p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-glass-deep">
            <SparkleIcon />
          </div>
          <div>
            <h3 className="font-display text-2xl text-glass-deep">More on the way</h3>
            <p className="mt-1 text-sm text-ink/70">
              We&apos;re planning to add services like gutter cleaning and solar panel
              cleaning as Pane &amp; Simple grows. Have something specific in mind? Ask
              us when you request a quote.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <CTAButton href="/contact">Get a Free Quote</CTAButton>
        </div>
      </section>
    </>
  );
}
