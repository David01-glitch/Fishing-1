import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Share2, Clock, User, Tag, ChevronDown } from "lucide-react";
import { articles } from "../data/content";
import { trackEvent } from "../utils/analytics";

const TAGS = ["All", "Fishing", "Lake Life", "Survival", "Gear", "Skills", "Reflection"];

export default function ArticlesSection({ compact = false }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [visible, setVisible] = useState(compact ? 3 : 4);
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const okTag = tag === "All" || a.tag === tag;
      const okQ =
        !query ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase());
      return okTag && okQ;
    });
  }, [query, tag]);

  return (
    <section id="articles" className="section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.32em] text-xs text-sunset-400">Trending</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-earth-50">
              Editorial dispatches from the field.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center w-full md:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-200" />
              <input
                type="search"
                placeholder="Search articles…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-earth-50 placeholder:text-earth-200 focus:outline-none focus:border-sunset-400"
                aria-label="Search articles"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border transition-colors ${
                tag === t
                  ? "bg-sunset-500 border-sunset-500 text-forest-950"
                  : "border-white/10 text-earth-100 hover:border-white/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filtered.slice(0, visible).map((a) => {
            const isOpen = openId === a.id;
            return (
              <motion.article
                key={a.id}
                layout
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-dark rounded-3xl overflow-hidden"
              >
                <div className="relative h-60 overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105" loading="lazy" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-950/70 text-xs uppercase tracking-widest text-sunset-300 flex items-center gap-1">
                    <Tag size={12} /> {a.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-earth-50 leading-tight">{a.title}</h3>
                  <p className="mt-3 text-earth-200 leading-relaxed">{a.excerpt}</p>
                  <div className="mt-5 flex items-center gap-5 text-xs text-earth-200">
                    <span className="flex items-center gap-1.5"><User size={12} />{a.author}</span>
                    <span>{a.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} />{a.readTime}</span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-white/10 text-earth-100 leading-relaxed whitespace-pre-line">
                          {a.body}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => {
                        const next = isOpen ? null : a.id;
                        setOpenId(next);
                        trackEvent("article_expand", { id: a.id, expanded: !isOpen });
                      }}
                      className="text-sm text-sunset-300 hover:text-sunset-200 flex items-center gap-1"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Show Less" : "Read More"}
                      <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <button
                      onClick={() => {
                        trackEvent("article_share", { id: a.id });
                        if (navigator.share) {
                          navigator.share({ title: a.title, text: a.excerpt, url: window.location.href }).catch(() => {});
                        }
                      }}
                      className="p-2 rounded-full hover:bg-white/10 text-earth-200"
                      aria-label="Share article"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {visible < filtered.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisible((v) => v + 2)}
              className="btn-ghost"
            >
              Load More Stories
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
