import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
};

export default function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? `${base} bg-sunlit text-ink hover:bg-sunlit/90`
      : `${base} border border-foam/50 text-foam hover:bg-white/10`;

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
