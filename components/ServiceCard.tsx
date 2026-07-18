type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
};

export default function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-glass-light/30 bg-white p-7 shadow-sm shadow-glass-deep/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-suds text-glass-deep">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-2xl text-glass-deep">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/80">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink/80">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sunlit" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
