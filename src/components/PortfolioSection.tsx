import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteImages } from "@/lib/siteImages";

const projects = [
  {
    id: 1,
    location: "Barranquilla, 2026",
    number: "01/04",
    title: "CENTRO DE TV A MEDIDA",
    description:
      "Diseño y fabricacion de centro de entretenimiento funcional con acabados limpios, almacenamiento integrado y estilo contemporaneo.",
    accent: "Materiales: melamina premium, herrajes de alta resistencia y detalles personalizados.",
    note: "Proyecto residencial ejecutado por DISATME.",
    mainImage: siteImages.portfolio[0],
    sideImage: siteImages.portfolio[1],
  },
  {
    id: 2,
    location: "Barranquilla, 2026",
    number: "02/04",
    title: "COCINA Y COMPLEMENTOS",
    description:
      "Remodelacion de cocina con distribucion inteligente, paneles decorativos y mobiliario hecho a medida para optimizar cada espacio.",
    accent: "Acabados: lineas modernas, alta funcionalidad y estetica durable para uso diario.",
    note: "Proyecto de remodelacion y diseño interior por DISATME.",
    mainImage: siteImages.portfolio[2],
    sideImage: siteImages.portfolio[3],
  },
];

export function PortfolioSection() {
  const [current, setCurrent] = useState(0);
  const project = projects[current];

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="portfolio" className="bg-background px-6 md:px-12 lg:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            PROYECTOS
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground"
          >
            RESULTADOS QUE <span className="italic font-light">T</span>RANFORMAN
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Project info bar */}
            <div className="flex items-center justify-between mb-6 border-t border-border pt-4">
              <span className="text-[11px] tracking-[0.1em] text-muted-foreground">
                {project.location}
              </span>
              <span className="text-[11px] tracking-[0.1em] text-muted-foreground">
                {project.number}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main image */}
              <div className="lg:col-span-5 aspect-[4/3] overflow-hidden">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Project details */}
              <div className="lg:col-span-4 flex flex-col justify-between py-2">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground font-light">
                    {project.description}
                  </p>
                </div>
                <p className="text-[12px] text-muted-foreground/70 mt-6 font-light italic">
                  {project.accent}
                </p>
              </div>

              {/* Side image */}
              <div className="lg:col-span-3 aspect-square overflow-hidden">
                <img
                  src={project.sideImage}
                  alt={`${project.title} detail`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom note + navigation */}
            <div className="flex items-center justify-between mt-8 border-t border-border pt-6">
              <p className="text-[11px] text-muted-foreground font-light italic">
                {project.note}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft size={16} className="text-foreground" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight size={16} className="text-foreground" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
