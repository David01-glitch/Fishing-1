// Google Analytics + Consent Mode v2 helpers
const GA_ID = "G-4J046JXWVC";

export function gtag(...args) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments[0] === undefined ? [] : args);
}

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  try {
    window.gtag("event", name, params);
  } catch (_) {}
}

export function trackPageView(path) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  try {
    window.gtag("config", GA_ID, {
      page_path: path,
      page_title: document.title,
    });
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    });
  } catch (_) {}
}

export function updateConsent(granted) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const state = granted ? "granted" : "denied";
  try {
    window.gtag("consent", "update", {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  } catch (_) {}
}
