import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { updateConsent, trackEvent } from "../utils/analytics";

const KEY = "foc_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (!stored) setVisible(true);
    else if (stored === "granted") updateConsent(true);
    else updateConsent(false);
  }, []);

  const choose = (granted) => {
    localStorage.setItem(KEY, granted ? "granted" : "denied");
    updateConsent(granted);
    trackEvent("cookie_consent", { granted });
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-50"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="glass-dark rounded-2xl shadow-glass max-w-5xl mx-auto p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="text-sunset-400 shrink-0 mt-1" size={26} />
              <p className="text-sm md:text-base text-earth-100">
                We use cookies to analyze traffic and improve your outdoor reading
                experience. Read our{" "}
                <Link to="/privacy" className="underline text-sunset-300 hover:text-sunset-200">
                  Privacy Policy
                </Link>
                . You may accept or decline analytics cookies.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => choose(false)}
                className="btn-ghost text-sm"
                aria-label="Decline cookies"
              >
                Decline
              </button>
              <button
                onClick={() => choose(true)}
                className="btn-primary text-sm"
                aria-label="Accept cookies"
              >
                Accept
              </button>
              <button
                onClick={() => setVisible(false)}
                className="text-earth-200 hover:text-white p-1"
                aria-label="Close banner"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
