import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Tutorials from "./pages/Tutorials";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import { Privacy, Terms, Refund } from "./pages/Legal";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/fishing-guides" element={<CategoryPage />} />
          <Route path="/camping-tips" element={<CategoryPage />} />
          <Route path="/outdoor-gear" element={<CategoryPage />} />
          <Route path="/lake-adventures" element={<CategoryPage />} />
          <Route path="/hiking-trails" element={<CategoryPage />} />
          <Route path="/survival-skills" element={<CategoryPage />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <CookieBanner />
    </>
  );
}
