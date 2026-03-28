import { SPORTS } from "@/lib/sportsData";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ activeSport, onSportChange }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-30 bg-background/60 backdrop-blur-2xl border-b border-border/50">
      <div className="flex items-center justify-between px-4 md:px-8 h-14">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-heading font-bold text-lg tracking-tight">
            THE <span className="text-primary text-glow">PULSE</span>
          </span>
        </Link>

        {/* Sport switcher */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto">
          {SPORTS.map((sport) => (
            <Link
              key={sport.id}
              to="/"
              onClick={() => onSportChange(sport.id)}
              className={cn(
                "px-3 py-1.5 rounded text-xs font-heading font-semibold uppercase tracking-wider whitespace-nowrap transition-all",
                activeSport === sport.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <span className="mr-1.5">{sport.icon}</span>
              {sport.name}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-secondary rounded px-3 py-1.5">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search teams, players..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm outline-none w-40 md:w-64"
                autoFocus
              />
              <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="w-8 h-8 flex items-center justify-center rounded hover:bg-secondary transition"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile sport switcher */}
      <div className="md:hidden flex items-center gap-1 px-4 pb-2 overflow-x-auto scrollbar-none">
        {SPORTS.map((sport) => (
          <Link
            key={sport.id}
            to="/"
            onClick={() => onSportChange(sport.id)}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-heading font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0",
              activeSport === sport.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground bg-secondary/50"
            )}
          >
            <span className="mr-1">{sport.icon}</span>
            {sport.name.replace("Women's ", "W. ")}
          </Link>
        ))}
      </div>
    </header>
  );
}
