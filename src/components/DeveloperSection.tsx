import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolioUrl = "https://portfoliojuliandpr0809.vercel.app/";

export function DeveloperSection() {
  return (
    <section className="bg-background px-6 md:px-12 lg:px-16 py-16 md:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              DESARROLLO WEB
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-foreground"
            >
              Sitio creado por
              <br />
              <span className="italic font-light">m</span>i portafolio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-xl text-[13px] leading-relaxed text-muted-foreground font-light"
            >
              Si quieres ver más proyectos, experiencias y trabajos web, puedes
              visitar mi portafolio personal desde el enlace de abajo.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex lg:justify-end"
          >
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-xs tracking-[0.16em] text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              VER PORTAFOLIO
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}