import PageShell from "../components/PageShell";
import ArticlesSection from "../components/ArticlesSection";

export default function Blog() {
  return (
    <PageShell
      eyebrow="The Magazine"
      title="Stories from the water, the trail, and the cabin porch."
      description="Long-form essays, reported fishing guides, gear we tested, and dispatches from members. New writing every week."
    >
      <ArticlesSection />
    </PageShell>
  );
}
