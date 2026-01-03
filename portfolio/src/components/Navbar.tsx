"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Обо мне", href: "#about" },
  { name: "Проекты", href: "#projects" },
  { name: "Навыки", href: "#skills" },
  { name: "Связаться", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrollingRef = useRef(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = useCallback((href: string) => {
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (!element) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setActiveSection(id);
    setMobileMenuOpen(false);
    isScrollingRef.current = true;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 70;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let startTime: number | null = null;

    const easeOutQuad = (t: number): number => t * (2 - t);

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeOutQuad(progress));
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animation);
      } else {
        isScrollingRef.current = false;
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animation);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[9999] px-4 py-3"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
          <Link href="/" className="flex items-center gap-2 text-white md:absolute md:left-4">
            <span className="text-primary font-bold text-lg">/</span>
            <span className="text-xs font-medium">kusbxd</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08]">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-150 ${
                  activeSection === item.href.slice(1)
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] text-white/70"
          >
            {mobileMenuOpen ? <HiX className="text-lg" /> : <HiMenu className="text-lg" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9998] bg-[#0a0a0a] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-2xl font-medium ${
                    activeSection === item.href.slice(1) ? "text-primary" : "text-white/60"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
