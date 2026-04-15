import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/siteImages";

const services = [
  {
    num: "01",
    title: "REMODELACION INTEGRAL",
    desc: "Transformamos cocinas, salas, habitaciones y espacios comerciales con acabados profesionales y asesoría completa.",
    image: siteImages.services[0],
  },
  {
    num: "02",
    title: "DISEÑO DE INTERIORES",
    desc: "Creamos propuestas funcionales y modernas para aprovechar cada area, alineadas con tu estilo y presupuesto.",
    image: siteImages.services[1],
  },
  {
    num: "03",
    title: "FABRICACION DE MOBILIARIO",
    desc: "Diseñamos y fabricamos centros de TV, closets, paneles, cocinas y complementos a medida para cada espacio.",
    image: siteImages.services[2],
  },
  {
    num: "04",
    title: "MANTENIMIENTO TECNICO",
    desc: "Servicio preventivo y correctivo para mantener tus espacios y mobiliario en excelente estado por más tiempo.",
    image: siteImages.services[3],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left dark panel */}
        <div className="lg:col-span-4 bg-warm-dark px-6 md:px-12 py-24 md:py-32 flex flex-col justify-between">
          <div>
            <span className="text-[11px] tracking-[0.2em] text-primary-foreground/50 uppercase">
              SERVICIOS
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-6 font-serif text-4xl md:text-5xl font-normal leading-[1.05] text-primary-foreground"
            >
              PROYECTOS QUE
              <br />
              <span className="italic font-light">T</span>RANFORMAN ESPACIOS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-[13px] leading-relaxed text-primary-foreground/60 font-light max-w-sm"
            >
              Atendemos proyectos residenciales y comerciales
              en Barranquilla con enfoque en calidad,
              cumplimiento y soluciones hechas a medida.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 inline-flex items-center gap-3 group"
            >
              <span className="text-xs tracking-[0.15em] text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                COTIZAR AHORA
              </span>
              <ArrowRight size={14} className="text-primary-foreground/50" />
            </motion.a>
          </div>
        </div>

        {/* Right: Service cards grid */}
        <div className="lg:col-span-5 bg-background grid grid-cols-2 gap-px">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-5 flex flex-col border border-border/50"
            >
              <span className="text-[10px] tracking-[0.1em] text-muted-foreground mb-3">
                {service.num}
              </span>
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-sans text-sm tracking-[0.08em] font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-muted-foreground font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Far right: Background image with text */}
        <div className="lg:col-span-3 relative hidden lg:block">
          <img
            src={siteImages.services[4]}
            alt="Design atmosphere"
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-warm-dark/30" />
          <div className="relative z-10 flex items-end p-8 h-full">
            <p className="text-[12px] leading-relaxed text-primary-foreground/80 font-light italic">
              Remodelacion, diseño interior y
              <br />
              fabricacion personalizada en Barranquilla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
