import { TIERS, SPORTS } from "@/lib/sportsData";
import { motion } from "framer-motion";
import { TrendingUp, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HERO_IMAGES = {
  football: 'https://media.base44.com/images/public/69c8385b06be3a309cc1c14a/9829f021d_generated_c79be7d0.png',
  baseball: 'https://media.base44.com/images/public/69c8385b06be3a309cc1c14a/b1b22f2e0_generated_13207358.png',
  hockey: 'https://media.base44.com/images/public/69c8385b06be3a309cc1c14a/9f7ce684b_generated_c72bc1df.png',
  volleyball: 'https://media.base44.com/images/public/69c8385b06be3a309cc1c14a/4e9e027e5_generated_f5b6e43c.png',
  tennis: 'https://media.base44.com/images/public/69c8385b06be3a309cc1c14a/7cfb3b042_generated_eadedd17.png',
  whockey: 'https://media.base44.com/images/public/69c8385b06be3a309cc1c14a/c88020c11_generated_ebed7440.png',
};

const TOP_STORIES = {
  football: { title: 'UPSET ALERT: UNRANKED SQUAD STUNS #2 IN OVERTIME THRILLER', subtitle: 'A 47-yard field goal as time expired in OT sends the home crowd into a frenzy.' },
  baseball: { title: 'FRESHMAN PHENOM THROWS PERFECT GAME IN CONFERENCE OPENER', subtitle: 'The 18-year-old right-hander struck out 14 and never allowed a baserunner.' },
  hockey: { title: 'FROZEN FOUR BOUND: UNDERDOG PROGRAM MAKES HISTORIC RUN', subtitle: 'Four overtime wins in the tournament propel the program to its first championship appearance.' },
  volleyball: { title: 'UNDEFEATED SEASON ON THE LINE IN CHAMPIONSHIP MATCH', subtitle: 'Two 30-0 powerhouses collide in what promises to be an instant classic.' },
  tennis: { title: 'SOPHOMORE CLAIMS #1 NATIONAL RANKING AFTER 15-MATCH WIN STREAK', subtitle: 'Five top-10 victories in a row cement the rising star at the top of the rankings.' },
  whockey: { title: 'HAT TRICK HERO LEADS DRAMATIC THIRD-PERIOD COMEBACK', subtitle: 'Three goals in the final frame, including the game-winner with 45 seconds left.' },
};

export default function HeroSection({ tier, sport }) {
  const tierData = TIERS.find(t => t.id === tier);
  const sportData = SPORTS.find(s => s.id === sport);
  const story = TOP_STORIES[sport] || TOP_STORIES.football;
  const heroImage = HERO_IMAGES[sport] || HERO_IMAGES.football;

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={`${sportData?.name} action`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-4 md:px-8 pb-8 md:pb-16 max-w-6xl">
        {/* Tier & Sport Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className={`${tierData?.bg} text-background font-mono text-xs font-bold px-2 py-1 rounded`}>
            {tierData?.short}
          </span>
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest">
            {sportData?.icon} {sportData?.name}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-xs">
            <Clock className="w-3 h-3" /> 2h ago
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-4 max-w-4xl"
        >
          {story.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mb-6"
        >
          {story.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <Link
            to="/news"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-heading font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition"
          >
            Read Full Story <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/standings"
            className="flex items-center gap-2 border border-border px-5 py-2.5 rounded font-heading text-sm uppercase tracking-wider hover:bg-secondary transition"
          >
            <TrendingUp className="w-4 h-4" /> Live Standings
          </Link>
        </motion.div>
      </div>

      {/* Live Stat Cards */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex flex-col gap-2">
        {[
          { label: 'TOP GAME', value: '24-21', sub: 'Q4 2:30' },
          { label: 'TRENDING', value: '#NewEra', sub: '+340%' },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="bg-card/80 backdrop-blur-md border border-border rounded px-3 py-2 min-w-[120px]"
          >
            <span className="text-primary font-mono text-[10px] uppercase tracking-widest">{card.label}</span>
            <div className="font-mono text-lg font-bold">{card.value}</div>
            <span className="text-muted-foreground font-mono text-[10px]">{card.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
