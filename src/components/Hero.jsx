import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Fish, Tent, Mountain, Compass } from "lucide-react";
import heroImg from "../assets/images/hero/mountain-lake-fishing.jpg";
import { stats } from "../data/content";
import { trackEvent } from "../utils/analytics";

function Counter({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1600;
    const animate = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden grain">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mountain lake at sunrise with mist rising over the water"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-forest-950/45 to-forest-950" />
        <div className="absolute inset-0 bg-mesh-forest opacity-50" />
      </motion.div>

      {[Fish, Tent, Mountain, Compass].map((Icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18, y: [0, -14, 0] }}
          transition={{ delay: 0.5 + i * 0.2, duration: 6 + i, repeat: Infinity }}
          style={{
            top: `${15 + i * 15}%`,
            left: `${8 + i * 22}%`,
          }}
          className="absolute hidden md:block text-earth-50"
        >
          <Icon size={36 + i * 6} />
        </motion.div>
      ))}

      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-end pb-24 md:pb-32">
        <div className="container-x w-full">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="uppercase tracking-[0.4em] text-xs md:text-sm text-sunset-300 mb-5"
          >
            A Premium Outdoor Adventure Magazine
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-earth-50 max-w-5xl"
          >
            Where the trail
            <br />
            <span className="text-sunset-400">starts the story.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-7 max-w-2xl text-lg md:text-xl text-earth-100 leading-relaxed"
          >
            Cinematic fishing guides, slow lake mornings, hard-tested gear, and
            wilderness essays for people who'd rather be outside.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/blog"
              onClick={() => trackEvent("cta_click", { item: "hero_read_stories" })}
              className="btn-primary"
            >
              Read the Stories
            </Link>
            <Link
              to="/fishing-guides"
              onClick={() => trackEvent("cta_click", { item: "hero_fishing" })}
              className="btn-ghost"
            >
              Explore Fishing Guides
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-5 py-4">
                <dt className="text-xs uppercase tracking-widest text-earth-200">{s.label}</dt>
                <dd className="mt-1 font-serif text-3xl text-sunset-300">
                  <Counter to={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.4, duration: 2.4, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-earth-200 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
