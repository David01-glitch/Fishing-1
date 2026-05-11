import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { useSEO } from "../utils/seo";

export default function NotFound() {
  useSEO({ title: "404 — Off-trail", description: "The page you're looking for has wandered off the trail." });
  return (
    <main className="min-h-[80vh] grid place-items-center pt-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Compass size={64} className="mx-auto text-sunset-400 animate-float" />
        <p className="mt-6 uppercase tracking-[0.4em] text-xs text-sunset-300">404</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl text-earth-50">You're off-trail.</h1>
        <p className="mt-5 text-earth-200 max-w-md mx-auto">
          The page you were looking for wandered off into the woods. Let's head
          back to the trailhead and try again.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/blog" className="btn-ghost">Read the Magazine</Link>
        </div>
      </motion.div>
    </main>
  );
}
