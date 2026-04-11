"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Magnetic from "./Magnetic";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Leadership", href: "/leadership" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest - lastScrollY;
    
    // Determine visibility based on direction
    if (latest < 100) {
      setVisible(true);
    } else if (direction > 10) { // Scrolling down
      setVisible(false);
    } else if (direction < -10) { // Scrolling up
      setVisible(true);
    }

    setScrolled(latest > 50);
    setLastScrollY(latest);
  });

  const isLightPage = ["/", "/about", "/leadership", "/portfolio", "/contact", "/companies"].includes(pathname);
  const isTransparent = !scrolled && isLightPage;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? (scrolled ? 24 : 0) : 0,
        opacity: visible ? 1 : 0,
        width: scrolled ? "auto" : "100%",
        maxWidth: scrolled ? "1200px" : "100%",
        borderRadius: scrolled ? "100px" : "0px",
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-[200] transition-all duration-700 ease-in-out left-1/2 -translate-x-1/2 flex items-center ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,18,51,0.05)] border border-dark/5 px-8 h-16"
          : "w-full bg-[#FAF9F6] h-20 px-6 md:px-14 border-b border-dark/5"
        }`}
    >
      <div className={`mx-auto flex justify-between items-center w-full ${scrolled ? "" : "max-w-[1400px]"}`}>
        
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-dark/70 hover:text-dark transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-dark transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href="/" className="flex justify-center flex-1">
          <motion.div
            animate={{ scale: scrolled ? 0.8 : 1 }}
            className="relative w-32 h-8 md:w-40 md:h-10"
          >
            <Image
              src="/logo.png"
              alt="RISEMATE Logo"
              fill
              className="object-contain"
              priority
              unoptimized={true}
            />
          </motion.div>
        </Link>

        {/* Right Links & CTA */}
        <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/70 hover:text-dark transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-dark/10" />
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#002366] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-dark transition-all duration-500 shadow-lg shadow-[#002366]/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-dark text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </motion.nav>
  );
}
