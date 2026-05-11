import { motion } from "framer-motion";
import heroForest from "../assets/images/hero/forest-cinematic.jpg";

export default function FounderStory() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-glass"
        >
          <img src={heroForest} alt="Founder hiking through evergreen forest" className="w-full h-[520px] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
            <p className="text-sm text-earth-100">
              "We started this magazine because we got tired of outdoor writing
              that felt like marketing. The wilderness deserves better."
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-sunset-300">
              Marlow Hayes — Founder
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="uppercase tracking-[0.32em] text-xs text-sunset-400">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-earth-50 leading-tight">
            A magazine built from cold rivers and long nights under the stars.
          </h2>
          <div className="mt-6 space-y-5 text-earth-200 text-lg leading-relaxed">
            <p>
              Fishing &amp; Outdoor Club began on a small dock in Colorado in 2011,
              when a fly fisherman, a cabin builder, and a cartographer started
              swapping notes after a slow week of bluebird trout. We were tired of
              outdoor magazines that paywalled the good stuff and sponsored the rest.
            </p>
            <p>
              Fourteen years later, we publish reported guides, honest gear reviews,
              and slow wilderness essays for readers who'd rather be outside than
              scrolling. Every story is field-tested. Every trail is walked. Every
              piece of gear is used hard before we write about it.
            </p>
            <p>
              We believe in shared water, public land, and the kind of community that
              keeps a lake clean without being asked. We believe in mentoring new
              campers, returning fish carefully, and leaving the trail better than we
              found it. We hope you'll join us — out there.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
