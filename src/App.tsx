import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components/navigation/Navbar';
import { FloatingNav } from '@/components/navigation/FloatingNav';
import { Footer } from '@/components/shared/Footer';
import { LoadingScreen } from '@/components/loading/LoadingScreen';
import { PageTransition } from '@/components/loading/PageTransition';
import { useScrollToTop } from '@/hooks/useScrollToTop';

import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Services from '@/pages/Services/Services';
import Contact from '@/pages/Contact/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Initial branded loading screen (0.8–1.2s).
  useEffect(() => {
    let p = 0;
    const int = setInterval(() => {
      p = Math.min(p + Math.random() * 22 + 8, 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(int);
        setTimeout(() => setLoading(false), 300);
      }
    }, 130);
    return () => clearInterval(int);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen progress={progress} />}</AnimatePresence>

      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatingNav />
    </>
  );
}
