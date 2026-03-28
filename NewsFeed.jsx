import { generateNews } from "@/lib/sportsData";
import { motion } from "framer-motion";
import { Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsFeed({ tier, sport }) {
  const news = generateNews(tier, sport);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-xl uppercase tracking-tight">
          Latest News
        </h2>
        <Link to="/news" className="flex items-center gap-1 text-primary text-xs font-mono uppercase tracking-wider hover:underline">
          View All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.slice(0, 4).map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/news/${article.id}`}
              className="block bg-card border border-border rounded p-5 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary font-mono text-[10px] uppercase tracking-widest font-bold">
                  {article.category}
                </span>
                <span className="text-muted-foreground text-[10px]">•</span>
                <span className="text-muted-foreground font-mono text-[10px]">
                  {article.tierLabel}
                </span>
              </div>

              <h3 className="font-heading font-bold text-base leading-snug mb-2 group-hover:text-primary transition">
                {article.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                {article.summary}
              </p>

              <div className="flex items-center justify-between text-muted-foreground text-xs">
                <div className="flex items-center gap-1.5">
                  <User className="w-3 h-3" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
