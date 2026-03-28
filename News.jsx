import { useOutletContext } from "react-router-dom";
import { generateNews, TIERS, SPORTS } from "@/lib/sportsData";
import { Clock, User, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function News() {
  const { activeTier, activeSport } = useOutletContext();
  const tierData = TIERS.find(t => t.id === activeTier);
  const sportData = SPORTS.find(s => s.id === activeSport);
  const [filterCategory, setFilterCategory] = useState('all');

  // Generate news across all sports for this tier
  const allNews = SPORTS.flatMap(sport =>
    generateNews(activeTier, sport.id).map(n => ({ ...n, sportName: sport.name, sportIcon: sport.icon }))
  );

  const filteredNews = filterCategory === 'all'
    ? allNews
    : allNews.filter(n => n.category === filterCategory);

  const categories = ['all', ...new Set(allNews.map(n => n.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h1 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight">
            News & Articles
          </h1>
        </div>
        <p className="text-muted-foreground text-sm">
          <span className={tierData?.color}>{tierData?.name}</span> · All Sports Coverage
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1.5 rounded font-mono text-xs font-semibold uppercase tracking-wider transition ${
              filterCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {filteredNews.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded p-6 md:p-8 mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-primary text-primary-foreground font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              Featured
            </span>
            <span className="text-primary font-mono text-[10px] uppercase tracking-widest">
              {filteredNews[0].sportIcon} {filteredNews[0].sportName}
            </span>
            <span className={`${tierData?.bg} text-background font-mono text-[9px] font-bold px-1.5 py-0.5 rounded`}>
              {activeTier}
            </span>
          </div>
          <h2 className="font-heading font-bold text-xl md:text-2xl leading-tight mb-3">
            {filteredNews[0].title}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-4 max-w-3xl">
            {filteredNews[0].summary}
          </p>
          <div className="flex items-center gap-4 text-muted-foreground text-xs">
            <div className="flex items-center gap-1.5">
              <User className="w-3 h-3" />
              <span>{filteredNews[0].author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>{filteredNews[0].readTime}</span>
            </div>
            <span className="text-primary font-mono text-[10px] uppercase">{filteredNews[0].category}</span>
          </div>
        </motion.div>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNews.slice(1).map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded p-5 hover:border-primary/30 transition-all group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary font-mono text-[10px] uppercase tracking-widest font-bold">
                {article.category}
              </span>
              <span className="text-muted-foreground text-[10px]">•</span>
              <span className="text-muted-foreground font-mono text-[10px]">
                {article.sportIcon} {article.sportName}
              </span>
            </div>
            <h3 className="font-heading font-bold text-sm leading-snug mb-2 group-hover:text-primary transition">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-3">
              {article.summary}
            </p>
            <div className="flex items-center justify-between text-muted-foreground text-[10px]">
              <span>{article.author}</span>
              <span>{article.readTime}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
