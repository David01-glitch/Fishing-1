import PageShell from "../components/PageShell";
import heroForest from "../assets/images/hero/forest-cinematic.jpg";
import m1 from "../assets/images/community/member-1.jpg";
import m2 from "../assets/images/community/member-2.jpg";
import m3 from "../assets/images/community/member-3.jpg";

const team = [
  { name: "Marlow Hayes", role: "Founder & Editor", image: m1, bio: "Fly fisherman, mapmaker, lifelong wanderer of the Rockies." },
  { name: "Iris Tan", role: "Lake & Cabin Editor", image: m3, bio: "Writes about slow mornings, cold coffee, and the loons." },
  { name: "Sage Vance", role: "Survival Editor", image: m2, bio: "Wilderness EMT, decade in grizzly country, calm in a storm." },
];

export default function About() {
  return (
    <PageShell
      eyebrow="About"
      title="A small magazine, made by people who'd rather be outside."
      description="We started Fishing & Outdoor Club in 2011 to publish the kind of outdoor writing we wanted to read — honest, slow, and based on hours on the water."
      hero={heroForest}
    >
      <section className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-earth-50">Our mission</h2>
          <p className="mt-4 text-earth-200 leading-relaxed">
            We publish field-tested fishing guides, camping how-tos, survival
            skills, gear reviews, and slow nature writing for a community of
            people who measure their week by miles walked, fish released, and
            nights under canvas.
          </p>
          <p className="mt-4 text-earth-200 leading-relaxed">
            Our work is reader-supported and ad-light. We don't run sponsored
            "reviews" — when we like a thing, we say so, and when we don't, we
            say that too. We protect our editorial line because it's the only
            thing our readers actually pay us for.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-earth-50">What we value</h2>
          <ul className="mt-4 space-y-3 text-earth-200 leading-relaxed">
            <li>• Public land. Shared water. Local stewardship.</li>
            <li>• Catch-and-release, when it's the right call.</li>
            <li>• Honest gear reviews. No paid placements.</li>
            <li>• Beginner-friendly guides without being condescending.</li>
            <li>• Leave No Trace as a baseline, not a goal.</li>
            <li>• Slow writing about places worth visiting twice.</li>
          </ul>
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="font-serif text-3xl text-earth-50">The team</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="glass-dark rounded-3xl p-6">
              <img src={t.image} alt={t.name} className="h-20 w-20 rounded-full object-cover" loading="lazy" />
              <h3 className="mt-4 font-serif text-xl text-earth-50">{t.name}</h3>
              <p className="text-sunset-300 text-xs uppercase tracking-widest mt-1">{t.role}</p>
              <p className="mt-3 text-earth-200 text-sm leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20 max-w-3xl">
        <h2 className="font-serif text-3xl text-earth-50">How we make money</h2>
        <p className="mt-4 text-earth-200 leading-relaxed">
          Reader-supported subscriptions, a tightly-curated outdoor gear shop, and
          a small number of carefully-vetted brand partnerships clearly marked as
          sponsored. Editorial and commerce stay separate. Reviews are never
          influenced by advertising.
        </p>
      </section>
    </PageShell>
  );
}
