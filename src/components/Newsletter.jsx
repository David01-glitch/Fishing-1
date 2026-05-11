import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import heroLake from "../assets/images/hero/lake-sunrise.jpg";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    trackEvent("newsletter_signup", { location: "home_section" });
    setSent(true);
    setEmail("");
  };

  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden glass-dark grain"
        >
          <img src={heroLake} alt="Lake at sunrise" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/85 to-lake-900/40" />
          <div className="relative z-10 p-10 md:p-16 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunset-500/20 text-sunset-300 text-xs uppercase tracking-widest">
                <Mail size={14} /> Trail Notes
              </div>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl text-earth-50 leading-[1.05]">
                A slow newsletter for outdoor people.
              </h2>
              <p className="mt-5 text-earth-100 text-lg leading-relaxed">
                Once a week. Trip reports, fly patterns we've been tying, lake
                lifts and lows, and the occasional photo essay. No clickbait,
                no affiliate spam.
              </p>
            </div>

            <form onSubmit={submit} className="glass rounded-2xl p-6 md:p-8">
              <label htmlFor="news-email" className="text-sm text-earth-200">
                Your email
              </label>
              <input
                id="news-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@wilderness.com"
                className="mt-2 w-full px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-earth-50 placeholder:text-earth-200 focus:outline-none focus:border-sunset-400"
              />
              <button type="submit" className="mt-4 w-full btn-primary justify-center">
                Subscribe <Send size={16} />
              </button>
              {sent && <p className="mt-3 text-sunset-300 text-sm">Welcome aboard. Check your inbox for a hello.</p>}
              <p className="mt-3 text-xs text-earth-200">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
