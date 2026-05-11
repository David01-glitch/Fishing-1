import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Mountain, Calendar, X } from "lucide-react";
import { categories } from "../data/content";
import { trackEvent } from "../utils/analytics";

export default function CategoryGrid() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="categories" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.32em] text-xs text-sunset-400">Featured</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-earth-50">
            Six worlds to wander.
          </h2>
          <p className="mt-4 text-earth-200 text-lg leading-relaxed">
            Real guides, tested gear, and the small details that turn a weekend
            into a memory. Click any category to expand the full briefing.
          </p>
        </div>

        <LayoutGroup>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const isOpen = openId === c.slug;
              return (
                <motion.article
                  key={c.slug}
                  layout
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-3xl overflow-hidden glass-dark group ${
                    isOpen ? "lg:col-span-3 md:col-span-2" : ""
                  }`}
                >
                  <motion.div layout="position" className={`relative overflow-hidden ${isOpen ? "h-72 md:h-[420px]" : "h-64"}`}>
                    <motion.img
                      layoutId={`cat-img-${c.slug}`}
                      src={c.image}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.h3 layoutId={`cat-title-${c.slug}`} className="font-serif text-2xl md:text-3xl text-earth-50">
                        {c.title}
                      </motion.h3>
                      <p className="text-sunset-300 text-sm mt-1">{c.tagline}</p>
                    </div>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 md:p-10 grid gap-8 md:grid-cols-2">
                          <div>
                            <p className="text-earth-100 leading-relaxed text-base">{c.intro}</p>
                            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                              <Meta icon={<Clock size={16} />} label="Duration" value={c.duration} />
                              <Meta icon={<Mountain size={16} />} label="Difficulty" value={c.difficulty} />
                              <Meta icon={<Calendar size={16} />} label="Seasons" value={c.seasons} />
                            </div>
                          </div>
                          <div className="grid gap-6">
                            <div>
                              <h4 className="text-sm uppercase tracking-widest text-sunset-300">Tips</h4>
                              <ul className="mt-3 space-y-2">
                                {c.tips.map((t) => (
                                  <li key={t} className="text-earth-100 text-sm flex gap-2">
                                    <span className="text-sunset-400 mt-1">▸</span>
                                    <span>{t}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm uppercase tracking-widest text-sunset-300">Gear checklist</h4>
                              <ul className="mt-3 flex flex-wrap gap-2">
                                {c.gear.map((g) => (
                                  <li key={g} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-earth-100">
                                    {g}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="px-6 md:px-10 pb-6 flex flex-wrap gap-3">
                          <Link
                            to={`/${c.slug}`}
                            onClick={() => trackEvent("cta_click", { item: "category_full_page", slug: c.slug })}
                            className="btn-primary text-sm"
                          >
                            View Full Page <ArrowRight size={16} />
                          </Link>
                          <button
                            onClick={() => {
                              setOpenId(null);
                              trackEvent("hobby_expand", { slug: c.slug, action: "collapse" });
                            }}
                            className="btn-ghost text-sm"
                          >
                            <X size={16} /> Show Less
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="px-6 pb-6 pt-1"
                      >
                        <button
                          onClick={() => {
                            setOpenId(c.slug);
                            trackEvent("hobby_expand", { slug: c.slug, action: "expand" });
                          }}
                          className="text-sm text-earth-100 hover:text-sunset-300 flex items-center gap-1"
                          aria-expanded={isOpen}
                        >
                          Explore <ArrowRight size={14} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

function Meta({ icon, label, value }) {
  return (
    <div>
      <div className="text-sunset-400 flex items-center gap-1">
        {icon}
        <span className="text-[10px] uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-earth-50 mt-1 text-sm">{value}</div>
    </div>
  );
}
