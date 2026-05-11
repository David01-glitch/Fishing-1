import { motion } from "framer-motion";
import { projects } from "../data/content";

export default function ProjectShowcase() {
  return (
    <section className="section bg-forest-900/40">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.32em] text-xs text-sunset-400">Field Notes</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-earth-50">
            Projects we've been on.
          </h2>
          <p className="mt-4 text-earth-200 leading-relaxed text-lg">
            Multi-day trips, cabin builds, gear audits, and small acts of
            stewardship. The kind of work we do when we're not behind a keyboard.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-3xl overflow-hidden h-80"
            >
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-earth-50">{p.title}</h3>
                <p className="text-earth-200 text-sm mt-1.5">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
