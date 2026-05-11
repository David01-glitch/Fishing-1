import { useLocation, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import { categories, articles } from "../data/content";
import { Clock, Mountain, Calendar, ArrowRight } from "lucide-react";

export default function CategoryPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return <Navigate to="/404" replace />;

  const related = articles.slice(0, 3);

  return (
    <PageShell eyebrow={cat.tagline} title={cat.title} description={cat.intro} hero={cat.image}>
      <section className="container-x grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-earth-50">What you'll learn</h2>
            <ul className="mt-4 space-y-3 text-earth-200 leading-relaxed">
              {cat.tips.map((t) => (
                <li key={t} className="flex gap-3"><span className="text-sunset-400 mt-1">▸</span><span>{t}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-earth-50">Gear we recommend</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.gear.map((g) => (
                <li key={g} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-earth-100">{g}</li>
              ))}
            </ul>
          </div>

          <div className="glass-dark rounded-3xl p-7">
            <h2 className="font-serif text-2xl text-earth-50">Notes from the field</h2>
            <p className="mt-3 text-earth-200 leading-relaxed">
              {cat.intro} Beyond the basics, the best practitioners in {cat.title.toLowerCase()}
              share three traits: patience, observation, and a willingness to be wrong about the weather.
              We've found that the most rewarding trips begin with a conservative plan and end with a story
              that wasn't in the plan at all.
            </p>
            <p className="mt-3 text-earth-200 leading-relaxed">
              Whether you're brand new or twenty seasons in, treat every outing as fieldwork. Take notes.
              Photograph the conditions. Compare seasons. Your own logbook will eventually be more useful
              than any guide we could write.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="glass rounded-3xl p-6 space-y-4">
            <Meta icon={<Clock size={16} />} label="Duration" value={cat.duration} />
            <Meta icon={<Mountain size={16} />} label="Difficulty" value={cat.difficulty} />
            <Meta icon={<Calendar size={16} />} label="Best seasons" value={cat.seasons} />
          </div>
          <Link to="/blog" className="btn-primary w-full justify-center">Read related stories <ArrowRight size={16} /></Link>
        </aside>
      </section>

      <section className="container-x mt-20">
        <h2 className="font-serif text-3xl text-earth-50">Related reading</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((a) => (
            <Link key={a.id} to="/blog" className="block glass-dark rounded-3xl overflow-hidden group">
              <div className="h-44 overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-sunset-300">{a.tag}</p>
                <h3 className="mt-2 font-serif text-lg text-earth-50 leading-tight">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function Meta({ icon, label, value }) {
  return (
    <div>
      <div className="text-sunset-400 flex items-center gap-1.5">{icon}<span className="text-[10px] uppercase tracking-widest">{label}</span></div>
      <div className="mt-1 text-earth-50 text-sm">{value}</div>
    </div>
  );
}
