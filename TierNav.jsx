import { TIERS } from "@/lib/sportsData";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function TierNav({ activeTier, onTierChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 bg-card border border-border rounded flex items-center justify-center"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Tier nav */}
      <nav
        className={cn(
          "fixed left-0 top-0 h-full w-16 bg-card/80 backdrop-blur-xl border-r border-border z-40 flex flex-col items-center py-6 gap-2 transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center mb-6">
          <span className="font-heading font-bold text-xs text-primary-foreground">TP</span>
        </div>

        {TIERS.map((tier) => (
          <button
            key={tier.id}
            onClick={() => {
              onTierChange(tier.id);
              setMobileOpen(false);
            }}
            className={cn(
              "w-11 h-11 rounded flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 border-2",
              activeTier === tier.id
                ? `${tier.bg} text-background ${tier.border} shadow-lg`
                : "bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"
            )}
            title={tier.name}
          >
            {tier.short}
          </button>
        ))}

        <div className="mt-auto flex flex-col items-center gap-2">
          <div className="w-6 h-px bg-border" />
          <span className="font-mono text-[9px] text-muted-foreground tracking-widest" style={{ writingMode: 'vertical-rl' }}>
            TIERS
          </span>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
