import { motion } from "framer-motion";
import { useSEO } from "../utils/seo";

export default function PageShell({ title, description, eyebrow, children, hero }) {
  useSEO({ title: `${title} — Fishing & Outdoor Club`, description });
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pt-32 pb-10"
    >
      <header className="container-x mb-12">
        {eyebrow && (
          <p className="uppercase tracking-[0.32em] text-xs text-sunset-400 mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-6xl text-earth-50 max-w-3xl leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-earth-200 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        {hero && (
          <div className="mt-10 rounded-3xl overflow-hidden shadow-glass relative">
            <img src={hero} alt={title} className="w-full h-[36vh] md:h-[52vh] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent" />
          </div>
        )}
      </header>
      {children}
    </motion.main>
  );
}
