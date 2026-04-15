import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/siteImages";
import { Navbar } from "./Navbar";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={siteImages.hero}
          alt="Proyecto de remodelacion de DISATME en Barranquilla"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-warm-dark/55" />
      </div>

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-[#F6F0E6] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
          >
            REMODELAMOS.
            <br />
            <span className="italic">D</span>ISEÑAMOS.
            <br />
            FABRICAMOS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 max-w-sm text-[13px] leading-relaxed text-[#E8DDCF]/90 font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)]"
          >
            En DISATME transformamos espacios en
            soluciones reales para hogares y empresas.
            Diseño interior, remodelacion y fabricacion
            de mobiliario a tu medida en Barranquilla.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8 inline-flex items-center gap-3 group"
          >
            <span className="text-xs tracking-[0.15em] text-[#F6F0E6]/90 group-hover:text-[#F6F0E6] transition-colors drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)]">
              COTIZAR PROYECTO
            </span>
            <span className="w-8 h-px bg-[#F6F0E6]/45 group-hover:w-12 transition-all duration-300" />
            <ArrowRight size={14} className="text-[#F6F0E6]/70" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
