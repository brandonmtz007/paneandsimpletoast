import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

// Jobber's own embedded "Request a Quote" form (Settings > Requests > your
// form > "..." > Share links > Get embed code). The div below is Jobber's
// mount point; the script fills it in and handles submissions client-side.
//
// Note: if you view-source your live site and see an extra script tag
// pointing at /cdn-cgi/scripts/.../email-decode.min.js, that's Cloudflare's
// own email-obfuscation feature rewriting mailto links on the page — it's
// injected automatically at the edge and isn't part of the Jobber embed, so
// there's nothing to add for it here.
export default function JobberEmbed() {
  return (
    <div className="rounded-2xl border border-glass-light/30 bg-white p-6 shadow-sm">
      <div id={siteConfig.jobber.embedId} />
      <link
        rel="stylesheet"
        href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        media="screen"
      />
      <Script
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
        strategy="afterInteractive"
        clienthub_id={siteConfig.jobber.embedId}
        form_url={siteConfig.jobber.formUrl}
      />
    </div>
  );
}
