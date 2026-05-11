import PageShell from "../components/PageShell";
import CommunitySection from "../components/CommunitySection";
import { gallery } from "../data/content";

export default function Community() {
  const photos = Object.values(gallery);
  return (
    <PageShell
      eyebrow="Community"
      title="A loose, large, kind community of outdoor people."
      description="Anglers and campers, hikers and cabin owners, beginners and lifers. Share a trip report, swap a fly pattern, or just read along."
    >
      <CommunitySection />
      <section className="container-x mt-12">
        <h2 className="font-serif text-3xl text-earth-50">From our members' camera rolls</h2>
        <div className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-4">
          {photos.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden">
              <img src={src} alt={`Member photo ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
