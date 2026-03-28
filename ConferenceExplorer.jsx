import { CONFERENCES, TIERS } from "@/lib/sportsData";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ConferenceExplorer({ tier, sport }) {
  const conferences = CONFERENCES[tier]?.[sport] || [];
  const tierData = TIERS.find(t => t.id === tier);

  if (conferences.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading font-bold text-xl uppercase tracking-tight mb-4">
        Conferences
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {conferences.map(conf => (
          <Link
            key={conf}
            to={`/standings?tier=${tier}&sport=${sport}&conference=${conf}`}
            className="bg-card border border-border rounded px-4 py-3 hover:border-primary/30 transition-all group flex items-center justify-between"
          >
            <div>
              <span className="font-heading font-semibold text-sm group-hover:text-primary transition">
                {conf}
              </span>
              <p className={`${tierData?.color} font-mono text-[9px] uppercase tracking-widest mt-0.5`}>
                {tier}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition" />
          </Link>
        ))}
      </div>
    </section>
  );
}
