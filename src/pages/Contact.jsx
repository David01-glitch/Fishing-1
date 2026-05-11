import { useState } from "react";
import PageShell from "../components/PageShell";
import { Mail, MapPin, Phone, Send, Instagram, Youtube, Twitter } from "lucide-react";
import { trackEvent } from "../utils/analytics";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    trackEvent("contact_submit", { subject: form.subject });
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <PageShell
      eyebrow="Contact"
      title="Send us a line. We answer everything."
      description="Pitch a story, ask for trail beta, send us a trip report, or just say hello. We read every email."
    >
      <section className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="glass-dark rounded-3xl p-7">
            <Mail className="text-sunset-400" size={22} />
            <h3 className="mt-4 font-serif text-xl text-earth-50">Email</h3>
            <a href="mailto:fishingoutdoorclub@gmail.com" className="block mt-2 text-earth-200 hover:text-white break-all">
              fishingoutdoorclub@gmail.com
            </a>
          </div>
          <div className="glass-dark rounded-3xl p-7">
            <MapPin className="text-sunset-400" size={22} />
            <h3 className="mt-4 font-serif text-xl text-earth-50">Office</h3>
            <p className="mt-2 text-earth-200">
              89 Lakeview Blvd<br />Denver, CO 80201<br />USA
            </p>
          </div>
          <div className="glass-dark rounded-3xl p-7">
            <Phone className="text-sunset-400" size={22} />
            <h3 className="mt-4 font-serif text-xl text-earth-50">Hours</h3>
            <p className="mt-2 text-earth-200">Mon — Fri, 9am – 5pm MT.<br />Closed weekends because we're outside.</p>
          </div>
          <div className="glass-dark rounded-3xl p-7">
            <h3 className="font-serif text-xl text-earth-50">Find us elsewhere</h3>
            <div className="mt-4 flex items-center gap-3">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label={`Social ${i}`} className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center text-earth-200 hover:text-white">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="glass-dark rounded-3xl p-7 md:p-10">
          {sent ? (
            <div className="text-center py-12">
              <h3 className="font-serif text-3xl text-earth-50">Message received.</h3>
              <p className="mt-3 text-earth-200">We'll write back within two business days.</p>
              <button onClick={() => setSent(false)} className="btn-ghost mt-6 text-sm">Send another</button>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-2xl text-earth-50">Write to us</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Input label="Your name" required value={form.name} onChange={update("name")} />
                <Input label="Email" type="email" required value={form.email} onChange={update("email")} />
              </div>
              <Input label="Subject" required className="mt-4" value={form.subject} onChange={update("subject")} />
              <div className="mt-4">
                <label className="text-sm text-earth-200">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  className="mt-2 w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-earth-50 placeholder:text-earth-200 focus:outline-none focus:border-sunset-400"
                />
              </div>
              <button type="submit" className="btn-primary mt-6">Send Message <Send size={16} /></button>
            </>
          )}
        </form>
      </section>

      <section className="container-x mt-16">
        <div className="rounded-3xl overflow-hidden glass-dark">
          <div className="aspect-[16/7] bg-lake-900 grid place-items-center text-earth-200 relative">
            <div className="absolute inset-0 bg-mesh-forest opacity-50" />
            <div className="relative text-center">
              <MapPin className="mx-auto text-sunset-400" size={28} />
              <p className="mt-3 text-earth-100">89 Lakeview Blvd, Denver, CO 80201</p>
              <p className="text-earth-200 text-sm">Visit our editorial cabin by appointment.</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Input({ label, className = "", ...rest }) {
  return (
    <div className={className}>
      <label className="text-sm text-earth-200">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-earth-50 placeholder:text-earth-200 focus:outline-none focus:border-sunset-400"
      />
    </div>
  );
}
