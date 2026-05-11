import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { members } from "../data/content";

export default function CommunitySection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.32em] text-xs text-sunset-400">Community</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-earth-50">
            From readers, by the water.
          </h2>
          <p className="mt-4 text-earth-200 text-lg leading-relaxed">
            A community of 90,000+ campers, anglers, hikers, and lake-cabin
            dwellers across North America. Real stories from real members.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.figure
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-dark rounded-3xl p-6"
            >
              <Quote className="text-sunset-400" size={22} />
              <blockquote className="mt-4 text-earth-100 leading-relaxed">
                "{m.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={m.image} alt={m.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="text-earth-50 text-sm">{m.name}</div>
                  <div className="text-earth-200 text-xs">{m.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
