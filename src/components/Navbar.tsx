import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/new_img/LOGO.png";

const navLinks = [
  { label: "NOSOTROS", href: "#about" },
  { label: "PROYECTOS", href: "#portfolio" },
  { label: "SERVICIOS", href: "#services" },
  { label: "GALERIA", href: "#journal" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 py-6">
      <div className="flex items-center justify-between">
        <a href="#" className="inline-flex items-center">
          <img src={logoImage} alt="Logo DISATME" className="h-11 w-auto md:h-12" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] tracking-[0.15em] text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/disatme_/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block text-[11px] tracking-[0.15em] text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
        >
          INSTAGRAM
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Thin gold line under nav */}
      <div className="mt-4 h-px bg-primary-foreground/20" />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-warm-dark/95 backdrop-blur-md px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {[...navLinks, { label: "CONTACTO", href: "#contact" }].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.15em] text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/disatme_/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-[0.15em] text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                INSTAGRAM
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
