import PageShell from "../components/PageShell";
import { tutorials } from "../data/content";
import { Play, Clock } from "lucide-react";

export default function Tutorials() {
  return (
    <PageShell
      eyebrow="Tutorials"
      title="Short videos, clear instructions, outdoor skills that stick."
      description="Tying knots, building fires, pitching tents in wind — the small skills that turn a rough trip into a story."
    >
      <section className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((t) => (
          <article key={t.title} className="glass-dark rounded-3xl overflow-hidden group">
            <div className="relative h-56 overflow-hidden">
              <img src={t.image} alt={t.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-forest-950/40 grid place-items-center">
                <span className="h-16 w-16 rounded-full bg-sunset-500 text-forest-950 grid place-items-center shadow-glass">
                  <Play size={26} className="ml-1" />
                </span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-forest-950/80 text-xs text-earth-50 flex items-center gap-1">
                <Clock size={11} /> {t.duration}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-earth-50">{t.title}</h3>
              <p className="mt-2 text-earth-200 text-sm leading-relaxed">{t.desc}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="container-x mt-20 max-w-3xl">
        <h2 className="font-serif text-3xl text-earth-50">More coming this season</h2>
        <p className="mt-4 text-earth-200 leading-relaxed">
          We're filming new tutorials through summer: stove-top trout recipes,
          reading topo maps, basic kayak strokes, lakeshore plant ID, and how to
          actually use a topographic compass when the GPS dies.
        </p>
      </section>
    </PageShell>
  );
}
