import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="uppercase tracking-[0.32em] text-xs text-sunset-400">Frequently asked</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-earth-50 leading-tight">
            Questions from the trailhead.
          </h2>
          <p className="mt-5 text-earth-200 text-lg leading-relaxed">
            The most common things readers ask before their first fishing trip,
            their first campout, or their first overnight on the trail.
          </p>
        </div>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = i === open;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-lg md:text-xl text-earth-50">{f.q}</span>
                  <Plus
                    size={20}
                    className={`shrink-0 mt-1 transition-transform ${isOpen ? "rotate-45 text-sunset-400" : "text-earth-200"}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-earth-200 leading-relaxed pr-10">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
