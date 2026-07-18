"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-glass-deep/95 backdrop-blur supports-[backdrop-filter]:bg-glass-deep/90 text-foam shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-3xl leading-none text-foam">{siteConfig.name}</span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-glass-light sm:inline">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-suds transition hover:text-sunlit"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-sunlit px-5 py-2 text-sm font-semibold text-ink transition hover:bg-sunlit/90"
          >
            Get a Free Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foam md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-2 py-2 text-suds hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-full bg-sunlit px-4 py-2 text-center text-sm font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
