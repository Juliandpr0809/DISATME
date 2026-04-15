import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteImages } from "@/lib/siteImages";

export function AboutSection() {
  return (
    <section id="about" className="bg-background px-6 md:px-12 lg:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
        >
          NOSOTROS
        </motion.span>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Title + Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-foreground"
            >
              <span className="italic font-light">D</span>ISEÑO Y
              <br />
              REMODELACION A TU MEDIDA
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-[13px] leading-relaxed text-muted-foreground max-w-md font-light"
            >
              Somos DISATME, una empresa de Barranquilla, Colombia,
              especializada en remodelaciones, diseño de interiores y
              fabricacion de mobiliario. Cada proyecto se desarrolla de
              forma personalizada para lograr espacios funcionales,
              modernos y duraderos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex items-center gap-6"
            >
              <a
                href="https://www.instagram.com/disatme_/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <span className="text-xs tracking-[0.15em] text-foreground group-hover:text-muted-foreground transition-colors">
                  VER INSTAGRAM
                </span>
              </a>

              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronLeft size={14} className="text-foreground" />
                </button>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronRight size={14} className="text-foreground" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={siteImages.about[0]}
                alt="Sculptural interior design"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="aspect-[3/4] overflow-hidden mt-8"
            >
              <img
                src={siteImages.about[1]}
                alt="Cozy modern bedroom"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
