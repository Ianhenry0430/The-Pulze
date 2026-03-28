import { TIERS, CONFERENCES, SPORTS } from "@/lib/sportsData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Brand */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h2 className="font-heading font-bold text-2xl tracking-tight">
              THE <span className="text-primary text-glow">PULSE</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Total Collegiate Sports Coverage — D1 through JUCO
            </p>
          </div>
          <div className="flex gap-4">
            {TIERS.map(tier => (
              <span key={tier.id} className={`${tier.color} font-mono text-xs font-bold`}>
                {tier.short}
              </span>
            ))}
          </div>
        </div>

        {/* Conference Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
          {TIERS.map(tier => (
            <div key={tier.id}>
              <h3 className={`${tier.color} font-heading font-bold text-xs uppercase tracking-widest mb-3`}>
                {tier.name}
              </h3>
              <ul className="space-y-1">
                {(CONFERENCES[tier.id]?.football || []).slice(0, 6).map(conf => (
                  <li key={conf}>
                    <Link
                      to={`/standings?tier=${tier.id}&conference=${conf}`}
                      className="text-muted-foreground text-xs hover:text-foreground transition"
                    >
                      {conf}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sport Links */}
        <div className="border-t border-border pt-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {SPORTS.map(sport => (
              <span key={sport.id} className="text-muted-foreground text-xs font-mono">
                {sport.icon} {sport.name}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-xs font-mono">
            © 2026 THE PULSE — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
