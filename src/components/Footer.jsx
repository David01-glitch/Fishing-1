import { Link } from "react-router-dom";
import { Fish, Mail, MapPin, Instagram, Youtube, Facebook, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../utils/analytics";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    trackEvent("newsletter_signup", { location: "footer" });
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer className="relative bg-forest-950 border-t border-white/10 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-10 w-10 rounded-2xl bg-gradient-to-br from-forest-500 to-lake-500 grid place-items-center">
              <Fish size={20} className="text-earth-50" />
            </span>
            <span className="font-serif text-xl">Fishing &amp; Outdoor Club</span>
          </div>
          <p className="mt-5 text-earth-200 text-sm leading-relaxed">
            A premium outdoor adventure and nature lifestyle magazine. Cinematic
            stories, expert guides, gear we trust, and the wilderness we love.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-earth-200">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1 text-sunset-400" />
              <a href="mailto:fishingoutdoorclub@gmail.com" className="hover:text-white">
                fishingoutdoorclub@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 text-sunset-400" />
              <span>89 Lakeview Blvd, Denver, CO 80201, USA</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-earth-50 text-sm font-semibold uppercase tracking-widest">
            Explore
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              ["Fishing Guides", "/fishing-guides"],
              ["Camping Tips", "/camping-tips"],
              ["Outdoor Gear", "/outdoor-gear"],
              ["Lake Adventures", "/lake-adventures"],
              ["Hiking Trails", "/hiking-trails"],
              ["Survival Skills", "/survival-skills"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="text-earth-200 hover:text-sunset-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-earth-50 text-sm font-semibold uppercase tracking-widest">
            Magazine
          </h4>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Blog", "/blog"],
              ["Tutorials", "/tutorials"],
              ["Community", "/community"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="text-earth-200 hover:text-sunset-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-earth-50 text-sm font-semibold uppercase tracking-widest">
            Trail Notes Newsletter
          </h4>
          <p className="mt-5 text-earth-200 text-sm">
            Weekly fishing reports, gear we tested, and the wild places we wandered.
          </p>
          <form onSubmit={submit} className="mt-4 flex gap-2">
            <label className="sr-only" htmlFor="footer-email">Email</label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@wilderness.com"
              className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-sm text-earth-50 placeholder:text-earth-200 focus:outline-none focus:border-sunset-400"
            />
            <button type="submit" aria-label="Subscribe" className="btn-primary p-2.5">
              <Send size={16} />
            </button>
          </form>
          {sent && <p className="mt-3 text-sunset-300 text-sm">Welcome to the club.</p>}
          <div className="mt-6 flex items-center gap-3 text-earth-200">
            {[Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={`Social ${i}`}
                className="h-9 w-9 rounded-full grid place-items-center bg-white/5 hover:bg-white/10 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-earth-200">
          <p>© {new Date().getFullYear()} Fishing &amp; Outdoor Club. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link to="/refund" className="hover:text-white">Refund</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
